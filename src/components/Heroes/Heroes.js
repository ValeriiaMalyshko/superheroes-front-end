import React, { useState } from 'react'
import TablePagination from '@mui/material/TablePagination'
import { useFetchHeroesQuery } from 'redux/hero-reducer'
import HeroItem from './HeroesItem'
import s from './Heroes.module.css'

const Heroes = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [paginationPage, setPaginationPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const { data: heroes, isLoading } = useFetchHeroesQuery(currentPage)

  const handleChangePage = (e, newPage) => {
    setPaginationPage(newPage)
    setCurrentPage(newPage + 1)
    handleScroll()
  }
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value))
    setPaginationPage(0)
    setCurrentPage(1)
  }

  const handleScroll = () => {
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    }, 500)
  }
  return (
    <>
      {isLoading && <div>...Loading</div>}
      {heroes && heroes.length > 0 ? (
        <div className={s.container}>
          <ul className={s.collection}>
            {heroes.map(hero => (
              <HeroItem key={hero._id} hero={hero} />
            ))}
          </ul>
          <>
            <div>Page: {heroes.page}</div>
            <TablePagination
              style={{
                display: 'flex',
                justifyContent: 'center',
                color: 'white',
                marginLeft: '15px',
              }}
              component="div"
              rowsPerPageOptions={[5]}
              count={heroes.length}
              rowsPerPage={rowsPerPage}
              page={paginationPage}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </>
        </div>
      ) : (
        <div>Sorry, the list of heroes is empty. Add new hero</div>
      )}
    </>
  )
}
export default Heroes
