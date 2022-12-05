module.exports = {
	content: [
		// Example content paths...
		'./public/**/*.html',
		'./src/**/*.{js,jsx,ts,tsx,vue}'
	],
	darkMode: 'media ', // or 'media' or 'class'
	important: true,
	theme: {
		minWidth: {
			0: '0',
			'1/4': '25%',
			'1/2': '50%',
			'3/4': '75%',
			full: '100%',
			xxl: '1600px'
		},
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: [],
	corePlugins: {
		preflight: false
	}
};
