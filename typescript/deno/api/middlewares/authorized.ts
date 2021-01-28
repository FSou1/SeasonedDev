import { Context, verify } from "../deps.ts";
import { getToken } from "../jwt.ts";

export async function authorized(context: Context, next: any) {
  const secret = Deno.env.get("API_SECRET") as string;

  try {
    const jwt = getToken(context);
    if (!jwt) {
      context.throw(401, "Unauthorized");
    }

    const payload = await verify(jwt, secret, "HS512");
    if (!payload) {
      context.throw(401, "Unauthorized");
    }

    await next();
  } catch (err) {
    console.log(err);
  }
}