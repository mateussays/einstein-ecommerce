const getPages = (
  currentPage: number,
  totalPages: number
): (number | string)[] => {
  const pages: (number | string)[] = []
  const visiblePages = 1

  pages.push(1)
  if (totalPages > 1) pages.push(2)

  if (currentPage > visiblePages + 3) {
    pages.push('...')
  }

  const startPage = Math.max(3, currentPage - visiblePages)
  const endPage = Math.min(totalPages - 2, currentPage + visiblePages)

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  if (currentPage < totalPages - visiblePages - 2) {
    pages.push('...')
  }

  if (totalPages > 3) pages.push(totalPages - 1)
  if (totalPages > 2) pages.push(totalPages)

  return pages
}

export { getPages }
export default getPages