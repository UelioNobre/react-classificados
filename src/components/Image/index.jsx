import React from 'react'
import { getRandImage } from '../../utils/utils'

export default function Index({ path, css, alt }) {
  const url = !path ? getRandImage(): path;
  return (
    <img src={url} className={css} alt={ alt } />
  )
}
