import { TGenresGame } from '../genres/Genres.type'

interface IPlatform {
	id: number
	name: string
	slug: string
	games_count: number
	image_background: string
	image: string | null
	year_start: string | null
	year_end: string | null
	games: TGenresGame[]
}

export interface IPlatformsDataResult {
	count: number
	next: string
	previous: string | null
	results: IPlatform[]
}

export interface ISharedType {
	mode: 'dark' | 'light'
	platforms: IPlatformsDataResult | null
}
