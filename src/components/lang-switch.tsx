"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/nav";

export default function LanguageSwitch() {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    function handleLanguageChange() {
        const newLocale = locale === "fa" ? "en" : "fa";

        router.replace(pathname, { locale: newLocale });
    }

    return (
        <button
            type="button"
            onClick={handleLanguageChange}
            className="rounded-lg border text-base px-5 py-2 font-medium bg-[#E2EFFE] text-[#0318A1] hover:bg-[#8049FD] hover:text-[#FFFFFF]"
        >
            {locale === "fa" ? "English" : "فارسی"}
        </button>
    );
}