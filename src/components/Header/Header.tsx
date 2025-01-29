import { LoginButton } from "@src/components/LoginButton";
import { MobileHeader } from "./MobileHeader";
import { DesktopHeader } from "./DesktopHeader";

import { MediaQueryWrapper } from "@src/styles/components";
import { appBoundary } from "@src/styles/primitives";
import CategoryCarousal from "../CategoryCarousel";
// import { __IS_PROD__ } from "@src/constants";

const BASE_URL = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000"; // Fallback for local dev

export async function Header() {
  const data = await fetch(`${BASE_URL}/api/homepage`, {
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
