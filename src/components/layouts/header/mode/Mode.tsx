import Switch from 'antd/es/switch'
import React from 'react'
import { BsMoonStarsFill } from 'react-icons/bs'
import { MdSunny } from 'react-icons/md'
import { useActions } from 'src/hooks/useActions'
import { useSelectors } from 'src/hooks/useSelectors'
import styles from './Mode.module.scss'

const Mode: React.FC = () => {
	const { mode } = useSelectors()
	const { toggleColorMode } = useActions()
	
	const onChangeMode = (checked: boolean) => {
		if (checked) toggleColorMode('dark')
		else toggleColorMode('light')
	}

	return (
		<Switch
			className={styles.switch + ' ' + (mode === 'light' && styles.light)}
			checked={mode === 'dark'}
			onChange={onChangeMode}
			checkedChildren={<BsMoonStarsFill color='#fff' />}
			unCheckedChildren={<MdSunny color='yellow' />}
		/>
	)
}

export { Mode }
