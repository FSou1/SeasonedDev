// POST /gists
// content string body
// Status: 201 Created
// Status: 400 Bad Request

import { RouterContext } from "../deps.ts";

import { createGist } from "../service.ts";

export async function create(context: RouterContext) {
  if (!context.request.hasBody) {
    context.throw(400, "Bad Request: body is missing");
  }

  const body = context.request.body();
  const { content } = await body.value;
  if (!content) {
    context.throw(400, "Bad Request: content is missing");
  }

  const gist = await createGist(content);

  context.response.body = gist;
  context.response.status = 201;
}
