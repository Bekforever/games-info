export type TGenresGame = {
	added: number
	id: number
	name: string
	slug: string
}

export interface IGenre {
	id: number
	name: string
	slug: string
	gamesCount: number
	image_background: string
	games: TGenresGame[]
}

export interface IGenresDataResult {
	count: number
	next: null
	previous: null
	results: IGenre[]
}
