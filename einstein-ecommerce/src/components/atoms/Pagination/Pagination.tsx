import getPages from '../../../utils/getPages'
import { ChevronLeft, ChevronRight } from '../Icons'

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange
}: PaginationProps) => {
  const handlePageChange = (page: number | string) => {
    if (
      page === '...' ||
      typeof page !== 'number' ||
      page < 1 ||
      page > totalPages
    )
      return
    onPageChange(page)
  }

  return (
    <div className="flex items-center justify-center border gap-2 rounded-lg border-[#e9e9eb] py-[6px] px-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-1 text-gray-700 bg-white rounded disabled:opacity-50"
      >
        <ChevronLeft />
      </button>
      {getPages(currentPage, totalPages).map((page, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(page)}
          className={`px-4 py-1 ${
            page === currentPage
              ? 'bg-secondary-dark text-primary-dark'
              : 'bg-white text-primary-dark'
          } rounded ${page === '...' ? 'cursor-default' : ''}`}
          disabled={page === '...'}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-1 text-gray-700 bg-white rounded disabled:opacity-50"
      >
        <ChevronRight />
      </button>
    </div>
  )
}

export default Pagination
export { Pagination }