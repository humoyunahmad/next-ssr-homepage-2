import { unstable_setRequestLocale } from "next-intl/server";

import { Metadata } from "next";
import { generatePageMetadata } from "@src/lib/share/generatePageMetadata";
import { LOCALE } from "@src/infra/helpers/middleware/withLocale.types";
import { PrivacyPolicy } from "@src/components/PrivacyPolicy";

interface PrivacyPolicyPageProps {
  params: {
    locale: LOCALE;
  };
}

export function generateMetadata({
  params: { locale },
}: PrivacyPolicyPageProps): Metadata {
  return generatePageMetadata({
    title: {
      en: "Soum Saudi Arabia - Privacy Policy",
      ar: "سوم السعودية - سياسة الخصوصية",
    },
    description: {
      en: "Read the privacy policy of Soum Saudi Arabia, the leading online selling platform. Learn how we collect, use, and protect your data.",
      ar: "اقرأ سياسة الخصوصية لسوم السعودية، المنصة الرائدة للبيع عبر الإنترنت. تعرف على كيفية جمعنا واستخدامنا وحمايتنا لبياناتك.",
    },
    locale,
    index: true,
    pathname: "/",
  });
}

export default function PrivacyPolicyPage({
  params: { locale },
}: PrivacyPolicyPageProps) {
  unstable_setRequestLocale(locale);
  return <PrivacyPolicy />;
}
