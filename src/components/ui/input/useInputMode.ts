export const useInputMode = (mode: 'dark' | 'light') => {
	const dark = {
		colorText: '#94A3B8',
		colorTextPlaceholder: '#94A3B8',
		colorBgContainer: '#242424',
		colorPrimaryHover: '#5B21B6',
	}
	const light = {
		colorPrimaryHover: '#5B21B6',
		colorText: '#6D5580',
		colorTextPlaceholder: '#94A3B8',
		colorBgContainer: '#F1F5F9',
	}
	if (mode === 'dark') return dark
	return light
}
