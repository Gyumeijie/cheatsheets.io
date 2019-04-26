import React from 'react'
import { SiteLink } from '../types'
import RelatedPostItem from './RelatedPostItem'
import CSS from './RelatedPostsGroup.module.scss'

export interface Props {
  pages: SiteLink[]
  title: string
}

/**
 * Related posts group
 */

export const RelatedPostsGroup = ({ pages, title }: Props) => {
  const list = pages.slice(0, 6)

  return (
    <div className={CSS.root}>
      <h3 className={CSS.heading}>{title}</h3>
      <div className='related-post-list'>
        {list.map(({ path, title: itemTitle }) => (
          <RelatedPostItem
            key={path}
            className='item'
            path={path}
            title={itemTitle}
          />
        ))}
      </div>
    </div>
  )
}

export default RelatedPostsGroup
