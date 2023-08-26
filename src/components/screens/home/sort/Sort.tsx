import { UiSelect } from 'src/components/ui/select/UiSelect'
import { TOptions } from '../platforms/Platforms'
import { useState } from 'react'
import { useActions } from 'src/hooks/useActions'

const Sort: React.FC = () => {
	const { setSort } = useActions()
	const [selectedSort, setSelectedSort] = useState(null)
	const options: TOptions[] = [
		{ value: '', label: 'Relevance' },
		{ value: '-added', label: 'Date added' },
		{ value: 'name', label: 'Name' },
		{ value: '-released', label: 'Release date' },
		{ value: '-metacritic', label: 'Popularity' },
		{ value: '-rating', label: 'Average rating' },
	]

	const handleSelect = (e: any) => {
		setSelectedSort(e)
		setSort(e)
	}

	return (
		<UiSelect
			value={selectedSort || 'Order by: Relevance'}
			onChange={handleSelect}
			options={options.map(item => ({
				...item,
				label:
					item.value === selectedSort ? `Order by: ${item.label}` : item.label,
			}))}
		/>
	)
}
export { Sort }
