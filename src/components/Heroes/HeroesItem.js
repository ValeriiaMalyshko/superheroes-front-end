import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Card, Button } from 'react-bootstrap/'
import HeroModal from './HeroModal'
import s from './Heroes.module.css'

const HeroItem = ({ hero }) => {
  const {
    _id,
    images,
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
  } = hero
  const [show, setShow] = useState(false)
  return (
    <>
      <li className={s.item}>
        <Card>
          <Card.Img variant="top" src={images} className={s.image} />
          <Card.Body>
            <Card.Title>{nickname}</Card.Title>
            <Button
              id={_id}
              variant="primary"
              onClick={() => setShow(true)}
              className={s.btn}
            >
              More information
            </Button>
          </Card.Body>
        </Card>
      </li>
      <HeroModal
        images={images}
        nickname={nickname}
        real_name={real_name}
        origin_description={origin_description}
        superpowers={superpowers}
        catch_phrase={catch_phrase}
        heroId={_id}
        show={show}
        setShow={() => setShow(false)}
      />
    </>
  )
}

HeroItem.propTypes = {
  nickname: PropTypes.string,
  images: PropTypes.string,
}

export default HeroItem
