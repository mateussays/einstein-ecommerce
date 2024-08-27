import Icon from "../Icon/Icon";

type TIconButtonProps = {
  name: 'menu' | 'close' | 'search' | 'logo' | 'cart' | 'user'
  onClick: () => void
}


const IconButton = (props: TIconButtonProps) => {
  const { name, onClick } = props;

  return (
    <button onClick={onClick} className="focus:outline-none">
      <Icon name={name} />
    </button>
  );
}

export { IconButton }
export default IconButton