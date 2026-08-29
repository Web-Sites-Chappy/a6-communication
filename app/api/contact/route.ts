import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  org: string;
  service: string;
  message: string;
}

function splitName(fullName: string): { firstname: string; lastname: string } {
  const trimmed = fullName.trim();
  const spaceIndex = trimmed.indexOf(" ");
  if (spaceIndex === -1) return { firstname: trimmed, lastname: "" };
  return { firstname: trimmed.slice(0, spaceIndex), lastname: trimmed.slice(spaceIndex + 1) };
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Une note associée au contact garantit que chaque message reste visible dans le
// CRM : contrairement à la propriété "message" sur le contact, elle n'est jamais
// écrasée par la soumission suivante du même email (upsert remplace la propriété).
async function createContactNote(token: string, contactId: string, message: string): Promise<void> {
  const response = await fetch("https://api.hubapi.com/crm/v3/objects/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      properties: {
        hs_note_body: message,
        hs_timestamp: Date.now(),
      },
      associations: [
        {
          to: { id: contactId },
          types: [{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: 202 }],
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error("HubSpot note creation failed", response.status, errorBody);
  }
}

export async function POST(request: Request) {
  const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  if (!token) {
    console.error("HUBSPOT_PRIVATE_APP_TOKEN is not configured");
    return NextResponse.json({ error: "Configuration serveur manquante." }, { status: 500 });
  }

  const body = (await request.json()) as Partial<ContactPayload>;
  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const org = body.org?.trim() ?? "";

  if (!name || !isValidEmail(email) || !message) {
    return NextResponse.json({ error: "Champs invalides." }, { status: 400 });
  }

  const { firstname, lastname } = splitName(name);

  const hubspotResponse = await fetch(
    "https://api.hubapi.com/crm/v3/objects/contacts/batch/upsert",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        inputs: [
          {
            idProperty: "email",
            id: email,
            properties: {
              email,
              firstname,
              lastname,
              company: org,
              message,
            },
          },
        ],
      }),
    }
  );

  if (!hubspotResponse.ok) {
    const errorBody = await hubspotResponse.text();
    console.error("HubSpot upsert failed", hubspotResponse.status, errorBody);
    return NextResponse.json({ error: "Échec de l'envoi. Réessayez plus tard." }, { status: 502 });
  }

  const upsertResult = (await hubspotResponse.json()) as { results?: Array<{ id?: string }> };
  const contactId = upsertResult.results?.[0]?.id;

  if (contactId) {
    await createContactNote(token, contactId, message);
  } else {
    console.error("HubSpot upsert succeeded without a contact id in the response", upsertResult);
  }

  return NextResponse.json({ ok: true });
}
