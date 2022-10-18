/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html"],
  theme: {
    extend: {
      backgroundColor: {
        bgPrimary: '#f8f9fa',
        bgSecondary:'',
        customBgColor:'',
      },
      colors: {
        primary: '#3c4043',
        secondary: '#f8f9fa',
        secondray2: '#4d5156',
        darkBlue: '#1a0dab',
        muted: '#70757a'
      },
      fontFamily: {
        font1:'Roboto,sans-serif',
      },
      height: {
				"10v": "10vh",
				"22v": "22vh",
				"30v": "30vh",
				"40v": "40vh",
				"50v": "50vh",
				"60v": "60vh",
				"70v": "70vh",
				"80v": "80vh",
				"90v": "90vh",
				"100v": "100vh",
        "5rem": "5rem",
        "3rem": "3rem"
			}, 
      width: {
        '43%': '43%',
      },
      inset: {
        '30%': '30%',
      },
      fontSize: {
        '14/16rem': '.875rem',
        'sm2': '0.8rem'
      } 
    },
  },
  plugins: [],
}
