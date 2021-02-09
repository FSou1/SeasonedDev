import { decode } from "./deps.ts";

export function getToken(headers: Headers) {
  const authorization = headers.get("Authorization");
  if (!authorization) {
    return null;
  }

  // Bearer asdfkjshfkj4hkfj34./sdfhjksdhfjk.34r
  const [method, token] = authorization.split(" ");
  if (method !== "Bearer") {
    return null;
  }

  if (!token) {
    return null;
  }

  return token;
}

export function getPayloadFromToken(headers: Headers) {
  try {
    const token = getToken(headers);
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
