export function testEmail(email?: string) {
  if (!email) return false;
  const emailRegex: RegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
}
export function testNamespace(namespace?: string) {
  if (!namespace) return false;
  const namespaceRegex: RegExp = /^[A-Za-z0-9_-]{5,36}$/;
  return namespaceRegex.test(namespace);
}
