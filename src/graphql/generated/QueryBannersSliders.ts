/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryBannersSliders
// ====================================================

export interface QueryBannersSliders_bannerSliders_banner_image {
  __typename: "UploadFile";
  url: string;
  name: string;
}

export interface QueryBannersSliders_bannerSliders_banner_button {
  __typename: "ComponentGenericButton";
  label: string;
  link: string;
}

export interface QueryBannersSliders_bannerSliders_banner {
  __typename: "ComponentHomeBanner";
  id: string;
  title: string;
  description: string;
  image: QueryBannersSliders_bannerSliders_banner_image | null;
  button: QueryBannersSliders_bannerSliders_banner_button | null;
}

export interface QueryBannersSliders_bannerSliders {
  __typename: "BannerSlider";
  banner: QueryBannersSliders_bannerSliders_banner | null;
}

export interface QueryBannersSliders {
  bannerSliders: QueryBannersSliders_bannerSliders[];
}
