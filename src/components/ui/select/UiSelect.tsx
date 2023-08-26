import { ConfigProvider, Select, SelectProps } from 'antd'
import React from 'react'

import { useSelectMode } from './useSelectMode'
import { useSelectors } from 'src/hooks/useSelectors'

const UiSelect: React.FC<SelectProps> = _props => {
	const { mode } = useSelectors()
	const theme = useSelectMode(mode)
	return (
		<ConfigProvider theme={{ token: theme }}>
			<Select {..._props} style={{ width: 300 }} />
		</ConfigProvider>
	)
}

export { UiSelect }
