interface Tag {
	id: number
	name: string
	slug: string
	language?: string
	games_count?: number
	image_background?: string
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

export interface ParentPlatform {
	platform: {
		id: number
		name: string
		slug: string
		image?: null | string
		year_end?: null | number
		year_start?: null | number
		games_count?: number
		image_background?: null | string
	}
}

interface Genre {
	id: number
	name: string
	slug: string
	games_count: number
	image_background?: string
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
	name?: string
	slug?: string
	domain?: string
	games_count?: number
	image_background?: string
	url?: string
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

type Developer = {
	id: number
	name: string
	slug: string
	games_count: number
}

type MetacriticPlatform = {
	metascore: number
	url: string
}

export type Platform = {
	platform: ParentPlatform['platform']
}

type Publisher = {
	id: number
	name: string
	slug: string
	games_count: number
}

type Rating = {
	id: number
	title: string
	count: number
	percent: number
}

type Reaction = {
	[key: number]: number
}

export interface IGameInfoDataResult {
	achievements_count: number
	added: number
	added_by_status: {
		yet: number
		owned: number
		beaten: number
		toplay: number
		dropped: number
		playing: number
	}
	additions_count: number
	alternative_names: string[]
	background_image: string
	background_image_additional: string
	clip: null | unknown
	creators_count: number
	description: string
	description_raw: string
	developers: Developer[]
	dominant_color: string
	esrb_rating?: EsrbRating
	game_series_count?: number
	genres?: Genre[]
	id?: number
	metacritic?: number
	metacritic_platforms?: MetacriticPlatform[]
	metacritic_url?: string
	movies_count?: number
	name_original?: string
	parent_achievements_count?: number
	parent_platforms?: ParentPlatform[]
	parents_count?: number
	platforms?: Platform[]
	playtime?: number
	publishers?: Publisher[]
	rating_top?: number
	ratings?: Rating[]
	ratings_count?: number
	reactions?: Reaction
	reddit_count?: number
	reddit_description?: string
	reddit_logo?: string
	reddit_name?: string
	reddit_url?: string
	released?: string
	reviews_count?: number
	reviews_text_count?: number
	saturated_color?: string
	screenshots_count?: number
	slug?: string
	stores?: Store[]
	suggestions_count?: number
	tags?: Tag[]
	name?: string
	tba?: boolean
	twitch_count?: number
	updated?: string
	user_game?: null | unknown
	website?: string
	youtube_count?: number
}

type Screenshot = {
	height: number
	id: number
	image: string
	is_deleted: boolean
	width: number
}

export interface IGameScreenshotsDataResult {
	count: number
	next: null | string
	previous: null | string
	results: Screenshot[]
}

type Movie = {
	id: number
	name: string
	preview: string
	data: {
		[key: number]: string
	}
}

export interface IGameMoviesDataResult {
	count: number
	next: null | string
	previous: null | string
	results: Movie[]
}

export type TSortGames = {
	genres: number
	platforms: number
	sortOrder: string
}
