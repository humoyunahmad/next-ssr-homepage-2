import { css } from "@panda-styled-system/css";

export const headerStyle = css({
  backgroundColor: "blue-base",
  display: "inline-flex",
  justifyContent: "center",
  blockSize: "5rem",
  inlineSize: "100%",
});

export const allCategoriesWrapperStyle = css({
  display: "inline-flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "white",
  inlineSize: "min(100%, 80rem)",
});

export const categoriesButtonStyle = css({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  blockSize: "100%",
  cursor: "pointer",
});

export const allCategoriesButtonStyle = css({
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
});

export const allCategoriesTextStyle = css({
  fontSize: "1.25rem",
  fontWeight: "bold",
  lineHeight: "1.5rem",
  textAlign: "right",
});

export const actionsStyle = css({
  inlineSize: "21rem",
  display: "inline-flex",
  justifyContent: "space-between",
});

export const downloadAppStyle = css({
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  paddingBlock: "0.5rem",
  fontSize: "0.875rem",
  fontWeight: 400,
  lineHeight: "1.05rem",
  textAlign: "left",
});

export const socialsStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "1.125rem",
  paddingBlock: "0.5rem",
});

export const socialImageStyle = css({
  blockSize: "1.5rem",
  inlineSize: "auto",
});
