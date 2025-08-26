// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     // NOTE: Update this to include the paths to all files that contain Nativewind classes.
//     content: ["./App.tsx", "./App.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
//     presets: [require("nativewind/preset")],
//     theme: {
//         extend: {},
//     },
//     plugins: [],
// }


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: [
//         "./App.{js,jsx,ts,tsx}",
//         "./index.{js,jsx,ts,tsx}",
//         "./src/**/*.{js,jsx,ts,tsx}",
//         "./app/**/*.{js,jsx,ts,tsx}" // if you are using expo-router
//     ],
//     theme: {
//         extend: {},
//     },
//     plugins: [],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./index.{js,jsx,ts,tsx}",
        "./src/**/*.{js,jsx,ts,tsx}",
        "./app/**/*.{js,jsx,ts,tsx}", // for expo-router
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: "#030014",
                secondary: "#151312",
                light: {
                    100: "#D6C7FF",
                    200: "#A8B5DB",
                    300: "#9CA4AB",
                },
                dark: {
                    100: "#221F3D",
                    200: "#0F0D23",
                },
                accent: "#AB8BFF",
            },
        },
    },
    plugins: [],
};
