import Switch from 'antd/es/switch'
import React from 'react'
import { BsMoonStarsFill } from 'react-icons/bs'
import { MdSunny } from 'react-icons/md'
import { useActions } from 'src/hooks/useActions'
import { useSelectors } from 'src/hooks/useSelectors'

const Mode: React.FC = () => {
	const { mode } = useSelectors()
	const { toggleColorMode } = useActions()
	const onChangeMode = (checked: boolean) => {
		if (checked) toggleColorMode('dark')
		else toggleColorMode('light')
	}

	return (
		<label>
			<Switch
				style={{ border: '1px solid #000' }}
				checked={mode === 'dark'}
				onChange={onChangeMode}
				checkedChildren={<BsMoonStarsFill color='#fff' />}
				unCheckedChildren={<MdSunny color='yellow' />}
			/>
			<span>Dark mode</span>
		</label>
	)
}

export { Mode }
