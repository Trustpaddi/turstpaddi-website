module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            "orange": "#FEF5E7",
            "dark-orange": "#F49F1C",
            "blue": "#220070",
            "white": "#FFFFFF",
            "gray": "#58497A",
            "dark-blue": "#362365",
            "who": "#17004D"
        },
    },
    plugins: [require('@tailwindcss/forms')],
}