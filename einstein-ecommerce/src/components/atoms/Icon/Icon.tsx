type TIconProps = {
  name: 'menu' | 'close' | 'search';
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
    search: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <path d="M9.22523 16.9799C11.28 16.9799 13.2507 16.1636 14.7037 14.7106C16.1566 13.2577 16.9729 11.287 16.9729 9.23219C16.9729 7.17737 16.1566 5.20672 14.7037 3.75374C13.2507 2.30077 11.28 1.4845 9.22523 1.4845C7.17041 1.4845 5.19976 2.30077 3.74679 3.75374C2.29381 5.20672 1.47754 7.17737 1.47754 9.23219C1.47754 11.287 2.29381 13.2577 3.74679 14.7106C5.19976 16.1636 7.17041 16.9799 9.22523 16.9799Z" stroke="#878A92" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.5225 19.5155L14.5782 15.5712" stroke="#878A92" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    ),
  };

  return icons[name] || null;
};

export { Icon };
export default Icon;
