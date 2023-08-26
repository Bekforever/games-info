import { api } from '../index.api'
import { IGenresDataResult } from './Genres.type'

export const GenresApi = api.injectEndpoints({
	endpoints: builder => ({
		getGenres: builder.query<IGenresDataResult, void>({
			query: () => ({
				url: '/genres?key=3e49c7b55bf4452bac85435423b53726',
			}),
		}),
	}),
})
