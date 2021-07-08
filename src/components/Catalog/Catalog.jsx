import React, { useState } from 'react'

import './Catalog.scss'
import Sort from '../Sort/Sort'
import CatalogItem from './CatalogItem/CatalogItem'

const Catalog = () => {

  const [data, setData] = useState([
    {
      id: 1,
      title: ' Фотобудка с ширмой',
      subtitle: '2м x 1.5м x 2 м',
      images: ['room', 'room', 'room', 'room', 'room'],
      options: [
        {
          id: 1,
          image: 'room_lq',
          title: 'Разработка макета рамки',
          price: 17000,
          isChecked: false,
        },
        {
          id: 2,
          image: 'room_lq',
          title: 'Разработка макета рамки',
          price: 17000,
          isChecked: false,
        },
        {
          id: 3,
          image: 'room_lq',
          title: 'Разработка макета рамки',
          price: 17000,
          isChecked: false,
        },
        {
          id: 4,
          image: 'room_lq',
          title: 'Разработка макета рамки',
          price: 17000,
          isChecked: false,
        },
      ],
      price: 17000,
    },
    {
      id: 2,
      title: ' Фотобудка с ширмой',
      subtitle: '2м x 1.5м x 2 м',
      images: ['room', 'room', 'room', 'room', 'room'],
      options: [
        {
          id: 1,
          image: 'room_lq',
          title: 'Разработка макета рамки',
          price: 17000,
          isChecked: false,
        },
        {
          id: 2,
          image: 'room_lq',
          title: 'Разработка макета рамки',
          price: 17000,
          isChecked: false,
        },
        {
          id: 3,
          image: 'room_lq',
          title: 'Разработка макета рамки',
          price: 17000,
          isChecked: false,
        },
        {
          id: 4,
          image: 'room_lq',
          title: 'Разработка макета рамки',
          price: 17000,
          isChecked: false,
        },
      ],
      price: 17000,
    },
  ])

  const setNewData = item => {
    data.map(el => {
      if (el.id === item.id) {

      }
    })
  }

  return (
    <div className="catalog">
      <h2 className="title title__h2 wrapper">Фотобудки</h2>
      <Sort/>
      {data.map((item, i) =>
        <CatalogItem key={i} setNewData={setNewData} data={item}/>,
      )}

    </div>
  )
}

export default Catalog