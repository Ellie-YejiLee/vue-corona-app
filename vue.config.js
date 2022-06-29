module.exports = {
    publicPath: process.env.MODE_ENV === "productgion" ? "/vue-corona-app" : "/",
    outputDir: "docs",
};