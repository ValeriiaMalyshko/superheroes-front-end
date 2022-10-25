import React from 'react'
import s from './Form.module.css'
import { useAddHeroMutation } from 'redux/hero-reducer'
import { Form, InputGroup, Button } from 'react-bootstrap'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Notify } from 'notiflix/build/notiflix-notify-aio'

const FormHero = () => {
  const [addHero, { isLoading: isAdding }] = useAddHeroMutation()
  const formik = useFormik({
    initialValues: {
      nickname: '',
      real_name: '',
      origin_description: '',
      superpowers: '',
      catch_phrase: '',
      images: '',
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
    onSubmit: async (
      {
        nickname,
        real_name,
        origin_description,
        superpowers,
        catch_phrase,
        images,
      },
      { resetForm },
    ) => {
      await addHero({
        nickname,
        real_name,
        origin_description,
        superpowers,
        catch_phrase,
        images,
      })
        .then(() => {
          Notify.success('hero added')
        })
        .catch(error => {
          Notify.error('something went wrong')
        })
      resetForm()
    },
  })
  return (
    <Form className={s.container} onSubmit={formik.handleSubmit}>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default" className={s.label}>
          Nickname
        </InputGroup.Text>
        <Form.Control
          id="nickname"
          name="nickname"
          type="text"
          placeholder="..."
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
        <InputGroup.Text id="inputGroup-sizing-default" className={s.label}>
          Real name
        </InputGroup.Text>
        <Form.Control
          id="real_name"
          name="real_name"
          type="text"
          placeholder="..."
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
        <InputGroup.Text id="inputGroup-sizing-default" className={s.label}>
          Origin description
        </InputGroup.Text>
        <Form.Control
          id="origin_description"
          name="origin_description"
          type="text"
          placeholder="..."
          onChange={formik.handleChange}
          value={formik.values.origin_description}
          className={s.input}
          aria-label="origin_description"
          aria-describedby="inputGroup-sizing-default"
        />
        {formik.errors.origin_description &&
        formik.touched.origin_description ? (
          <div className={s.message}>{formik.errors.origin_description}</div>
        ) : null}
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default" className={s.label}>
          Superpowers
        </InputGroup.Text>
        <Form.Control
          id="superpowers"
          name="superpowers"
          type="text"
          placeholder="..."
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
        <InputGroup.Text id="inputGroup-sizing-default" className={s.label}>
          Catch phrase
        </InputGroup.Text>
        <Form.Control
          id="catch_phrase"
          name="catch_phrase"
          type="text"
          placeholder="..."
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
        <InputGroup.Text id="inputGroup-sizing-default" className={s.label}>
          Images
        </InputGroup.Text>
        <Form.Control
          id="images"
          name="images"
          type="text"
          placeholder="the image must be a url link"
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
      <Button size="lg" type="submit" className={s.btn} disabled={isAdding}>
        Create superhero
      </Button>
    </Form>
  )
}

export default FormHero
