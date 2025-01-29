import { headers } from "next/headers";
import { userAgent } from "next/server";

import DesktopCategoryCarousel from "./Desktop/DesktopCatergoryCarousel";
import MobileCategoryCarousel from "./Mobile/MobileCategoryCarousel";
import { GetCategoryListModel } from "@src/types";

const CategoryCarousal = ({
  categories,
}: {
  categories: GetCategoryListModel[];
}) => {
  const userAgentObj = userAgent({ headers: headers() });

  return userAgentObj.device.type === "mobile" ? (
    <MobileCategoryCarousel categories={categories} />
  ) : (
    <DesktopCategoryCarousel categories={categories} />
  );
};

export default CategoryCarousal;
