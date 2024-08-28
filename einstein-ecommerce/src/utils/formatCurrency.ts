const formatCurrency = (value: number) => {
  if (typeof value !== 'number' || isNaN(value)) {
    throw new Error('value must be a number')
  }

  const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value)

  return formattedValue.replace('R$', 'R$ ').replace(',', '.')
}

export default formatCurrency
