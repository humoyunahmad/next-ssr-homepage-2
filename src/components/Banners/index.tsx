"use server";

import { headers } from "next/headers";
import { userAgent } from "next/server";
import DesktopHomepageUpperBanners from "@src/components/HomepageBanners/Desktop/Upper/DesktopHomepageUpperBanners";
import MobileHomepageUpperBanners from "@src/components/HomepageBanners/Mobile/Upper/MobileHomepageUpperBanners";
import { HomepageDataResponse } from "@src/contracts";

const Banner = ({ homepageData }: { homepageData: HomepageDataResponse }) => {
  const userAgentObj = userAgent({ headers: headers() });
  return userAgentObj?.device?.type === "mobile" ? (
    <MobileHomepageUpperBanners banners={homepageData.banners} />
  ) : (
    <DesktopHomepageUpperBanners banners={homepageData.banners} />
  );
};

export default Banner;
