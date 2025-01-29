import { useI18nStore } from "@src/i18n/useI18nStore";
import { LOCALE } from "@src/infra/helpers/middleware/withLocale.types";
import { createSafeUrl } from "@src/infra/helpers/utils";
import { GetCategoryListModel } from "@src/types";
import { useCallback } from "react";

export function useCategoryUtils() {
  const { isRTL, locale } = useI18nStore();

  const displayName = useCallback<(category: GetCategoryListModel) => string>(
    (category) => {
      return isRTL ? category.category_name_ar : category.category_name;
    },
    [isRTL]
  );

  const getCategoryLink = useCallback<
    (category: GetCategoryListModel) => string
  >(
    (category) => {
      return getLink(category, locale as LOCALE);
    },
    [locale]
  );

  return {
    displayName,
    getCategoryLink,
  };
}

export function getLink(category: GetCategoryListModel, locale: LOCALE) {
  return getCategorySafeUrl(category, locale);
}

export function getCategorySafeUrl(
  category: Pick<GetCategoryListModel, "category_name" | "category_name_ar">,
  locale: LOCALE
) {
  const categoryName = createSafeUrl(
    locale === "ar" ? category.category_name_ar : category.category_name
  );
  return `/${categoryName}`;
}
