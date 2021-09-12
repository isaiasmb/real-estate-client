/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryParallax
// ====================================================

export interface QueryParallax_parallax_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryParallax_parallax {
  __typename: "Parallax";
  title: string;
  description: string;
  image: QueryParallax_parallax_image | null;
}

export interface QueryParallax {
  parallax: QueryParallax_parallax | null;
}
