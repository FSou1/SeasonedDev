import { assertEquals } from "https://deno.land/std@0.82.0/testing/asserts.ts";

import { getToken } from './jwt.ts';

Deno.test('Test getToken: returns null if header is missing', () => {
    const headers = new Headers();
    assertEquals(getToken(headers), null);
});

Deno.test('Test getToken: returns null if header[0] is not Bearer', () => {
    const headers = new Headers();
    headers.append('Authorization', 'Basic jedfhj324f.34rj3h4f.sdfjsdf');
    assertEquals(getToken(headers), null);
});

Deno.test('Test getToken: returns null if header[1] is missing', () => {
    const headers = new Headers();
    headers.append('Authorization', 'Basic');
    assertEquals(getToken(headers), null);
});

Deno.test('Test getToken: returns token if header[0] is Bearer, and header[1] exists', () => {
    const headers = new Headers();
    headers.append('Authorization', 'Bearer jedfhj324f.34rj3h4f.sdfjsdf');
    assertEquals(getToken(headers), 'jedfhj324f.34rj3h4f.sdfjsdf');
});