import { HomepageDataResponse } from "@src/contracts";
import { unwrapResponse } from "@src/infra/http";

export const getHomepageData = async () => {
  const data = await fetch("http://localhost:3000/api/homepage", {
    next: { revalidate: 60 * 10 },
  });

  const resp = await data.json();
  const unwrapped = unwrapResponse(resp);

  return unwrapped as HomepageDataResponse;
};
