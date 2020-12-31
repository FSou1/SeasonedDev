export function getShibe(): Promise<string> {
  return fetch("http://shibe.online/api/shibes")
    .then((response) => response.json())
    .then((data) => data[0]);
}
