import React from 'react'

const OptionsItem = ({ option, handler }) => {
  const imageLoader = require.context('../../../assets/img/catalog')
  return (
    <li className="options__item">
      <img src={imageLoader('./' + option.image + '.png').default} alt={option.title}
           className="options__img"/>
      <div className="options__info">
        <p className="options__info-item options__text">{option.title}</p>
        <p className="options__info-item options__price">От {option.price} &#8381;</p>
      </div>
      <input
        className="options__checkbox"
        type="checkbox"
        checked={option.isChecked}
        onChange={() => handler(option)}
      />
    </li>
  )
}

export default OptionsItem