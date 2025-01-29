export type GetCategoryListModel = {
  _id: string;
  category_name_ar: string;
  category_name: string;
  category_icon: string;
  position: number;
  mini_category_icon: string;
  created_at: string;
  updated_at: string;
};

export type DomainGetCategoryListModel = {
  _id: string;
  category_name_ar: string;
  category_name: string;
  category_icon: string;
  position: number;
  mini_category_icon: string;
  created_at: string;
  updated_at: string;
};

export type DomainGetModelListModel = {
  id: string;
  arName: string;
  enName: string;
  modelIcon: string;
  totalAvailableProducts: number;
  maxPercentage: number;
};

type BrandStatus = "Active";

export type GetModelListModel = {
  id: string;
  name: string;
  arName: string;
  icon: string;
  totalAvailableProducts: number;
  maxPercentage: number;
};

export type DomainGetBrandListModel = {
  status: BrandStatus;
  position: number;
  _id: string;
  brand_name_ar: string;
  created_at: string;
  updated_at: string;
  category_id: string;
  brand_name: string;
  brand_icon: string;
};
