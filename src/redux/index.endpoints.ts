import { gamesApi } from './games/Games.api'

export const {
	useGetAllGamesQuery,
	useGetGameInfoQuery,
	useGetGameScreenshotsQuery,
	useGetGameMoviesQuery,
} = gamesApi
