import React from 'react'
import DotsItem from './DotsItem'

const DotsRow = ({ collumns }) => {
  return (
    <div className="dots__row">
      {[...Array(collumns).keys()].
        map((item, i) => <DotsItem key={'c_' + i}/>)}
    </div>
  )
}

export default DotsRow