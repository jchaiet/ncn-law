import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import PageBuilder from "../utils/page-builder";

import Seo from "../components/seo";

const PageTemplate = ({ location, data }: {location: LocationI, data: PageI }) => {

  console.log("q", data)
  return (
    <Layout location={location}>
      <PageBuilder pageBuilder={data?.sanityPage?.pageBuilder} _rawPageBuilder={data?.sanityPage?._rawPageBuilder} />
    </Layout>
  )
}

export const data = graphql`
  query PageQuery($id: String!) {
    sanityPage(id: { eq: $id }) {
      id
      title
      metadata {
        title
        description
        path {
          current
        }
      }
      ...PageBuilder
    }
  }
`;

export default PageTemplate