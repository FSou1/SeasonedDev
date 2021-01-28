import { Context, decode } from "./deps.ts";

export function getPayloadFromToken(context: Context) {
  try {
    const token = getToken(context);
    if (!token) {
      return null;
    }

    const { signature, payload } = decode(token);
    if (!payload) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

export function getToken(context: Context) {
  try {
    return getTokenFromHeaders(context.request.headers);
  } catch {
    return null;
  }
}

function getTokenFromHeaders(headers: Headers) {
  const authorization = headers.get("Authorization");
  if (!authorization) {
    return null;
  }

  const [method, token] = authorization.split(" ");
  if (method !== "Bearer") {
    return null;
  }

  if (!token) {
    return null;
  }

  return token;
}
