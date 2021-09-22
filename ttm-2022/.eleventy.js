module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "css",
    "scss",
    "png",
    "jpeg",
    "svg",
    "html"
  ]);
    return {
      dir: {
        // This allows us to use includes and layouts from the parent TTM site.
        includes: "_includes",
        layouts: "_layouts"
      }
    }
  };