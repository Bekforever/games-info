import { key } from 'src/config/url.config'
import { api } from '../index.api'
import {
	IGameDataResult,
	IGameInfoDataResult,
	IGameMoviesDataResult,
	IGameScreenshotsDataResult,
	TSortGames,
} from './Games.types'

export const gamesApi = api.injectEndpoints({
	endpoints: builder => ({
		getAllGames: builder.query<IGameDataResult, TSortGames>({
			query: ({ platforms, genres, ordering }) => ({
				url: `/games?${key}&pageParam=1`,
				params: {
					platforms: platforms,
					genres: genres,
					ordering: ordering,
				},
			}),
		}),
		getGameScreenshots: builder.query<IGameScreenshotsDataResult, string>({
			query: id => ({
				url: `/games/${id}/screenshots?${key}`,
			}),
		}),
		getGameMovies: builder.query<IGameMoviesDataResult, string>({
			query: id => ({
				url: `/games/${id}/movies?${key}`,
			}),
		}),
		getGameInfo: builder.query<IGameInfoDataResult, string>({
			query: slug => ({
				url: `/games/${slug}?${key}`,
			}),
		}),
	}),
})
