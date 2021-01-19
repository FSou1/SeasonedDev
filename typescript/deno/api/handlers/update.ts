// PATCH /gists/{gist_id}
// gist_id string path
// content string body
// Status: 200 OK
// Status: 400 Bad Request
// Status: 404 Not Found

import { RouterContext } from "../deps.ts";

import { getGist, patchGist } from "../service.ts";

export async function update(context: RouterContext) {
  const { id } = context.params;
  if (!id) {
    context.throw(400, "Bad Request: id is missing");
  }

  const body = context.request.body();
  const { content } = await body.value;
  if (!content) {
    context.throw(400, "Bad Request: content is missing");
  }

  const gist = await getGist(id);
  if (!gist) {
    context.throw(404, "Not Found: the gist is missing");
  }

  await patchGist(id, content);

  context.response.status = 200;
}
