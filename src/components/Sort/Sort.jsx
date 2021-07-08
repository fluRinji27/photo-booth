import React from 'react'

import './Sort.scss'

const Sort = () => {
  return (
    <div className="sort wrapper">
      <p className="sort__label">Сортировка:</p>
      <select className="sort__list">
        <option className="sort__item" value="def">
          По умолчанию
        </option>
        <option className="sort__item" value="max">
          По возрастанию
        </option>
        <option className="sort__item" value="min">
          По убыванию
        </option>
      </select>
      <div className="arrow"/>
    </div>
  )
}

export default Sort