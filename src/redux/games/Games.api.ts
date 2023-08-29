import { key } from 'src/config/url.config'
import { api } from '../index.api'
import {
	IDataResult,
	IGame,
	IGameInfoDataResult,
	TMovie,
	TScreenshot,
	TSortGames,
} from './Games.types'

export const gamesApi = api.injectEndpoints({
	endpoints: builder => ({
		getAllGames: builder.query<IDataResult<IGame>, TSortGames>({
			query: body => ({
				url: `/games?${key}&pageParam=1`,
				params: body,
			}),
		}),
		getGameScreenshots: builder.query<IDataResult<TScreenshot>, string>({
			query: id => ({
				url: `/games/${id}/screenshots?${key}`,
			}),
		}),
		getGameMovies: builder.query<IDataResult<TMovie>, string>({
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
