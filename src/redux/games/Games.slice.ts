import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
	ordering: 'name',
	genre: 4,
	platform: '4',
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
	},
})

export const { reducer, actions } = GameSlice
