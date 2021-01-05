/**
 * @param  {string} str
 * @param  {number} limit
 * @returns boolean
 */
export function capitalsExceeded(str: string, limit: number): boolean {
  if (!str) {
    return false;
  }

  const upperCaseLetters = str.match(/[A-Z]/g)?.length;
  if (!upperCaseLetters) {
    return false;
  }

  return upperCaseLetters >= str?.length * limit;
}

/**
 * @param  {string} str
 * @returns boolean
 */
export function hasBlacklistedWords(str: string): boolean {
  if (!str) {
    return false;
  }

  const blacklist = ["bastard", "whore"];

  return new RegExp(blacklist.join("|"), "i").test(str);
}
