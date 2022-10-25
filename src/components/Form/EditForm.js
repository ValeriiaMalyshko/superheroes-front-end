import React from 'react'
import s from './Form.module.css'
import { useUpdateHeroMutation } from 'redux/hero-reducer'
import { createPortal } from 'react-dom'
import { Form, InputGroup, Button, Modal } from 'react-bootstrap'
import { useFormik } from 'formik'
import * as Yup from 'yup'
// import { useParams, useNavigate } from 'react-router-dom'

const modalRoot = document.querySelector('#modal__root')

const EditForm = ({
  heroId,
  images,
  nickname,
  real_name,
  origin_description,
  superpowers,
  catch_phrase,
  showModal,
  setShowModal,
}) => {
  const [updateHero] = useUpdateHeroMutation()

  const formik = useFormik({
    initialValues: {
      nickname: nickname,
      real_name: real_name,
      origin_description: origin_description,
      superpowers: superpowers,
      catch_phrase: catch_phrase,
      images: images,
    },
    validationSchema: Yup.object().shape({
      nickname: Yup.string()
        .min(1, 'Too Short!')
        .max(20, 'Too Long! Must be 20 symbols!')
        .required('Required'),
      real_name: Yup.string()
        .min(1, 'Too Short!')
        .max(40, 'Too Long! Must be 40 symbols!')
        .required('Required'),
      origin_description: Yup.string()
        .min(1, 'Too Short!')
        .max(600, 'Too Long!Must be 600 symbols!')
        .required('Required'),
      superpowers: Yup.string()
        .min(1, 'Too Short!')
        .max(400, 'Too Long! Must be 400 symbols!')
        .required('Required'),
      catch_phrase: Yup.string()
        .min(1, 'Too Short!')
        .max(200, 'Too Long! Must be 200 symbols!')
        .required('Required'),
      images: Yup.string(),
    }),
    onSubmit: async ({ values }) => {
      await updateHero({
        heroId,
        ...values,
      })
      console.log(heroId)
    },
  })
  return createPortal(
    <Modal
      show={showModal}
      onHide={setShowModal}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
      className={s.overlay}
    >
      <div className={s.modal}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit} className={s.containerEdit}>
            <InputGroup className="mb-3">
              <InputGroup.Text
                id="inputGroup-sizing-default"
                className={s.label}
              >
                Nickname
              </InputGroup.Text>
              <Form.Control
                id="nickname"
                name="nickname"
                type="text"
                placeholder=" "
                onChange={formik.handleChange}
                value={formik.values.nickname}
                className={s.input}
                aria-label="nickname"
                aria-describedby="inputGroup-sizing-default"
              />
              {formik.errors.nickname && formik.touched.nickname ? (
                <div className={s.message}>{formik.errors.nickname}</div>
              ) : null}
            </InputGroup>
            <br />
            <InputGroup className="mb-3">
              <InputGroup.Text
                id="inputGroup-sizing-default"
                className={s.label}
              >
                Real name
              </InputGroup.Text>
              <Form.Control
                id="real_name"
                name="real_name"
                type="text"
                placeholder=" "
                onChange={formik.handleChange}
                value={formik.values.real_name}
                className={s.input}
                aria-label="real_name"
                aria-describedby="inputGroup-sizing-default"
              />
              {formik.errors.real_name && formik.touched.real_name ? (
                <div className={s.message}>{formik.errors.real_name}</div>
              ) : null}
            </InputGroup>
            <br />
            <InputGroup className="mb-3">
              <InputGroup.Text
                id="inputGroup-sizing-default"
                className={s.label}
              >
                Origin description
              </InputGroup.Text>
              <Form.Control
                id="origin_description"
                name="origin_description"
                type="text"
                placeholder=" "
                onChange={formik.handleChange}
                value={formik.values.origin_description}
                className={s.input}
                aria-label="origin_description"
                aria-describedby="inputGroup-sizing-default"
              />
              {formik.errors.origin_description &&
              formik.touched.origin_description ? (
                <div className={s.message}>
                  {formik.errors.origin_description}
                </div>
              ) : null}
            </InputGroup>
            <br />
            <InputGroup className="mb-3">
              <InputGroup.Text
                id="inputGroup-sizing-default"
                className={s.label}
              >
                Superpowers
              </InputGroup.Text>
              <Form.Control
                id="superpowers"
                name="superpowers"
                type="text"
                placeholder=" "
                onChange={formik.handleChange}
                value={formik.values.superpowers}
                className={s.input}
                aria-label="superpowers"
                aria-describedby="inputGroup-sizing-default"
              />
              {formik.errors.superpowers && formik.touched.superpowers ? (
                <div className={s.message}>{formik.errors.superpowers}</div>
              ) : null}
            </InputGroup>
            <br />
            <InputGroup className="mb-3">
              <InputGroup.Text
                id="inputGroup-sizing-default"
                className={s.label}
              >
                Catch phrase
              </InputGroup.Text>
              <Form.Control
                id="catch_phrase"
                name="catch_phrase"
                type="text"
                placeholder=" "
                onChange={formik.handleChange}
                value={formik.values.catch_phrase}
                className={s.input}
                aria-label="catch_phrase"
                aria-describedby="inputGroup-sizing-default"
              />
              {formik.errors.catch_phrase && formik.touched.catch_phrase ? (
                <div className={s.message}>{formik.errors.catch_phrase}</div>
              ) : null}
            </InputGroup>
            <br />
            <InputGroup className="mb-3">
              <InputGroup.Text
                id="inputGroup-sizing-default"
                className={s.label}
              >
                Images
              </InputGroup.Text>
              <Form.Control
                id="images"
                name="images"
                type="text"
                placeholder=" "
                onChange={formik.handleChange}
                value={formik.values.images}
                className={s.input}
                aria-label="images"
                aria-describedby="inputGroup-sizing-default"
              />
              {formik.errors.images && formik.touched.images ? (
                <div className={s.message}>{formik.errors.images}</div>
              ) : null}
            </InputGroup>
            <Button size="lg" type="submit" className={s.btn} id={heroId}>
              Edit
            </Button>
          </Form>
        </Modal.Body>
      </div>
    </Modal>,
    modalRoot,
  )
}

export default EditForm
