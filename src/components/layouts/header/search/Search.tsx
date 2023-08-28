import React, { useState, useEffect } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { UiInput } from 'src/components/ui/input/UiInput'
import { useDebounce } from 'src/hooks/useDebounce'
import { useActions } from 'src/hooks/useActions'

const Search: React.FC = () => {
	const [searchValue, setSearchValue] = useState('')
	const debouncedSearchValue = useDebounce(searchValue, 500)
	const { setSearch } = useActions()

	useEffect(() => {
		setSearch(debouncedSearchValue)
	}, [debouncedSearchValue])

	return (
		<UiInput
			value={searchValue}
			onChange={e => setSearchValue(e.target.value)}
			placeholder='Search...'
			prefix={<SearchOutlined />}
			allowClear
		/>
	)
}

export { Search }
