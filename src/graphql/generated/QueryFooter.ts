/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryFooter
// ====================================================

export interface QueryFooter_footer_social {
  __typename: "ComponentGenericSocial";
  name: string;
  link: string;
}

export interface QueryFooter_footer_links {
  __typename: "ComponentGenericLink";
  label: string;
  link: string;
}

export interface QueryFooter_footer {
  __typename: "Footer";
  labelContactUs: string;
  email: string;
  labelSocial: string;
  social: (QueryFooter_footer_social | null)[] | null;
  labelLinks: string;
  links: (QueryFooter_footer_links | null)[] | null;
  labelAddress: string;
  address: string;
}

export interface QueryFooter {
  footer: QueryFooter_footer | null;
}
