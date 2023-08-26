import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
	sort: '',
}

const GameSlice = createSlice({
	name: 'GameSlice',
	initialState,
	reducers: {
		setSort(state, { payload }: PayloadAction<string>) {
			state.sort = payload
		},
	},
})

export const { reducer, actions } = GameSlice
