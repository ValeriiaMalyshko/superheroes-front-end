import React, { useState } from 'react'
import TablePagination from '@mui/material/TablePagination'
import { useFetchHeroesQuery } from 'redux/hero-reducer'
import HeroItem from './HeroesItem'

const Heroes = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [paginationPage, setPaginationPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const { data: hero, isLoading } = useFetchHeroesQuery(currentPage)

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
      {hero && hero.data.length > 0 ? (
        <div>
          <ul>
            {hero.data.map(
              ({
                _id,
                nickname,
                real_name,
                origin_description,
                superpowers,
                catch_phrase,
                images,
              }) => (
                <HeroItem
                  id={_id}
                  nickname={nickname}
                  real_name={real_name}
                  origin_description={origin_description}
                  superpowers={superpowers}
                  catch_phrase={catch_phrase}
                  images={images}
                />
              ),
            )}
          </ul>
          <PaginationWrap>
            <div>Page: {hero.page}</div>
            <TablePagination
              style={{
                display: 'flex',
                justifyContent: 'center',
                color: 'white',
                marginLeft: '15px',
              }}
              component="div"
              rowsPerPageOptions={[5]}
              count={hero.totalCount}
              rowsPerPage={rowsPerPage}
              page={paginationPage}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </PaginationWrap>
        </div>
      ) : (
        <div>Sorry, the list of heroes is empty. Add new hero</div>
      )}
    </>
  )
}
export default Heroes
