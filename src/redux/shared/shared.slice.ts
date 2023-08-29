import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const mode = localStorage.getItem('mode')

type TSharedInitialState = {
	mode: 'dark' | 'light'
}

const initialState: TSharedInitialState = {
	mode: mode === 'dark' ? 'dark' : 'light',
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
