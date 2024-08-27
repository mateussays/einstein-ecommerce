import Checkbox from '../../atoms/Checkbox'

const CategoriesFilter = () => {
  const categories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
    { id: 4, name: 'Category 4' }
  ]

  return (
    <div className="border rounded-md border-tertiary-lightest py-4 px-6 w-auto">
      <h2 className='text-sm text-primary-dark font-medium mb-4'>Categories</h2>
      <div className="">
        {categories.map(category => (
          <div key={category.id} className="border-b border-tertiary-lightest py-3 last:mb-[147px]">
            <Checkbox
              label={category.name}
              checked={false}
              onChange={() => {}}
              value={category.name}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoriesFilter
export { CategoriesFilter }
