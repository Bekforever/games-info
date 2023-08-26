import { gamesApi } from './games/Games.api'
import { GenresApi } from './genres/Genres.api'
import { sharedApi } from './shared/shared.api'

export const { useGetGenresQuery } = GenresApi

export const { useGetPlatformsQuery } = sharedApi

export const { useGetAllGamesQuery } = gamesApi
