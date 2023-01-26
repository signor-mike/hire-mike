module.exports = {
    transpileDependencies: ["vuetify"],

    pluginOptions: {},

    chainWebpack: (config) => {
        config.performance.maxEntrypointSize(400000).maxAssetSize(100000);
    },
};
