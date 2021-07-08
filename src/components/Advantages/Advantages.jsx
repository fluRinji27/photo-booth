import React from 'react'

import { ReactComponent as InfiniteSVG } from '../../assets/img/infinite.svg'
import { ReactComponent as MustachesMaskSVG } from '../../assets/img/mustachesMask.svg'
import { ReactComponent as PhotoCardsSVG } from '../../assets/img/photoCards.svg'
import { ReactComponent as PriceSVG } from '../../assets/img/price.svg'

import './Advantages.scss'

const Advantages = () => {
  return (
    <div className="advantages wrapper">
      <h1 className="advantages__title">Фото на <span>праздник</span></h1>
      <p className="advantages__subtitle">
        Lorem ipsum dolor sit amet,
        consectetur <span>adipiscing elit</span>,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="advantages__row">
        <div className="advantages__item">
          <InfiniteSVG className="advantages__icon"/>
          <p className="advantages__text">
            Безлимитная печать фото
          </p>
        </div>
        <div className="advantages__item">
          <MustachesMaskSVG className="advantages__icon"/>
          <p className="advantages__text">
            Фотореквизит <br/>
            в наличии
          </p>
        </div>
      </div>

      <div className="advantages__row">
        <div className="advantages__item">
          <PhotoCardsSVG className="advantages__icon"/>
          <p className="advantages__text">
            Фотоотчет в электронном виде
          </p>
        </div>
        <div className="advantages__item">
          <PriceSVG className="advantages__icon"/>
          <p className="advantages__text">
            Цены <br/>
            ниже рынка
          </p>
        </div>
      </div>
    </div>
  )
}

export default Advantages