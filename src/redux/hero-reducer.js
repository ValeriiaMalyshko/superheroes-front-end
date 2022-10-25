import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const heroApi = createApi({
  reducerPath: 'heroApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://superh-1.herokuapp.com/api',
  }),
  tagTypes: ['Hero'],
  endpoints: builder => ({
    fetchHeroes: builder.query({
      query: (page = 1) => `/heroes?page=${page}&limit=5`,
      providesTags: ['Hero'],
    }),
    findHero: builder.query({
      query: heroId => ({
        url: `/heroes/${heroId}`,
        providesTags: ['Hero'],
      }),
    }),
    deleteHero: builder.mutation({
      query: heroId => ({
        url: `/heroes/${heroId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Hero'],
    }),
    addHero: builder.mutation({
      query: newHero => ({
        url: '/heroes',
        method: 'POST',
        body: newHero,
      }),
      invalidatesTags: ['Hero'],
    }),
    updateHero: builder.mutation({
      query: ({ heroId, ...fields }) => ({
        url: `/heroes/${heroId}`,
        method: 'PATCH',
        body: fields,
      }),
      invalidatesTags: ['Hero'],
    }),
  }),
})

export const {
  useFetchHeroesQuery,
  useFindHeroQuery,
  useAddHeroMutation,
  useDeleteHeroMutation,
  useUpdateHeroMutation,
} = heroApi
