import cn from 'classnames'
import { talkBubblesLine, talkBubblesSolid } from 'devhints-icons'
import React from 'react'
import CSS from './CommentsAreaSummary.module.scss'

interface Props {
  count: React.ReactNode
}

/**
 * Summary in the comments area
 */

export const CommentsAreaSummary = ({ count }: Props) => (
  <summary className={CSS.root}>
    <i
      className={cn(CSS.icon, CSS.isLine)}
      dangerouslySetInnerHTML={{ __html: talkBubblesLine }}
    />
    <i
      className={cn(CSS.icon, CSS.isSolid)}
      dangerouslySetInnerHTML={{ __html: talkBubblesSolid }}
    />
    <strong className={CSS.count}>{count}</strong>{' '}
    <span className={CSS.suffix}>for this cheatsheet.</span>{' '}
    <span className={CSS.fauxlink}>Write yours!</span>
  </summary>
)

export default CommentsAreaSummary
