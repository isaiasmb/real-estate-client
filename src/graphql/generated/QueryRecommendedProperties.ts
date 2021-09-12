/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_PROPERTY_OPERATION } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryRecommendedProperties
// ====================================================

export interface QueryRecommendedProperties_recommended_properties_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryRecommendedProperties_recommended_properties_gallery {
  __typename: "ComponentPropertyPropertyGallery";
  id: string;
}

export interface QueryRecommendedProperties_recommended_properties {
  __typename: "Property";
  slug: string;
  title: string;
  cover: QueryRecommendedProperties_recommended_properties_cover | null;
  bathrooms: number;
  bedrooms: number;
  garages: number;
  measures: number;
  operation: ENUM_PROPERTY_OPERATION;
  gallery: (QueryRecommendedProperties_recommended_properties_gallery | null)[] | null;
}

export interface QueryRecommendedProperties_recommended {
  __typename: "Recommended";
  title: string;
  properties: QueryRecommendedProperties_recommended_properties[];
}

export interface QueryRecommendedProperties {
  recommended: QueryRecommendedProperties_recommended | null;
}
