import { InView } from "react-intersection-observer";
import { cx } from "@panda-styled-system/css";
import { useTranslations } from "next-intl";

import { Link as NextLink } from "@src/i18n/routing";
import {
  categoryItemStyle,
  emblaSlideStyle,
  iconStyle,
  labelStyle,
  selectedItemStyle,
} from "./DesktopCategory.styled";

interface Category {
  _id: string;
  category_name_ar: string;
  category_name: string;
  category_icon: string;
  position: number;
  mini_category_icon: string;
  created_at: string;
  updated_at: string;
}

type DesktopCategoryProps = {
  category: Category;
  href: string;
  isSelected: boolean;
  isRTL: boolean;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const DesktopCategory = ({
  category,
  href,
  isSelected,
  isRTL,
  Icon,
}: DesktopCategoryProps) => {
  const seoTranslations = useTranslations("seo");

  return (
    <InView as="div" key={category._id} className={emblaSlideStyle}>
      <NextLink
        href={href}
        aria-label={seoTranslations("categoryIcon.linkText", {
          arName: category.category_name_ar,
          enName: category.category_name,
        })}
        title={
          isRTL
            ? `${category.category_name_ar} مستعملة`
            : `Used ${category.category_name}`
        }
      >
        <div
          className={
            isSelected
              ? cx(categoryItemStyle, selectedItemStyle)
              : categoryItemStyle
          }
        >
          <div className={iconStyle}>
            <Icon
              role="img"
              aria-label={seoTranslations("categoryIcon.imgText", {
                arName: category.category_name_ar,
                enName: category.category_name,
              })}
              width={24}
            />

            <span className={labelStyle}>
              {isRTL ? category.category_name_ar : category.category_name}
            </span>
          </div>
        </div>
      </NextLink>
    </InView>
  );
};

export default DesktopCategory;
