import { defaultLocale, locales } from "./lib/i18n/i18n";
import createMiddleware from "next-intl/middleware";

const handleI18nRouting = createMiddleware({
  locales,
  defaultLocale,
});

export default async function middleware(request) {
  const [, locale, ...segments] = request.nextUrl.pathname.split("/");
  const session = request.cookies.get("session");
  const host = request.nextUrl.origin;

  const shouldHandle =
    request.nextUrl.pathname === "/" ||
    new RegExp(`^/(${locales.join("|")})(/.*)?$`).test(
      request.nextUrl.pathname
    );
  if (!shouldHandle) return;

  return handleI18nRouting(request);
}
