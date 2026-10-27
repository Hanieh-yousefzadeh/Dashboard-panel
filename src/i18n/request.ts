import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
    const currentLocale = hasLocale(routing.locales, locale)
        ? locale
        : routing.defaultLocale;

    let messages;

    if (currentLocale === "fa") {
        messages = (await import("../messages/fa.json")).default
    } else {
        messages = (await import("../messages/en.json")).default
    }

    return {
        locale: currentLocale,
        messages: messages,
    };
});