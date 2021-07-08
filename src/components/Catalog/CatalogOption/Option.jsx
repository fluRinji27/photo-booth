import React, { useEffect, useState } from 'react'
import OptionsItem from './OptionsItem'

import './Options.scss'

const Option = ({ options, setChecked }) => {
  const [optionsData, setOptionsData] = useState(options)
  const [isLoaded, setLoaded] = useState(false)

  const checkedHandler = item => {
    setOptionsData(() => optionsData.map(el => {
      if (item === el) {
        return { ...el, isChecked: !el.isChecked }
      }
      return el
    }))
  }

  useEffect(() => {
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      setChecked(optionsData)
    }
  }, [optionsData])

  return (
    <div className="options">
      <h6 className="options__title">Доп.опции</h6>
      <ul className="options__list">
        {optionsData.map((option, i) =>
          <OptionsItem key={option.title + i} handler={checkedHandler}
                       option={option}/>)}
      </ul>
    </div>
  )
}

export default Option