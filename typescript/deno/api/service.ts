// deno-lint-ignore-file camelcase
import {
  deleteGist,
  fetchGist,
  fetchGists,
  insertGist,
  updateGist,
} from "./db.ts";

export async function createGist(content: string): Promise<IGist> {
  const values = {
    content,
    created_at: new Date(),
  };

  const _id = await insertGist(values);

  return {
    _id,
    ...values,
  };
}

export function getGists(skip: number, limit: number): Promise<IGist[]> {
  return fetchGists(skip, limit);
}

export function getGist(id: string): Promise<IGist> {
  return fetchGist(id);
}

export function removeGist(id: string): Promise<number> {
  return deleteGist(id);
}

export function patchGist(id: string, content: string): Promise<{ modifiedCount: number }> {
  return updateGist({ id, content });
}

interface IGist {
  _id: string;
  content: string;
  created_at: Date;
}
