import { useEffect, useState } from 'react'
import { UiSelect } from 'src/components/ui/select/UiSelect'
import { useActions } from 'src/hooks/useActions'
import { useGetPlatformsQuery } from 'src/redux/index.endpoints'

export type TOptions = {
	value: number
	label: string
}

const Platforms: React.FC = () => {
	const { data } = useGetPlatformsQuery()
	const { setPlatform } = useActions()
	const [options, setOptions] = useState<TOptions[]>([])

	useEffect(() => {
		if (data) {
			const newOptions = data.results.map(item => {
				return { value: item.id, label: item.name }
			})
			setOptions(newOptions)
		}
	}, [data])

	return (
		<UiSelect
			onSelect={e => setPlatform(String(e))}
			defaultValue='Platforms'
			options={options}
		/>
	)
}

export { Platforms }
