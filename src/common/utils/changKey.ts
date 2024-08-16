export function changeKey(obj: any, oldKey: string, newKey: string) {
  if (oldKey !== newKey) {
    obj[newKey] = obj[oldKey]
    delete obj[oldKey]
  }
}
