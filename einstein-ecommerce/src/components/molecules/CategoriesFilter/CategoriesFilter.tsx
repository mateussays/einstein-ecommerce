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
  
  const handleCategoryChange = (category: string) => {
    const newCategory = selectedCategory === category ? null : category
    onCategoryChange(newCategory)
  }

  return (
    <div className="border rounded-md border-tertiary-lightest py-4 px-6 w-full">
      <h2 className="text-sm text-primary-dark font-medium mb-4">Categories</h2>
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
    </div>
  )
}

export default CategoriesFilter
export { CategoriesFilter }
