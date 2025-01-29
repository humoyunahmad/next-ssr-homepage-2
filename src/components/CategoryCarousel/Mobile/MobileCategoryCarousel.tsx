"use client";

import { cx } from "@panda-styled-system/css";
import { useParams } from "next/navigation";
import useEmblaCarousel from "embla-carousel-react";
import { InView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

import {
  carouselWrapperStyle,
  categoryItemStyle,
  emblaStyle,
  emblaContainerStyle,
  emblaSlideStyle,
  iconStyle,
  labelStyle,
  selectedItemStyle,
  selectedLabelStyle,
} from "./MobileCatergoryCarousel.styled";
import { Link as NextLink } from "@src/i18n/routing";
import { getCategoryIcon } from "../icons";
import { useI18nStore } from "@src/i18n/useI18nStore";
import { getCategoryFromGetCategoryListModel } from "@src/infra/helpers/utils";
import { useCategoryUtils } from "@src/hooks/useCategoryUtils";
import { GetCategoryListModel } from "@src/types";
import { FC } from "react";

const MobileCategoryCarousel = ({
  categories,
}: {
  categories: GetCategoryListModel[];
}) => {
  const seoTranslations = useTranslations("seo");

  const { isRTL } = useI18nStore();

  const params = useParams();
  const categoryName = params?.categoryName as string | undefined;

  const [emblaRef] = useEmblaCarousel({
    active: false,
    align: "center",
    containScroll: "trimSnaps",
    direction: isRTL ? "rtl" : "ltr",
    dragFree: true,
    breakpoints: {
      "(max-width: 768px)": { active: true },
    },
  });

  const { getCategoryLink } = useCategoryUtils();

  const activeCategory = getCategoryFromGetCategoryListModel(
    categories,
    categoryName ?? ""
  );

  return (
    <div className={carouselWrapperStyle}>
      <div className={emblaStyle} ref={emblaRef}>
        <div className={emblaContainerStyle}>
          {categories.map((item) => {
            const isCategoryActive = activeCategory?._id === item._id;

            const Icon = getCategoryIcon(item.category_name)(isRTL) as FC<{
              width: number;
              role: "img";
            }>;

            return (
              <InView as="div" key={item._id} className={emblaSlideStyle}>
                <NextLink
                  href={getCategoryLink(item)}
                  aria-label={seoTranslations("categoryIcon.linkText", {
                    arName: item.category_name_ar,
                    enName: item.category_name,
                  })}
                >
                  <div
                    className={
                      isCategoryActive
                        ? cx(selectedItemStyle, categoryItemStyle)
                        : categoryItemStyle
                    }
                  >
                    <div className={iconStyle}>
                      <Icon
                        role="img"
                        aria-label={seoTranslations("categoryIcon.imgText", {
                          arName: item.category_name_ar,
                          enName: item.category_name,
                        })}
                        width={24}
                      />
                    </div>
                    <span
                      className={
                        isCategoryActive
                          ? cx(selectedLabelStyle, labelStyle)
                          : labelStyle
                      }
                    >
                      {isRTL ? item.category_name_ar : item.category_name}
                    </span>
                  </div>
                </NextLink>
              </InView>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileCategoryCarousel;
