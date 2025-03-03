
interface LocationI {
  from?: {
    pathname?: string;
  };
}

interface PageI {
  sanityPage: SanityPage
}

type SanityPage = {
  id: string,
  title: string,
  metadata: Metadata,
  pageBuilder: PageBuilder,
  _rawPageBuilder: PageBuilder
}

type Metadata = {
  title: string,
  description: string,
  path?: Slug,
  children?: Props
}

type Slug = {
  current: string;
}

type Internal = {
  metadata: {
    path: Slug
  }
}

type Props = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
}

type PageBuilder = {
  hero: SanityHero,
  contentBlock: SanityContentBlock
}

type SanityHero = {
  _key: string,
  type: string,
  title: string,
  includeLogo: boolean,
  isHome: boolean
}

type SanityContentBlock = {
  _key: string,
  type: string,
  title: string,
}

type SanityTwoColumnBlock = {
  _key: string,
  type: string,
  title: string,
  textPosition: string
}

type SanityContact = {
  _key: string,
  type: string,
  title: string,
  receiver: string
}

type Image = {
  _key: string,
  alt: string,
  asset: any,
  gatsbyImageData: any
}

type Button = {
  text: string,
  destination: string,
  style: string,
  icon: string
}

type CardItem = {
  _key: string,
  heading: string,
  _rawDescription: string,
  ctaText: string,
  internal: Internal,
  ctaStyle: string,
  ctaIcon: string
}

type LinkItem = {
  _key: string,
  heading: string,
  _rawDescription: string,
  internal: Internal,
}

type BioItem = {
  _key: string,
  heading: string,
  _rawDescription: string,
  name: string,
  position: string,
  details: string,
  education: string,
  barAdmissions: string,
  affiliations: string,
  image: Image,
  internal?: Internal,
}