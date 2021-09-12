/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_PROPERTY_OPERATION } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryRecentProperties
// ====================================================

export interface QueryRecentProperties_properties_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryRecentProperties_properties_gallery {
  __typename: "ComponentPropertyPropertyGallery";
  id: string;
}

export interface QueryRecentProperties_properties {
  __typename: "Property";
  slug: string;
  title: string;
  cover: QueryRecentProperties_properties_cover | null;
  bathrooms: number;
  bedrooms: number;
  garages: number;
  measures: number;
  operation: ENUM_PROPERTY_OPERATION;
  gallery: (QueryRecentProperties_properties_gallery | null)[] | null;
}

export interface QueryRecentProperties {
  properties: QueryRecentProperties_properties[];
}
