interface Tag {
	id: number
	name: string
	slug: string
	language: string
	games_count: number
	image_background: string
}

interface EsrbRating {
	id: number
	name: string
	slug: string
}

interface ShortScreenshot {
	id: number
	image: string
}

type TPlatform2 = {
	id: number
	name: string
	slug: string
}

interface ParentPlatform {
	platform: TPlatform2
}

interface Genre {
	id: number
	name: string
	slug: string
	games_count: number
	image_background: string
}

interface StoreElement {
	id: number
	store: Store
}

interface Clip {
	clip: string | null
	clips: {
		[key: string]: string | null
	}
	video: string | null
	preview: string | null
}

interface Store {
	id: number
	name: string
	slug: string
	domain: string
	games_count: number
	image_background: string
}

type TPlatform = {
	id: number
	name: string
	slug: string
	image: string | null
	year_end: number | null
	year_start: number | null
	games_count: number
	image_background: string
}

export interface IGamePlatform {
	platform: TPlatform
	released_at: string
	requirements_en: {
		minimum: string | null
		recommended: string | null
	} | null
	requirements_ru: string | null
}

export interface IGame {
	id: number
	slug: string
	name: string
	released: string
	tba: boolean
	background_image: string
	rating: number
	rating_top: number
	ratings: { id: number; title: string; count: number; percent: number }[]
	ratings_count: number
	reviews_text_count: number
	added: number
	added_by_status: {
		yet: number
		owned: number
		beaten: number
		toplay: number
		dropped: number
		playing: number
	}
	metacritic: number
	playtime: number
	suggestions_count: number
	updated: string
	user_game: string | null
	reviews_count: number
	saturated_color: string
	dominant_color: string
	platforms: IGamePlatform[]
	parent_platforms: ParentPlatform[]
	genres: Genre[]
	stores: StoreElement[]
	clip: Clip | null
	tags: Tag[]
	esrb_rating: EsrbRating | null
	short_screenshots: ShortScreenshot[]
}

export interface IGameDataResult {
	count: number
	next: string
	previous: null
	results: IGame[]
}
