type TIconProps = {
  name: 'menu' | 'close';
};

const Icon = (props: TIconProps) => {
  const { name } = props;

  const icons = {
    menu: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="#5C5F6A"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    ),
    close: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="#5C5F6A"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ),
  };

  return icons[name] || null;
};

export default Icon;
