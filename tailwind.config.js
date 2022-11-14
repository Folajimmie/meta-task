/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
    colors: {
      primary: "#A02279",
      white: "#FFFFFF",
      faintGray: "rgba(67, 67, 67, 1)",
      lightGray: "rgba(163, 163, 163, 1)",
      black: "#000000",
      mildGray: "rgba(207, 216, 220, 1)",
      tblack: "#434343",
    },
     fontSize: {
    'headline-1': [
      '56px',
      {
        lineHeight:'78px',
        letterSpaceing: '0.02em',
        fontWeight: 400
      }
    ],
    'headline-2': [
      '48px',
      {
        lineHeight:'60px',
        letterSpaceing: '0.02em',
        fontWeight: 700
      }
    ],
    span: [
      '56px',
      {
        lineHeight:'78px',
        fontWeight: 500
      }
    ],
    body: [
      '24px',
      {
        lineHeight: '35px',
        letterSpacing: '0.005em'
      }
    ],
    button: [
      '16px',
      {
        lineHeight: '20px',
        letterSpacing: '0.015em',
        fontWeight: 400
      }
    ],
    menu: [
      '20px',
      {
        lineHeight: '25px',
        letterSpacing: '0.005em',
        fontWeight: 400

      }
    ],
    caption: [
      '18px',
      {
        lineHeight: '35px',
        fontWeight: 400
      }
    ],
    footerTitle: [
      '18px',
      {
        lineHeight: '22px',
        fontWeight: 700
      }
    ],
     footerList: [
       '14px',
       {
         lineHeight: '35px',
         fontWeight: 400
       }
     ],
     copywrite: [
       '16px',
       {
         lineHeight: '16px',
         fontWeight: 400
       }
     ]
   }
  },
},
  plugins: [],

};