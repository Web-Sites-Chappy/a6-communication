// Usage:
//   node --env-file=.env.local scripts/hostinger-dns.mjs list <domaine>
//   node --env-file=.env.local scripts/hostinger-dns.mjs upsert <domaine> <nom> <type> <contenu> [ttl]
//   node --env-file=.env.local scripts/hostinger-dns.mjs delete <domaine> <nom> <type>
// Exemples:
//   node --env-file=.env.local scripts/hostinger-dns.mjs list a6agence.com
//   node --env-file=.env.local scripts/hostinger-dns.mjs upsert a6agence.com www CNAME a6agence.com 3600
// Requires HOSTINGER_API_TOKEN in .env.local (généré via hPanel → API : https://hpanel.hostinger.com/api).
// Docs : https://developers.hostinger.com/ (DNS Zone API, /api/dns/v1/zones/{domain}).

const API_BASE = "https://developers.hostinger.com/api/dns/v1/zones";

function usageError(message) {
  console.error(message);
  console.error("Usage :");
  console.error("  node --env-file=.env.local scripts/hostinger-dns.mjs list <domaine>");
  console.error("  node --env-file=.env.local scripts/hostinger-dns.mjs upsert <domaine> <nom> <type> <contenu> [ttl]");
  console.error("  node --env-file=.env.local scripts/hostinger-dns.mjs delete <domaine> <nom> <type>");
  process.exit(1);
}

function parseArgs() {
  const [command, domain, ...rest] = process.argv.slice(2);
  if (!command || !domain) {
    usageError("Commande ou domaine manquant.");
  }
  if (command === "list") {
    return { command, domain };
  }
  if (command === "upsert") {
    const [name, type, content, ttlRaw] = rest;
    if (!name || !type || !content) {
      usageError("upsert requiert : <nom> <type> <contenu> [ttl].");
    }
    const ttl = ttlRaw ? Number.parseInt(ttlRaw, 10) : 14400;
    if (!Number.isInteger(ttl) || ttl < 1) {
      usageError("Le TTL doit être un entier positif.");
    }
    return { command, domain, name, type: type.toUpperCase(), content, ttl };
  }
  if (command === "delete") {
    const [name, type] = rest;
    if (!name || !type) {
      usageError("delete requiert : <nom> <type>.");
    }
    return { command, domain, name, type: type.toUpperCase() };
  }
  usageError(`Commande inconnue : ${command}`);
}

async function callApi(token, domain, method, body) {
  const response = await fetch(`${API_BASE}/${encodeURIComponent(domain)}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!response.ok) {
    const responseBody = await response.text();
    throw new Error(`Hostinger API a échoué (${response.status}) : ${responseBody}`);
  }
  if (response.status === 204) {
    return null;
  }
  return response.json();
}

async function main() {
  const token = process.env.HOSTINGER_API_TOKEN;
  if (!token) {
    console.error("HOSTINGER_API_TOKEN manquant. Ajoute-le dans .env.local puis relance avec --env-file=.env.local.");
    process.exit(1);
  }

  const args = parseArgs();

  if (args.command === "list") {
    const zone = await callApi(token, args.domain, "GET");
    for (const record of zone) {
      const values = record.records.map((r) => r.content).join(", ");
      console.log(`${record.type.padEnd(6)} ${record.name.padEnd(20)} TTL=${record.ttl}  ${values}`);
    }
    return;
  }

  if (args.command === "upsert") {
    await callApi(token, args.domain, "PUT", {
      overwrite: false,
      zone: [
        {
          name: args.name,
          type: args.type,
          ttl: args.ttl,
          records: [{ content: args.content }],
        },
      ],
    });
    console.log(`✓ ${args.type} ${args.name}.${args.domain} → ${args.content} (TTL=${args.ttl})`);
    return;
  }

  if (args.command === "delete") {
    await callApi(token, args.domain, "DELETE", {
      filters: [{ name: args.name, type: args.type }],
    });
    console.log(`✓ Supprimé : ${args.type} ${args.name}.${args.domain}`);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
