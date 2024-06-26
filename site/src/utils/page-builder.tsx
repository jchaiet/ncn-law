import React from 'react';

import Hero from '../components/hero';
import ContentBlock from '../components/content-block';
import TwoColumnBlock from '../components/two-column-block';
import ImageGrid from '../components/image-grid';
import CardGrid from '../components/card-grid';
import BioGrid from '../components/bio-grid';
import Banner from '../components/banner';

export default function PageBuilder(props: any) {
  
  const {
    type,
    pageBuilder,
    _rawPageBuilder
  } = props;

  const components: any = {
    hero: Hero,
    contentBlock: ContentBlock,
    twoColumnBlock: TwoColumnBlock,
    imageGrid: ImageGrid,
    cardGrid: CardGrid,
    bioGrid: BioGrid,
    banner: Banner
  }

  console.log(pageBuilder)

  return pageBuilder.map((block: any, index: number) =>  {
    if(components[block._type]){
      return React.createElement(components[block._type], {
        key: block._key,
        block: block,
        type,
        raw: _rawPageBuilder[index]
      })
    }
  });
}
