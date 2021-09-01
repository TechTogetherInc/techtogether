module.exports = function(eleventyConfig) {
    return {
      dir: {
        // This allows us to use includes and layouts from the parent TTM site.
        includes: "../_includes",
        layouts: "../_layouts"
      }
    }
  };