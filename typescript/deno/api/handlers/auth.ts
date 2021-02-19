// deno-lint-ignore-file camelcase
import { RouterContext, create, getNumericDate } from "../deps.ts";

export async function auth(context: RouterContext) {
  if (!context.request.hasBody) {
    context.throw(400, "Bad Request: body is missing");
  }

  const body = context.request.body();
  const { username, password } = await body.value;
  if (!username || !password) {
    context.throw(400, "Bad Request: username/password is missing");
  }

  const responseBody = {
    access_token: await getToken(getPayload(username)),
  };

  context.response.body = responseBody;
  context.response.status = 200;
}

function getToken(payload: Payload): Promise<string> {
  const secret = Deno.env.get("API_SECRET") as string;

  return create({ alg: "HS512", typ: "JWT" }, payload, secret);
}

function getPayload(username: string): Payload {
  return {
    username,
    role: "admin",
    exp: getNumericDate(60 * 60),
  };
}

interface Payload {
  exp: number;
  [key: string]: unknown
}