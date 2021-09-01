module.exports = function(eleventyConfig) {
    return {
      dir: {
        // ⚠️ These values are both relative to your input directory.
        includes: "../_includes",
        layouts: "../_layouts"
      }
    }
  };