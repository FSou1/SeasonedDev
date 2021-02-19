import { Context, verify } from "../deps.ts";
import { getToken } from "../jwt.ts";

export async function authorized(context: Context, next: () => Promise<void>) {
  const secret = Deno.env.get("API_SECRET") as string;

  try {
    const jwt = getToken(context.request.headers);
    if (!jwt) {
      throw new Error("!jwt");
    }

    const payload = await verify(jwt, secret, "HS512");
    if (!payload) {
      throw new Error("!payload");
    }

    await next();
  } catch (err) {
    console.error(err);
    context.throw(401, "Unauthorized");
  }
}
