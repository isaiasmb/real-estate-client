/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_PROPERTY_OPERATION } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryProperties
// ====================================================

export interface QueryProperties_properties_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryProperties_properties_gallery {
  __typename: "ComponentPropertyPropertyGallery";
  id: string;
}

export interface QueryProperties_properties {
  __typename: "Property";
  slug: string;
  title: string;
  cover: QueryProperties_properties_cover | null;
  bathrooms: number;
  bedrooms: number;
  garages: number;
  measures: number;
  operation: ENUM_PROPERTY_OPERATION;
  gallery: (QueryProperties_properties_gallery | null)[] | null;
}

export interface QueryProperties {
  properties: QueryProperties_properties[];
}

export interface QueryPropertiesVariables {
  limit: number;
  start?: number | null;
  where?: any | null;
  sort?: string | null;
}
