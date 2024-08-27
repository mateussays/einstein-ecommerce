import { UserIcon } from "../Icons";

type TIconButtonProps = {
  onClick: () => void
}


const IconButton = (props: TIconButtonProps) => {
  const { onClick } = props;

  return (
    <button onClick={onClick} className="focus:outline-none">
      <UserIcon />
    </button>
  );
}

export { IconButton }
export default IconButton