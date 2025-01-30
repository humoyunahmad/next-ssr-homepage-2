import { LoginButton } from "@src/components/LoginButton";
import { MobileHeader } from "./MobileHeader";
import { DesktopHeader } from "./DesktopHeader";

import { MediaQueryWrapper } from "@src/styles/components";
import { appBoundary } from "@src/styles/primitives";
import CategoryCarousal from "../CategoryCarousel";
import { GetCategoryListModel } from "@src/types";
import DesktopAllCategories from "../AllCategories/Desktop/DesktopAllCategories";
import MobileAllCategories from "../AllCategories/Mobile/MobileAllCategories";
import { getHomepageData } from "@src/services/homepage";
// import { __IS_PROD__ } from "@src/constants";

export async function Header() {
  let categories: GetCategoryListModel[] = [];

  try {
    const homepageData = await getHomepageData();
    categories = homepageData.categories as unknown as GetCategoryListModel[];
  } catch (error) {
    console.error("[Home Page] Error fetching homepage data", error);
  }

  return (
    <>
      <div className={appBoundary}>
        <MediaQueryWrapper
          mobile={<MobileHeader />}
          tablet={<DesktopHeader nonAuthComponent={<LoginButton />} />}
        />
      </div>
      <MediaQueryWrapper
        mobile={<MobileAllCategories />}
        tablet={<DesktopAllCategories />}
      />
      <div id="categories-section">
        <CategoryCarousal categories={categories} />
      </div>
    </>
  );
}
