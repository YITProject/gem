export default {
  reactStrictMode: true,
  transpilePackages: ["ui"],
};
const locales = ["en", "zh"];
export const i18n = {
  locales,
  defaultLocale: locales[0],
  params: locales.map((locale) => ({ locale })),
};
