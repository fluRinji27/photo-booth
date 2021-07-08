import React, { useEffect, useState } from 'react'
import Carousel from '../../Carousel/Carousel'

import './CatalogItem.scss'
import Option from '../CatalogOption/Option'

const CatalogItem = ({ setNewData, data }) => {

  const [isLoaded, setIsLoaded] = useState(false)
  const [itemData, setItemData] = useState({})

  const imageLoader = require.context('../../../assets/img/catalog')

  const setNewItemData = item => {
    setItemData(pre => ({ ...pre, options: item }))
  }

  useEffect(() => {
    setItemData(data)
  }, [])

  useEffect(() => {
    if (!isLoaded && itemData.length !== 0) {
      setIsLoaded(true)
    } else if (isLoaded) {
      console.log(itemData)
    }

  }, [itemData])

  if (isLoaded) {
    return (
      <li className="wrapper catalog-item">
        <Carousel>
          {itemData.images.length > 1 &&
          itemData.images.map((image, i) =>
            <img
              key={image + i}
              src={imageLoader(`./${image}.png`).default}
              alt="Фотбудка"
            />)}
        </Carousel>
        <h3 className="catalog-item__title">{itemData.title}</h3>
        <h5
          className="catalog-item__subtitle">Размер: <span>{itemData.subtitle}</span>
        </h5>

        <div className="catalog-item__time-choice">
          <p className="catalog-item__time"></p>
        </div>
        <Option setChecked={setNewItemData} options={itemData.options}/>
        <div className="catalog-item__order">
          <p className="catalog-item__price">{itemData.price} &#8381;</p>
          <button className="catalog-item__btn-submit">Оставить заявку</button>
        </div>
      </li>
    )
  } else {
    return (
      <h1>Loading...</h1>
    )
  }

}

export default CatalogItem