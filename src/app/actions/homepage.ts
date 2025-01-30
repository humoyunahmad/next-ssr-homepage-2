"use server";

import homepageData from "@src/app/homepage-data.json";
import { HomepageDataResponse } from "@src/contracts";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getHomepageDataAction() {
  // to simulate real-world scenario, we are adding a delay of 100ms
  await delay(100);

  return homepageData as unknown as HomepageDataResponse;
}
