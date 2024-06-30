import { eq } from "drizzle-orm";
import { getDB, contacts } from "../db";
import type { contactCreate } from "../types";

export const getOne = async (id: string) => {
  const db = getDB();
  const query = db.query.contacts.findFirst({
    where: (contact, { eq }) => eq(contact.id, id),
  });
  return await query.execute();
};

export const getAll = async () => {
  const db = getDB();
  const query = db.query.contacts.findMany();
  return await query.execute();
};

export const create = async (contact: contactCreate) => {
  const db = getDB();
  const query = db
    .insert(contacts)
    .values(contact)
    .returning()
    .catch((e) => {
      console.error(e);
      return undefined;
    });

  return await query;
};

export const update = async (
  id: string,
  contact: Partial<contactCreate> & { id?: string },
) => {
  const db = getDB();
  const query = db
    .update(contacts)
    .set(contact)
    .where(eq(contacts.id, id))
    .returning()
    .catch((e) => {
      console.error(e);
      return undefined;
    });
  return await query;
};

export const deleteOne = async (id: string) => {
  const db = getDB();
  const query = db
    .delete(contacts)
    .where(eq(contacts.id, id))
    .returning()
    .catch((e) => {
      console.error(e);
      return undefined;
    });
  return await query;
};
