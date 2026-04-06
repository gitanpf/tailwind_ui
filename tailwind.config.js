@type {import('tailwindcss').Config}

module.exports = {
    content: ['./src/**/*.*.tsx'],
    theme: {
        extend: {
            gridTemplateColumns: {
                app:'250px 1 fr',
            },
        },
    },
    plugins: [],
};
export default config;