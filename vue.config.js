module.exports = {
  css: {
      loaderOptions: {
        sass: {
          additionalData: `@import "@/scss/variables.scss"; 
                           @import "@/scss/classes.scss";`
        }
      }
    }
};