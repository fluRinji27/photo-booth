import React from 'react'

import { ReactComponent as ArrowSVG } from '../../../assets/img/arrow.svg'

import './VideoPreView.scss'

const VideoPreView = ({ id, modalHandler }) => {
  const src = id
    ? `https://i.ytimg.com/vi/${id}/mqdefault.jpg`
    : 'https://i.ytimg.com/vi/${id}/mqdefault.jpg'

  return (
    <div className="preView" onClick={() => modalHandler(true)}>
        <span className="preView__wrapper">
          <ArrowSVG className="preView__arrow"/>
        </span>
      <img className="preView__img"
           src={src}
           alt="Youtube video"/>
    </div>
  )
}

export default React.memo(VideoPreView)