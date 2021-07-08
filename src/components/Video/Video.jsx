import React, { useContext } from 'react'
import { ModalContext } from '../../context'

import Dots from '../DotsField/Dots'

import VideoPreView from './VideoPreView/VideoPreView'
import Modal from '../Modal/Modal'

import './Video.scss'

const Video = ({ id }) => {

  const { isModalActive, modalHandler } = useContext(
    ModalContext)
  return (
    <div className="video video__wrapper wrapper">
      <Dots rows={5} collumns={9}/>
      <VideoPreView id={id} modalHandler={modalHandler}/>
      {isModalActive && <Modal
        isActive={isModalActive}
        modalHandler={modalHandler}>
        <div className="video__modal">
          <iframe
            className="video__content"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen/>
        </div>
      </Modal>}
      <div className="video__circle"/>
    </div>
  )
}

export default React.memo(Video)