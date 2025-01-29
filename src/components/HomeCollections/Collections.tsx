"use server";

import isEmpty from "lodash.isempty";

import { MobileMiddleBanner } from "@src/components/HomepageBanners/Mobile/Middle";
import { DesktopMiddleBanner } from "@src/components/HomepageBanners/Desktop/Middle";
import { MediaQueryWrapper } from "@src/styles/components";

import { Collection } from "./Collection/Collection";

import { collections_container } from "./Collections.styled";
import { HomepageDataResponse } from "@src/contracts";
import { userAgent } from "next/server";
import { headers } from "next/headers";

export async function Collections({
  homepageData,
}: {
  homepageData: HomepageDataResponse;
}) {
  if (isEmpty(homepageData?.feeds)) return null;
  const userAgentObj = userAgent({ headers: headers() });
  return (
    <div className={collections_container}>
      <MediaQueryWrapper
        mobile={<MobileMiddleBanner banners={homepageData.banners} />}
        tablet={<DesktopMiddleBanner banners={homepageData.banners} />}
      />

      {homepageData.feeds.slice(1).map((feed) => (
        <Collection
          feed={feed}
          showViewMore={true}
          key={feed.id}
          isUserAgentMobile={userAgentObj?.device?.type === "mobile"}
        />
      ))}
    </div>
  );
}
