// GET /gists/{gist_id}
// gist_id string path
// Status: 200 OK
// Status: 400 Bad Request
// Status: 404 Not Found

import { RouterContext } from "../deps.ts";

import { getGist } from "../service.ts";

export async function get(context: RouterContext) {
  const { id } = context.params;
  if (!id) {
    context.throw(400, "Bad Request: id is missing");
  }

  const gist = await getGist(id);
  if (!gist) {
    context.throw(404, "Not Found: the gist is missing");
  }

  context.response.body = gist;
  context.response.status = 200;
}
