/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            brandDark: "#141518",
            brandDarkGrey: "#2D2E35",
            brandGrey: "#373A41",
            brandBgGrey: "#505057",
            brandPrimary: "#E1348B",
            brandPurple: "#A145CD",
            brandSecondary: "#DBDADA",
            brandLightGrey: "#728095",
         },
         height: {
            "3.5": "13px",
            "12.5": "52px",
            "60": "60px",
         },
         width: {
            "3.5": "13px",
            "480": "474px",
            "520": "520px",
            "412": "412px",
         },
         borderRadius:{
            "3": "3px",
            "50": "50px",
            "30": "30px",
            "10": '10px'
         },
         minHeight:{
            "32": "128px",
         }
      },
   },
   plugins: [],
};
