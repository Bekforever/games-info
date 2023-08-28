import { gamesApi } from './games/Games.api'
import { sharedApi } from './shared/shared.api'

export const { useGetPlatformsQuery } = sharedApi

export const {
	useGetAllGamesQuery,
	useGetGameInfoQuery,
	useGetGameScreenshotsQuery,
	useGetGameMoviesQuery,
} = gamesApi
