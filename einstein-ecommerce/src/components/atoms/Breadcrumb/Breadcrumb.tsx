import { Link } from 'react-router-dom';
import { ChevronRight } from '../Icons';

type BreadcrumbProps = {
  currentPage: string;
  showPageTitle?: boolean;
};

const Breadcrumb = ({ currentPage, showPageTitle = false }: BreadcrumbProps) => {
  const paddingClass = showPageTitle ? 'py-[34px]' : 'py-[18px]';

  return (
    <nav
      className={`bg-secondary-dark ${paddingClass}  pl-8 md:pl-[162px] flex flex-col gap-2`}
      aria-label="Breadcrumb"
    >
      {showPageTitle && (
        <h1 className="text-primary-dark font-bold text-2xl">{currentPage}</h1>
      )}
      <ol className="list-reset flex items-center">
        <li className="flex items-center">
          <Link
            to="/"
            className="hover:underline text-tertiary-dark text-sm font-medium"
          >
            Ecommerce
          </Link>
          <div className="w-6 text-tertiary-dark mx-2">
            <ChevronRight />
          </div>
        </li>
        <li className="flex items-center">
          <span className="text-primary-dark text-sm font-medium">
            {currentPage}
          </span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
