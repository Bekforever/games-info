import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
	ordering: '',
	genre: 0,
	platform: '',
	search: '',
}

const GameSlice = createSlice({
	name: 'GameSlice',
	initialState,
	reducers: {
		setSort(state, { payload }: PayloadAction<string>) {
			state.ordering = payload
		},
		setGenre(state, { payload }: PayloadAction<number>) {
			state.genre = payload
		},
		setPlatform(state, { payload }: PayloadAction<string>) {
			state.platform = payload
		},
		setSearch(state, { payload }: PayloadAction<string>) {
			state.search = payload
		},
	},
})

export const { reducer, actions } = GameSlice
