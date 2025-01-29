"use client";

import { useTranslations } from "next-intl";

import Image from "next/image";
import { css } from "@panda-styled-system/css";
import { useRouter } from "@src/i18n/routing";
import { Box, Stack } from "@panda-styled-system/jsx";

export function NotFound() {
  const t = useTranslations("error");
  const router = useRouter();
  function goToHome() {
    router.push("/");
  }

  return (
    <div
      className={css({
        position: "relative",
        lineHeight: 1.2,
        paddingBlock: [8, 8, 13, 13],
      })}
    >
      <div className={css({ display: "flex", justifyContent: "center" })}>
        <Image src="/images/404.svg" alt="404" />
      </div>
      <div
        className={css({
          textAlign: "center",
          marginBlockEnd: 1,
          paddingBlock: "3",
        })}
      >
        <Stack gap="2" direction="vertical">
          <p>{t("oops")}</p>
          <p>{t("notFound")}</p>
          <p>{t("findWhatNeed")}</p>
          <Box paddingBlockStart={[0, 0, 2, 2]}>
            <Stack justify="center">
              <div
                className={css({
                  width: ["100%", "100%", 226, 226],
                  display: "flex",
                  justifyContent: "center",
                })}
              >
                <button onClick={goToHome}>{t("home")}</button>
              </div>
            </Stack>
          </Box>
        </Stack>
      </div>
    </div>
  );
}
