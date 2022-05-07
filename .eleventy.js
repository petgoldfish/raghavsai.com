const cleanCSS = require("clean-css");
const htmlMin = require("html-minifier");
const markdownIt = require("markdown-it");
const markdownItFootnote = require("markdown-it-footnote");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    // Filters
    eleventyConfig.addFilter("niceDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    eleventyConfig.addFilter("cssmin", function (code) {
        return new cleanCSS({}).minify(code).styles;
    });

    // Minify html
    eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
        if (outputPath.endsWith(".html")) {
            return htmlMin.minify(content, {
                collapseWhitespace: true,
                removeComments: true,
                useShortDoctype: true,
            });
        }
        return content;
    });

    // Markdown parssing
    let options = {
        html: true
    };
    let markdownLib = markdownIt(options).use(markdownItFootnote);
    eleventyConfig.setLibrary("md", markdownLib);

    // Passthrough copies
    eleventyConfig.addPassthroughCopy("src/styles/fonts/");
    eleventyConfig.addPassthroughCopy({ "src/static": "/" });
    eleventyConfig.addPassthroughCopy({ "src/admin/config.yml": "./admin/config.yml" });

    // Eleventy options
    return {
        dir: {
            input: "src",
            output: "public",
        }
    }
}