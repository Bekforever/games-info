import { useEffect, useState } from 'react'
import { UiSelect } from 'src/components/ui/select/UiSelect'
import { useGetPlatformsQuery } from 'src/redux/index.endpoints'

export type TOptions = {
	value: string
	label: string
}

const Platforms: React.FC = () => {
	const { data } = useGetPlatformsQuery()
	const [options, setOptions] = useState<TOptions[]>([])

	useEffect(() => {
		if (data) {
			const newOptions = data.results.map(item => {
				return { value: item.name, label: item.name }
			})
			setOptions(newOptions)
		}
	}, [data])

	return <UiSelect defaultValue='Platforms' options={options} />
}

export { Platforms }
