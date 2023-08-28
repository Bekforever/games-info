export const useSelectMode = (mode: 'dark' | 'light') => {
	const dark = {
		colorText: '#94A3B8',
		colorPrimaryHover: '#5B21B6',
		colorBgContainer: '#242424',
		colorBgElevated: '#242424',
		controlItemBgActive: '#1A253A',
		controlItemBgHover: '#1A253A',
	}
	const light = {
		colorText: '#6D5580',
		colorPrimaryBg: '#F1F5F9',
		colorPrimaryHover: '#5B21B6',
		colorBgContainer: '#F1F5F9',
		colorBgElevated: '#F1F5F9',
		controlItemBgActive: '#EDE9FE',
		controlItemBgHover: '#EDE9FE',
	}
	if (mode === 'dark') return dark
	return light
}
