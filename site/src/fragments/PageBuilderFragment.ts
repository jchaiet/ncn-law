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
        theme
        orientation
        heading
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
          internal {
            metadata {
              path {
                current
              }
            }
          }
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
          internal {
            metadata {
              path {
                current
              }
            }
          }
        }
      }
      ... on SanityCarousel {
        _key
        _type
        variation
        heading
        links {
          _key
          heading
          internal {
            metadata {
              path {
                current
              }
            }
          }
        }
        cards {
          _key
          heading
          internal {
            metadata {
              path {
                current
              }
            }
          }
        }
      }
      ... on SanityBio {
        _key
        _type
        image {
          asset {
            gatsbyImageData
            url
          }
        }
        name
        position
        _rawDetails
        internal {
          metadata {
            path {
              current
            }
          }
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