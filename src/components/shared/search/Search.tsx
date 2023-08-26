import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { UiInput } from 'src/components/ui/input/UiInput'

const Search: React.FC = () => {
	return <UiInput placeholder='Search...' prefix={<SearchOutlined />} />
}

export { Search }
