import {
  AdminImagePresetValues,
  StaticImagePresetValues,
  MppImagePresetValues,
  HomepageUpperBannerPresetValues,
  HomepageMiddleBannerPresetValues,
} from "../hooks";

const DeviceTypes = {
  SMALL_MOBILE: "SMALL_MOBILE",
  WIDE_MOBILE: "WIDE_MOBILE",
  TABLET: "TABLET",
  DESKTOP: "DESKTOP",
} as const;

const SecondarySppImagePresets = {
  [DeviceTypes.SMALL_MOBILE]: "spp_thumbnail_image_expand_view_mobile",
  [DeviceTypes.WIDE_MOBILE]: "spp_thumbnail_image_expand_view_mobile",
  [DeviceTypes.TABLET]: "spp_thumbnail_image_image_expand_view_desktop",
  [DeviceTypes.DESKTOP]: "spp_thumbnail_image_dektop",
} as const;

type SecondarySppImagePresets = keyof typeof SecondarySppImagePresets;
type SecondarySppImagePresetValues =
  (typeof SecondarySppImagePresets)[SecondarySppImagePresets];

const HomepageMostSoldDevicesPresets = {
  [DeviceTypes.SMALL_MOBILE]: "homepage_most_sold_devices_mobile",
  [DeviceTypes.WIDE_MOBILE]: "homepage_most_sold_devices_mobile",
  [DeviceTypes.TABLET]: "homepage_most_sold_devices_desktop",
  [DeviceTypes.DESKTOP]: "homepage_most_sold_devices_desktop",
} as const;

type HomepageMostSoldDevicesPresets =
  keyof typeof HomepageMostSoldDevicesPresets;
type HomepageMostSoldDevicesValues =
  (typeof HomepageMostSoldDevicesPresets)[HomepageMostSoldDevicesPresets];

type ImagePresets =
  | SecondarySppImagePresetValues
  | AdminImagePresetValues
  | StaticImagePresetValues
  | MppImagePresetValues
  | HomepageUpperBannerPresetValues
  | HomepageMiddleBannerPresetValues
  | HomepageMostSoldDevicesValues;

const CLOUDIMG_API_KEY = "cltarabyfa";

export function getCloudImgSrc(
  originalSource: string,
  imgPreset: ImagePresets
) {
  return `https://${CLOUDIMG_API_KEY}.cloudimg.io/${originalSource}?p=${imgPreset}`;
}
