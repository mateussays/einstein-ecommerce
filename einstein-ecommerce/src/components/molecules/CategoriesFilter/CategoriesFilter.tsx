import { useState, useEffect, useRef } from 'react'
import useResponsive from '../../../hooks/useResponsive'
import Checkbox from '../../atoms/Checkbox'

type CategoriesFilterProps = {
  categories: string[]
  selectedCategory: string | null
  onCategoryChange: (category: string | null) => void
}

const CategoriesFilter = ({
  categories,
  selectedCategory,
  onCategoryChange
}: CategoriesFilterProps) => {
  const isMobile = useResponsive('sm')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [isMenuOpen])

  const handleCategoryChange = (category: string) => {
    const newCategory = selectedCategory === category ? null : category
    onCategoryChange(newCategory)
  }

  const renderCategories = () => (
    <div>
      {categories.map(category => (
        <div
          key={category}
          className="border-b border-tertiary-lightest py-3 last:mb-36"
        >
          <Checkbox
            label={category}
            checked={selectedCategory === category}
            onChange={() => handleCategoryChange(category)}
            value={category}
          />
        </div>
      ))}
    </div>
  )

  const renderMobileMenu = () => (
    <>
      <button onClick={toggleMenu} className="text-primary-dark font-medium">
        Filtre por categoria <span className="ml-2">▼</span>
      </button>
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={toggleMenu}
          ></div>
          <div
            ref={menuRef}
            className="fixed top-0 left-0 w-64 h-full bg-white border-r border-tertiary-lightest shadow-lg transition-transform duration-300 transform translate-x-0 z-50"
          >
            <div className="p-4">
              <h2 className="text-sm text-primary-dark font-medium mb-4">
                Categorias
              </h2>
              {renderCategories()}
            </div>
          </div>
        </>
      )}
    </>
  )

  const renderDesktopLayout = () => (
    <div className="border rounded-md border-tertiary-lightest py-4 px-6 w-full">
      <h2 className="text-sm text-primary-dark font-medium mb-4">Categorias</h2>
      {renderCategories()}
    </div>
  )

  return isMobile ? renderMobileMenu() : renderDesktopLayout()
}

export default CategoriesFilter
export { CategoriesFilter }
