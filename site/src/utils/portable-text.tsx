import React from 'react'
import { PortableText } from '@portabletext/react';
import portableTextComponents from './portabletext-components'

const PortableTextBlock = ({ blocks }: { blocks: any }) => (
  <>
    {blocks &&
      <PortableText value={blocks} components={portableTextComponents} />
    }
  </>
)

export default PortableTextBlock