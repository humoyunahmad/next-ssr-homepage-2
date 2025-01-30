"use client";

import { useState } from "react";

import { useTranslations } from "next-intl";

import {
  HeaderDownloadIcon,
  HeaderFacebookIcon,
  HeaderXIcon,
  HeaderTiktokIcon,
  HeaderInstagramIcon,
} from "@src/styles/icons";

import {
  headerStyle,
  allCategoriesWrapperStyle,
  categoriesButtonStyle,
  actionsStyle,
  downloadAppStyle,
  socialsStyle,
  allCategoriesTextStyle,
  allCategoriesButtonStyle,
  socialImageStyle,
} from "./DesktopAllCategories.styled";
import { Link } from "@src/i18n/routing";
import { useI18nStore } from "@src/i18n/useI18nStore";
import { HamburgerMenuIcon } from "@src/styles/assets/icons/Icons";

const DesktopAllCategories = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const seoTranslations = useTranslations("seo");

  const { isRTL } = useI18nStore();

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className={headerStyle}>
      <div className={allCategoriesWrapperStyle}>
        <div
          className={categoriesButtonStyle}
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button
            aria-label={seoTranslations("menuButton.buttonText")}
            type="button"
            className={allCategoriesButtonStyle}
            onClick={handleDropdownToggle}
          >
            <HamburgerMenuIcon
              aria-label={seoTranslations("menuButton.iconText")}
            />
            <p className={allCategoriesTextStyle}>
              {isRTL ? "التصنيفات" : "All Categories"}
            </p>
          </button>
        </div>
        <div className={actionsStyle}>
          <Link href="https://app.adjust.com/11z1py20" target="_blank">
            <button
              type="button"
              aria-label={isRTL ? "حمل التطبيق" : "Download App"}
              className={downloadAppStyle}
            >
              <HeaderDownloadIcon
                className={socialImageStyle}
                aria-label={
                  isRTL ? "تحميل التطبيق" : "Download the application"
                }
              />
              {isRTL ? "حمل تطبيق سوم الآن" : "Download App"}
            </button>
          </Link>
          <div className={socialsStyle} role="list">
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
              aria-label={seoTranslations("xIcon.linkText")}
              role="link"
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
        </div>
      </div>
    </header>
  );
};

export default DesktopAllCategories;
