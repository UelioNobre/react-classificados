export const getRandImage = () => {
  const url = 'https://picsum.photos/seed/picsum/700/400'
  const rnd = Math.round(Math.random() * Number.MAX_SAFE_INTEGER)
  const end = `${url}?${rnd}`
  return end
}

export const valueToReal = (value) => {
  const options = {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  };

  const num = Intl.NumberFormat('pt-BR', options);
  return num.format(value);
}
