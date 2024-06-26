import React from 'react'
import clientConfig from '../../client-config'
import BasePortableText from '@sanity/block-content-to-react'
import serializers from '../utils/serializers'

const PortableText = ({ blocks }: { blocks: any }) => (
  <>
    {blocks &&
      <BasePortableText blocks={blocks} serializers={serializers} {...clientConfig.sanity} />
    }
  </>
)

export default PortableText