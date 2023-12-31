/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        colors: {
          primary: "#8339C6",
          danger: "#FF6C6C",
          textColor:"rgb(66 58 143)"
        },
        backgroundImage: {
          'home-background': "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\"%3E%3Cpath fill=\"%239c4df4\" fill-opacity=\"1\" d=\"M0,32L34.3,48C68.6,64,137,96,206,138.7C274.3,181,343,235,411,245.3C480,256,549,224,617,224C685.7,224,754,256,823,272C891.4,288,960,288,1029,245.3C1097.1,203,1166,117,1234,106.7C1302.9,96,1371,160,1406,192L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z\"/%3E%3C/svg%3E')"
        },
      },
  },
  plugins: [],
}

 