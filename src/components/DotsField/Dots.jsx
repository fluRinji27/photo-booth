import React from 'react'
import DotsRow from './DotsRow'

import './Dots.scss'

const Dots = ({ rows, collumns }) => {

  return (
    <div className="dots">
      {[...Array(rows).keys()].
        map((item, i) => <DotsRow key={'r_' + i} collumns={collumns}/>)}
    </div>
  )
}

export default Dots