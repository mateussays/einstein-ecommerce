type TagProps = {
  name: string
}

const Tag = ({ name }: TagProps) => (
  <div className="border rounded-full border-tertiary-lightest text-xs text-primary-dark font-medium px-4 py-1">
    {name}
  </div>
)

export default Tag
export { Tag }
