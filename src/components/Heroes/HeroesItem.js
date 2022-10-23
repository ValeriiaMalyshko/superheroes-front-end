import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Card, Button, Modal } from 'react-bootstrap/'
import {
  useDeleteHeroMutation,
  useUpdateHeroMutation,
} from 'redux/hero-reducer'

const HeroItem = (
  id,
  images,
  nickname,
  real_name,
  origin_description,
  superpowers,
  catch_phrase,
) => {
  const [deleteHero, { isLoading: isDeleting }] = useDeleteHeroMutation()
  const [updateHero, { isLoading: isUpdeting }] = useUpdateHeroMutation()
  const [show, setShow] = useState(false)
  return (
    <li key={id}>
      <Card>
        <Card.Img variant="top" src={images} />
        <Card.Body>
          <Card.Title>{nickname}</Card.Title>
          <Button variant="primary" onClick={() => setShow(true)}>
            More information
          </Button>
        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {nickname}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={images} alt={nickname} />
          <p>Real name:{real_name}</p>
          <p>Description:{origin_description}</p>
          <p>Superpowers:{superpowers}</p>
          <p>Catch phrase:{catch_phrase}</p>
          <Button
            variant="primary"
            id={id}
            onClick={() => deleteHero(id)}
            disabled={isDeleting}
          >
            Edit
          </Button>
          <Button
            id={id}
            variant="primary"
            onClick={() => updateHero(id)}
            disabled={isUpdeting}
          >
            Delete
          </Button>
        </Modal.Body>
      </Modal>
    </li>
  )
}

HeroItem.propTypes = {
  nickname: PropTypes.string,
  real_name: PropTypes.string,
  origin_description: PropTypes.string,
  superpowers: PropTypes.string,
  catch_phrase: PropTypes.string,
  images: PropTypes.string,
}

export default HeroItem
