import { useContext } from 'react';
import { MdOutlineShoppingBag } from 'react-icons/md';

export default function Header() {

  const [isOpen, setisOpen] = useContext<>(shopContext);

  const toggleOpen = () => {
    isOpen === false ? setisOpen(true) : setisOpen(false);
  };

  return (
    <div className="bg-gray-800 flex justify-between fixed top-0 left-0 right-0 justify-items-center py-3 px-20">
      <h1 className="text-[18px] text-gray-400">React Shopping Cart</h1>
      <MdOutlineShoppingBag onClick={toggleOpen} color="gray" size="30px" />
    </div>
  );
}
