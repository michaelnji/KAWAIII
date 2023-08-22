/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				head: ['Gochi Hand'],
				body: ['Work Sans'],
				logo: ['Aladin']
			}
		}
	},
	daisyui: {
		themes: [
			{
				default: {
					primary: '#f472b6',
					secondary: '#8ac8db',

					accent: '#69f4d4',

					neutral: '#374151',

					'base-100': '#1f2937',

					info: '#0ea5e9',

					success: '#22c55e',

					warning: '#fbbf24',

					error: '#f43f5e'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
