/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
     themes: [
        {
          mytheme: {
          
            'primary': '#C93535',
            'primary-focus': '#BA3434',
            'primary-content': 'white',
            'secondary': '#FAF9FC',
            'secondary-focus': '#FAF9FC',
            'secondary-content': '#5D4FFF',
            'accent': '#37cdbe',
            'accent-focus': '#2aa79b',
            'accent-content': '#ffffff',
            'neutral': '#3d4451',
            'neutral-focus': '#2a2e37',
            'neutral-content': '#ffffff',
            'base-100': '#000000',
            
            'info': '#2094f3',
            'success': '#009485',
            'warning': '#ff9900',
            'error': '#ff5724',
                },
                },
            ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,


  },
}