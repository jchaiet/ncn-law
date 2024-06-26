import { graphql } from "gatsby";

export const data = graphql`
  fragment PageBuilder on SanityPage {
    _rawPageBuilder(resolveReferences: { maxDepth: 10 })
    pageBuilder {
      ... on SanityHero {
        _key
        _type
        heading
        includeLogo
        image {
          asset {
            gatsbyImageData
            url
          }
        }
      }
      ... on SanityContentBlock {
        _key
        _type
        heading
        image {
          asset {
            gatsbyImageData
            url
          }
        }
      }
      ... on SanityTwoColumnBlock {
        _key
        _type
        heading
        textPosition
        image {
          asset {
            gatsbyImageData
            url
          }
        }
      }
      ... on SanityImageGrid {
        _key
        _type
        heading
        images {
          _key
          asset {
            gatsbyImageData
            url
          }
        }
      }
      ... on SanityCardGrid {
        _key
        _type
        heading
        items {
          _key
          heading
          _rawDescription
          ctaText
          ctaDestination
          ctaIcon
          ctaStyle
        }
      }
      ... on SanityBioGrid {
        _key
        _type
        heading
        items {
          _key
          image {
            asset {
              gatsbyImageData
              url
            }
          }
          name
          _rawDetails
          ctaDestination
        }
      }
      ... on SanityBanner {
        _key
        _type
        theme
        heading
      }
    }
  }
`;