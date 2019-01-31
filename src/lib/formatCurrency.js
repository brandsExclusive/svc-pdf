import currencyFormatter from 'currency-formatter'

const formatDynamicAmount = (amount, currencyCode) => {
  return currencyFormatter.format(
    amount,
    {code: currencyCode, precision: (amount % 1 ? 2 : 0)}
  )
}

module.exports = {
  formatDynamicAmount
}
