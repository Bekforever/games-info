import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
	sort: 'name',
	genre: 4,
	platform: 4,
}

const GameSlice = createSlice({
	name: 'GameSlice',
	initialState,
	reducers: {
		setSort(state, { payload }: PayloadAction<string>) {
			state.sort = payload
		},
		setGenre(state, { payload }: PayloadAction<number>) {
			state.genre = payload
		},
		setPlatform(state, { payload }: PayloadAction<number>) {
			state.platform = payload
		},
	},
})

export const { reducer, actions } = GameSlice
