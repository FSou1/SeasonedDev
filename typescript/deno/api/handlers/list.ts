// GET /gists
// skip integer query
// limit integer query
// Status: 200 OK

import { getQuery, RouterContext } from "../deps.ts";
import { getPayloadFromToken } from "../jwt.ts";

import { getGists } from "../service.ts";

export async function list(context: RouterContext) {
  const payload = getPayloadFromToken(context.request.headers);
  console.log(payload);

  const { skip, limit } = getQuery(context);

  const gists = await getGists(+skip || 0, +limit || 0);

  context.response.body = gists;
  context.response.status = 200;
}
