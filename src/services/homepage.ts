import { HomepageDataResponse } from "@src/contracts";
import { unwrapResponse } from "@src/infra/http";

// import { __IS_PROD__ } from "@src/constants";

const BASE_URL = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000"; // Fallback for local dev

export const getHomepageData = async () => {
  console.log("BASE_URL", BASE_URL);
  const data = await fetch(`${BASE_URL}/api/homepage`, {
    next: { revalidate: 3600 },
  });

  const resp = await data.json();
  const unwrapped = unwrapResponse(resp);

  return unwrapped as HomepageDataResponse;
};
