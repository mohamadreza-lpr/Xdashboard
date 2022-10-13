const { defineConfig } = require("@vue/cli-service");
const path = require('path');
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "scss",
            // load which style file you want to import globally
            patterns: [path.resolve(__dirname, "./src/styles/_variables.scss")],
        },

    },
    // css: {
    //     loaderOptions: {
    //         sass: {
    //             data: `@import "@/styles/_variables.scss";`,
    //         },
    //     },
    // },
});
