import { UiSelect } from 'src/components/ui/select/UiSelect'
import { useActions } from 'src/hooks/useActions'
import { useSelectors } from 'src/hooks/useSelectors'

type TSortOptions = {
	value: string
	label: string
}

const Sort: React.FC = () => {
	const { setSort } = useActions()
	const { ordering } = useSelectors()
	
	const options: TSortOptions[] = [
		{ value: '', label: 'Relevance' },
		{ value: '-added', label: 'Date added' },
		{ value: '-name', label: 'Name' },
		{ value: '-released', label: 'Release date' },
		{ value: '-metacritic', label: 'Popularity' },
		{ value: '-rating', label: 'Average rating' },
	]

	return (
		<UiSelect
			value={ordering === 'name' ? 'Order by: Name' : ordering || 'Order by: Relevance'}
			onChange={e => setSort(e)}
			options={options.map(item => ({
				...item,
				label: item.value === ordering ? `Order by: ${item.label}` : item.label,
			}))}
		/>
	)
}
export { Sort }
