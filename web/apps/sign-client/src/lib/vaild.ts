export function testEmail(email?: string): boolean {
  if (!email) {
    return false;
  }
  const emailRegex: RegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
}

export function testPassword(password?: string, again?: string): boolean {
  if (!password) {
    return false;
  }
  if (again) {
    if (again === password) {
      return true;
    }
    return false;
  }
  return true;
}
