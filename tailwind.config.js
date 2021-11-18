module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#117dac',
				secondary: '#ed1c24',
				third: '#ea8522',
				darkgray: '#161616',
				darkgrayAccent: '#2a2a36',
				darkshade: '#222222',
				font: '#e6e6e6',
				blogFont: '#c4c6c6',
				blogSecondary: '#6c787f',
				blogFontSecondary: '#c2c2c2',
				twitter: '#2ca6df',
				github: '#ea8522',
				dribble: '#ea4c89',
				linkedIn: '#0077b5',
			},
			fontSize: {
				xs: '.75rem',
				'10xl': '9rem',
			},
			backgroundImage: {
				'hero-icon': "url('/assets/Icon.svg')",
			},
		},
		screens: {
			sm: '375px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
		fontFamily: {
			mont: ['Montserrat'],
			rale: ['Raleway'],
			cochin: ['Cochin'],
		},
	},
	variants: {
		extend: {},
		variants: {
			borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
			colors: ['responsive', 'hover', 'focus', 'focus-within'],
		},
	},
	plugins: [],
};
