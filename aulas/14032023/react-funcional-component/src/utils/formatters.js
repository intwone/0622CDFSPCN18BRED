export function formatPrice(number) {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(number)
} 

export function formatDate(date) {}
