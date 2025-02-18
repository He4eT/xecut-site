import { EleventyI18nPlugin } from '@11ty/eleventy'

/**
 * @param {import('@11ty/eleventy').UserConfig} eleventyConfig
 */
export default function(eleventyConfig) {
  /* Source and Target*/
  eleventyConfig.setInputDirectory('src')
  eleventyConfig.setOutputDirectory('build')
  /* Assets */
  eleventyConfig.addPassthroughCopy('src/_assets/css/**/*.css')
  eleventyConfig.addPassthroughCopy('src/_assets/fonts/')
  eleventyConfig.addPassthroughCopy('src/_assets/img/')
  /* Plugins*/
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: 'en',
  })
}
