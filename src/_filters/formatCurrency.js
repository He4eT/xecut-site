/**
 * Format the number to the currency string according the page.lang
 * Usage: {{ 10000 | formatCurrency: 'RDS' }} => '10 000 RSD'
 *
 * @param {number} amount
 * @param {string} currency
 * @returns {string}
 */
export function formatCurrency (amount, currency) {
  const formatter = new Intl.NumberFormat(this.page.lang, {
    style: 'currency',
    currency,
  })
  return formatter.format(amount)
}
