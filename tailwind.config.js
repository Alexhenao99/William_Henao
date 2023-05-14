module.exports = {
  darkMode: 'class',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      text: '#0A1929',
      text_secondary: '#356C78',
      text_dark: '#ffffff',
      bg: '#ffffff',
      bg_dark: '#0A1929',
      bg_dark_secondary: '#356C78',
      bg_modal: 'rgba(10, 25, 41, 0.8)',
      bg_modal_dark: 'rgba(79, 79, 79, 0.9)',
      circle: 'rgba(10, 25, 41, 0.95)',
      circle_dark: 'rgba(53, 108, 120, 0.95)',
      x_close: '#DD2E44'
    },
    dropShadow: {
      light_shadow: '5px 1px 20px rgba(0, 0, 0, 0.25)',
      dark_shadow: '5px 1px 20px rgba(255, 255, 255, 0.25)'
    }
  },
  plugins: []
}
