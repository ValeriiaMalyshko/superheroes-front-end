import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const heroApi = createApi({
  reducerPath: 'heroApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62ce8bfa486b6ce82647429c.mockapi.io/',
  }),
  tagTypes: ['Hero'],
  endpoints: builder => ({
    fetchHeroes: builder.query({
      query: () => '/superheroes',
      providesTags: ['Hero'],
    }),
    deleteHero: builder.mutation({
      query: heroId => ({
        url: `/superheroes/${heroId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Hero'],
    }),
    createHero: builder.mutation({
      query: newHero => ({
        url: '/superheroes',
        method: 'POST',
        body: newHero,
      }),
      invalidatesTags: ['Hero'],
    }),
  }),
});

export const {
  useFetchHeroesQuery,
  useCreateHeroMutation,
  useDeleteHeroMutation,
} = heroApi;
