import { Metadata } from "next";
import { Suspense } from "react";
import dynamicLoading from "next/dynamic";
import { unstable_setRequestLocale } from "next-intl/server";

import { HomeCollections } from "@src/components/HomeCollections";
import { newsArticleSchema } from "@src/components/LatestNews";
import { reviewSchema } from "@src/components/Testimonials";
import { generatePageMetadata } from "@src/lib/share/generatePageMetadata";
import { SoumValues } from "@src/components/SoumValues";
import { LOCALE } from "@src/infra/helpers/middleware/withLocale.types";
import Banner from "@src/components/Banners";
import { HomepageDataResponse } from "@src/contracts";
import { getHomepageDataAction } from "@src/app/actions/homepage";

const LatestNews = dynamicLoading(
  () => import("@src/components/LatestNews/LatestNews"),
  { ssr: false }
);
const Testimonials = dynamicLoading(
  () => import("@src/components/Testimonials/Testimonials"),
  { ssr: false }
);

interface HomePageProps {
  params: {
    locale: LOCALE;
  };
}

// Add this export to enable ISR
export const revalidate = 3600;

// Generate static params for all locales
export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export function generateMetadata({ params }: HomePageProps): Metadata {
  return generatePageMetadata({
    title: {
      en: "Soum Saudi Arabia - The best platform to sell and buy second-hand items with 10 days return and installment with 0 interest",
      ar: "سوم السعودية - افضل منصة لبيع وشراء المستعمل مع 10 ايام ضمان وتقسيط بدون فوائد",
    },
    description: {
      en: "Buy and sell mobiles, iPhones, laptops, iPads, or even cars. Soum guarantees your rights and delivers to your doorstep. Installments with Tabby and Tamara",
      ar: "بيع واشتري جوالات، ايفون، لابتوبات، ايبادات او حتى سيارات، سوم تضمن لك حقك وتوصلك لين باب البيت، تقسيط مع تابي وتمارا",
    },
    locale: params.locale,
    index: true,
    pathname: "/",
  });
}

export default async function HomePage({ params: { locale } }: HomePageProps) {
  unstable_setRequestLocale(locale);
  let homepageData: HomepageDataResponse = {
    categories: [],
    mostSoldModels: [],
    banners: { ar: [], en: [] },
    feeds: [],
  };

  try {
    homepageData = await getHomepageDataAction();
  } catch (error) {
    console.error("[Home Page] Error fetching homepage data", error);
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleSchema) }}
      />
      <Suspense>
        <Banner homepageData={homepageData} />
      </Suspense>
      <SoumValues />

      <Suspense fallback={<>LOADING HOMEPAGE PRODUCTS</>}>
        <HomeCollections
          homepageData={JSON.parse(JSON.stringify(homepageData))}
          recommendedProductsTypesense={[]}
        />
      </Suspense>
      <Testimonials />
      <LatestNews />
    </>
  );
}
