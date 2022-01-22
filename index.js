const plugin = require('tailwindcss/plugin')

/**
 * This plugin adds an hover-hover and a group-hover-hover variants.
 */
module.exports = plugin(function ({ addVariant, e, postcss }) {
  addVariant('hover-hover', ({ container, separator }) => {
    const hoverHover = postcss.atRule({
      name: 'media',
      params: '(hover: hover)',
    })
    hoverHover.append(container.nodes)
    container.append(hoverHover)
    hoverHover.walkRules(rule => {
      rule.selector = `.${e(
        `hover-hover${separator}${rule.selector.slice(1)}`,
      )}:hover`
    })
  })
  addVariant('group-hover-hover', ({ container, separator }) => {
    const groupHoverHover = postcss.atRule({
      name: 'media',
      params: '(hover: hover)',
    })
    groupHoverHover.append(container.nodes)
    container.append(groupHoverHover)
    groupHoverHover.walkRules(rule => {
      rule.selector = `.group:hover .${e(
        `group-hover-hover${separator}${rule.selector.slice(1)}`,
      )}`
    })
  })
})
