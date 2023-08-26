import { bindActionCreators } from '@reduxjs/toolkit'
import React from 'react'
import { useDispatch } from 'react-redux'
import { actions as shared } from 'src/redux/shared/shared.slice'
import { actions as games } from 'src/redux/games/Games.slice'

const rootActions = {
	...shared,
	...games,
}

export const useActions = () => {
	const dispatch = useDispatch()
	return React.useMemo(
		() => bindActionCreators(rootActions, dispatch),
		[dispatch]
	)
}
