import { ChevronRight } from '../Icons'

type BreadcrumbProps = {
  currentPage: string
}

const Breadcrumb = (props: BreadcrumbProps) => {
  const { currentPage } = props

  return (
    <nav className="bg-secondary-dark py-[18px] pl-[162px]" aria-label="Breadcrumb">
      <ol className="list-reset flex">
        <li className="flex items-center">
          <a
            href="/"
            className="hover:underline text-tertiary-dark text-sm font-medium"
          >
            Ecommerce
          </a>
          <ChevronRight />
        </li>
        <li className="flex items-center">
          <span className=" text-primary-dark text-sm font-medium">
            {currentPage}
          </span>
        </li>
      </ol>
    </nav>
  )
}

export default Breadcrumb
export { Breadcrumb }
