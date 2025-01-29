import { LoginButton } from "@src/components/LoginButton";
import { MobileHeader } from "./MobileHeader";
import { DesktopHeader } from "./DesktopHeader";

import { MediaQueryWrapper } from "@src/styles/components";
import { appBoundary } from "@src/styles/primitives";
import CategoryCarousal from "../CategoryCarousel";

export async function Header() {
  const data = await fetch("http://localhost:3000/api/homepage", {
    next: { revalidate: 3600 * 24 },
  }).then((res) => res.json());

  const categories = data.categories;
  console.log("categories", categories);
  return (
    <>
      <div className={appBoundary}>
        <MediaQueryWrapper
          mobile={<MobileHeader />}
          tablet={<DesktopHeader nonAuthComponent={<LoginButton />} />}
        />
      </div>

      <div id="categories-section">
        <CategoryCarousal categories={categories} />
      </div>
    </>
  );
}
