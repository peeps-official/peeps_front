export function onlyEnglishAndNumber(str: string): boolean {
  return /^[A-Za-z0-9][A-Za-z0-9]*$/.test(str)
}
