import currencyFormatter from 'currency-formatter'

export function formatDynamicAmount(amount, currencyCode) {
  return currencyFormatter.format(
    amount,
    {code: currencyCode, precision: (amount % 1 ? 2 : 0)}
  )
}

export function formatPreciseAmount(amount, currencyCode) {
  return currencyFormatter.format(
    amount,
    {code: currencyCode, precision: 2}
  )
}

export function formatRoundedAmount(amount, currencyCode) {
  return currencyFormatter.format(
    amount,
    {code: currencyCode, precision: 0}
  )
}

export function formatDynamicAmountWithDollarType(amount, currencyCode) {
  return addDollarType(
    formatDynamicAmount(amount, currencyCode),
    currencyCode
  )
}

export function formatPreciseAmountWithDollarType(amount, currencyCode) {
  return addDollarType(
    formatPreciseAmount(amount, currencyCode),
    currencyCode
  )
}

export function formatRoundedAmountWithDollarType(amount, currencyCode) {
  return addDollarType(
    formatRoundedAmount(amount, currencyCode),
    currencyCode
  )
}

function addDollarType(formattedAmount, currencyCode) {
  return formattedAmount.match(/^\$/)
    ? `${currencyCode}${formattedAmount}`
    : formattedAmount
}
