import { EleventyI18nPlugin } from '@11ty/eleventy'

/**
 * @param {import('@11ty/eleventy').UserConfig} eleventyConfig
 */
export default function(eleventyConfig) {
  eleventyConfig.setInputDirectory('src')
  eleventyConfig.setOutputDirectory('build')
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: 'en',
  })
}
