import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ISharedType } from './shared.types'

const mode = localStorage.getItem('mode')

const initialState: ISharedType = {
	mode: mode === 'dark' ? 'dark' : 'light',
	platforms: null,
}

const sharedSlice = createSlice({
	name: 'shared',
	initialState,
	reducers: {
		toggleColorMode(state, { payload }: PayloadAction<'dark' | 'light'>) {
			if (payload === 'light') {
				localStorage.setItem('mode', (state.mode = 'light'))
			} else {
				localStorage.setItem('mode', (state.mode = 'dark'))
			}
		},
	},
})
export const { reducer, actions } = sharedSlice
