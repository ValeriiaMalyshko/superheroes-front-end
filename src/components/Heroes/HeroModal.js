import React from 'react'
import PropTypes from 'prop-types'
import { Button, Modal } from 'react-bootstrap/'
import s from './Heroes.module.css'
import {
  useDeleteHeroMutation,
  useUpdateHeroMutation,
} from 'redux/hero-reducer'
import { createPortal } from 'react-dom'

const modalRoot = document.querySelector('#modal__root')

const HeroModal = ({
  heroId,
  images,
  nickname,
  real_name,
  origin_description,
  superpowers,
  catch_phrase,
  show,
  setShow,
}) => {
  const [deleteHero, { isLoading: isDeleting }] = useDeleteHeroMutation()
  const [updateHero, { isLoading: isUpdeting }] = useUpdateHeroMutation()

  return createPortal(
    <Modal
      show={show}
      onHide={() => setShow(false)}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
      className={s.overlay}
    >
      <div className={s.modal}>
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {nickname}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body div className={s.contain}>
          <img src={images} alt={nickname} className={s.image} />
          <p className={s.part}>
            <span className={s.title}>Real name</span>:{real_name}
          </p>
          <p className={s.part}>
            <span className={s.title}>Description</span>:{origin_description}
          </p>
          <p className={s.part}>
            <span className={s.title}>Superpowers</span>:{superpowers}
          </p>
          <p className={s.part}>
            <span className={s.title}>Catch phrase</span>:{catch_phrase}
          </p>
          <div className={s.btnGroup}>
            <Button
              variant="primary"
              id={heroId}
              onClick={() => deleteHero(heroId)}
              disabled={isDeleting}
              className={s.btn}
            >
              Edit
            </Button>
            <Button
              id={heroId}
              variant="primary"
              onClick={() => updateHero(heroId)}
              disabled={isUpdeting}
              className={s.btn}
            >
              Delete
            </Button>
          </div>
        </Modal.Body>
      </div>
    </Modal>,
    modalRoot,
  )
}
HeroModal.propTypes = {
  nickname: PropTypes.string,
  real_name: PropTypes.string,
  origin_description: PropTypes.string,
  superpowers: PropTypes.string,
  catch_phrase: PropTypes.string,
  images: PropTypes.string,
}

export default HeroModal
