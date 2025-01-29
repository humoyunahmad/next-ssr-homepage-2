import { HomepageDataResponse } from "@src/contracts";
import { unwrapResponse } from "@src/infra/http";

import { __IS_PROD__ } from "@src/constants";

const BASE_URL = __IS_PROD__
  ? "https://next-ssr-homepage-2.vercel.app"
  : "http://localhost:3000";

export const getHomepageData = async () => {
  const data = await fetch(`${BASE_URL}/api/homepage`, {
    next: { revalidate: 3600 },
  });

  const resp = await data.json();
  const unwrapped = unwrapResponse(resp);

  return unwrapped as HomepageDataResponse;
};
