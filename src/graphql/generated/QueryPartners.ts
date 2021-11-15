/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryPartners
// ====================================================

export interface QueryPartners_partners_logo {
  __typename: "UploadFile";
  url: string;
}

export interface QueryPartners_partners {
  __typename: "Partner";
  name: string;
  link: string | null;
  logo: QueryPartners_partners_logo | null;
  description: string | null;
}

export interface QueryPartners {
  partners: QueryPartners_partners[];
}
