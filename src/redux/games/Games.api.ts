import { api } from '../index.api'
import { IGameDataResult } from './Games.types'

export const gamesApi = api.injectEndpoints({
	endpoints: builder => ({
		getAllGames: builder.query<IGameDataResult, string>({
			query: sort => ({
				url: `/games?key=3e49c7b55bf4452bac85435423b53726&sortOrder=${sort}`,
			}),
		}),
	}),
})
