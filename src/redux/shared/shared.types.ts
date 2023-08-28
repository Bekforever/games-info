type TGame = {
	id: number
	name: string
	added: number
	slug: string
}

interface IPlatform {
	id: number
	name: string
	slug: string
	games_count: number
	image_background: string
	image: string | null
	year_start: string | null
	year_end: string | null
	games: TGame[]
}

export interface IPlatformsDataResult {
	count: number
	next: string
	previous: string | null
	results: IPlatform[]
}

export type TSharedInitialState = {
	mode: 'dark' | 'light'
}
