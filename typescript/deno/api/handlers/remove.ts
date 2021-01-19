// DELETE /gists/{gist_id}
// gist_id string path
// Status: 204 No Content
// Status: 404 Not Found

import { RouterContext } from "../deps.ts";

import { getGist, removeGist } from "../service.ts";

export async function remove(context: RouterContext) {
  const { id } = context.params;
  if (!id) {
    context.throw(400, "Bad Request: id is missing");
  }

  const gist = await getGist(id);
  if (!gist) {
    context.throw(404, "Not Found: the gist is missing");
  }

  await removeGist(id);

  context.response.status = 204;
}
