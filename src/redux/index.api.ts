import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { baseUrl } from 'src/config/url.config'

export const api = createApi({
	reducerPath: 'api/games',
	baseQuery: fetchBaseQuery({
		baseUrl,
	}),
	refetchOnFocus: true,
	endpoints: build => ({
		default: build.query({
			query: () => 'default',
		}),
	}),
})
