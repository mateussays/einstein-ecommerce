import Checkbox from '../../atoms/Checkbox'

type CategoriesFilterProps = {
  categories: string[]
}

const CategoriesFilter = (props: CategoriesFilterProps) => {
  const { categories } = props

  return (
    <div className="border rounded-md border-tertiary-lightest py-4 px-6 w-full">
      <h2 className="text-sm text-primary-dark font-medium mb-4">Categories</h2>
      <div className="">
        {categories.map((category, index) => (
          <div
            key={index}
            className="border-b border-tertiary-lightest py-3 last:mb-[147px]"
          >
            <Checkbox
              label={category}
              checked={false}
              onChange={() => {}}
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
