/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_PROPERTY_OPERATION } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryPropertyBySlug
// ====================================================

export interface QueryPropertyBySlug_properties_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryPropertyBySlug_properties_gallery_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryPropertyBySlug_properties_gallery {
  __typename: "ComponentPropertyPropertyGallery";
  image: QueryPropertyBySlug_properties_gallery_image | null;
  label: string;
}

export interface QueryPropertyBySlug_properties_agents {
  __typename: "Agent";
  name: string;
  phone: string;
  email: string;
}

export interface QueryPropertyBySlug_properties_floorPlans_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryPropertyBySlug_properties_floorPlans_infoFloor {
  __typename: "ComponentPropertyInfoFloor";
  amount: number;
  propertyPart: string;
}

export interface QueryPropertyBySlug_properties_floorPlans {
  __typename: "ComponentPropertyFloorPlan";
  title: string;
  image: QueryPropertyBySlug_properties_floorPlans_image | null;
  measure: number;
  infoFloor: (QueryPropertyBySlug_properties_floorPlans_infoFloor | null)[] | null;
}

export interface QueryPropertyBySlug_properties {
  __typename: "Property";
  slug: string;
  title: string;
  cover: QueryPropertyBySlug_properties_cover | null;
  bathrooms: number;
  bedrooms: number;
  garages: number;
  measures: number;
  operation: ENUM_PROPERTY_OPERATION;
  gallery: (QueryPropertyBySlug_properties_gallery | null)[] | null;
  description: string;
  agents: QueryPropertyBySlug_properties_agents[];
  floorPlans: (QueryPropertyBySlug_properties_floorPlans | null)[] | null;
}

export interface QueryPropertyBySlug {
  properties: QueryPropertyBySlug_properties[];
}

export interface QueryPropertyBySlugVariables {
  slug: string;
}
