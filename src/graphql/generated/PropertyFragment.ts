/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_PROPERTY_OPERATION } from "./globalTypes";

// ====================================================
// GraphQL fragment: PropertyFragment
// ====================================================

export interface PropertyFragment_cover {
  __typename: "UploadFile";
  url: string;
}

export interface PropertyFragment_gallery {
  __typename: "ComponentPropertyPropertyGallery";
  id: string;
}

export interface PropertyFragment {
  __typename: "Property";
  slug: string;
  title: string;
  cover: PropertyFragment_cover | null;
  bathrooms: number;
  bedrooms: number;
  garages: number;
  measures: number;
  operation: ENUM_PROPERTY_OPERATION;
  gallery: (PropertyFragment_gallery | null)[] | null;
}
