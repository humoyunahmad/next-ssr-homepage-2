import Link from "next/link";

import {
  MobileAllCategoriesWrapperStyle,
  mobileDownloadAppStyle,
  mobileSocialsStyle,
  socialImageStyle,
} from "./MobileAllCategories.styled";

import {
  HeaderDownloadIcon,
  HeaderFacebookIcon,
  HeaderXIcon,
  HeaderTiktokIcon,
  HeaderInstagramIcon,
} from "@src/styles/icons";
import { useTranslations } from "next-intl";
import { useI18nStore } from "@src/i18n/useI18nStore";

const MobileAllCategories = () => {
  const { isRTL } = useI18nStore();
  const seoTranslations = useTranslations("seo");

  return (
    <header className={MobileAllCategoriesWrapperStyle}>
      <Link href="https://app.adjust.com/11z1py20" target="_blank">
        <button
          type="button"
          aria-label={isRTL ? "حمل التطبيق" : "Download App"}
          className={mobileDownloadAppStyle}
        >
          <HeaderDownloadIcon
            className={socialImageStyle}
            aria-label={isRTL ? "تحميل التطبيق" : "Download the application"}
          />
          {isRTL ? "حمل تطبيق سوم الآن" : "Download App"}
        </button>
      </Link>
      <div className={mobileSocialsStyle} role="list">
        <Link
          href="https://www.facebook.com/share/Fyx7stVSnvDNCkto/?mibextid=qi2Omg"
          target="_blank"
          aria-label={seoTranslations("facebookIcon.linkText")}
          role="link"
        >
          <HeaderFacebookIcon
            className={socialImageStyle}
            aria-label={seoTranslations("facebookIcon.linkText")}
          />
        </Link>
        <Link
          href="https://twitter.com/Soum_online"
          target="_blank"
          role="link"
          aria-label={seoTranslations("xIcon.linkText")}
        >
          <HeaderXIcon
            className={socialImageStyle}
            aria-label={seoTranslations("xIcon.linkText")}
          />
        </Link>
        <Link
          href="https://www.tiktok.com/@soum_online"
          target="_blank"
          role="link"
          aria-label={seoTranslations("tiktokIcon.linkText")}
        >
          <HeaderTiktokIcon
            className={socialImageStyle}
            aria-label={seoTranslations("tiktokIcon.linkText")}
          />
        </Link>
        <Link
          href="https://www.instagram.com/soum_online/"
          target="_blank"
          role="link"
          aria-label={seoTranslations("instagramIcon.linkText")}
        >
          <HeaderInstagramIcon
            className={socialImageStyle}
            aria-label={seoTranslations("instagramIcon.linkText")}
          />
        </Link>
      </div>
    </header>
  );
};

export default MobileAllCategories;
