import Logo from "../Assets/logo.svg";
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import { useState } from "react";
import Overlay from "./Overlay";
import { Link } from "react-router-dom";
import PageLayout from "./PageLayout";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <>
      <PageLayout>
        <Overlay isVisible={showOverlay} onClose={() => setShowOverlay(!showOverlay)} />
        
        {/* Mobile Nav */}
        
        <div
          className={`${
            open ? "-translate-y-0" : "-translate-y-full"
          } absolute top-0 left-0 w-screen bg-white p-7 transition-all duration-300 ease-in-out filter`}
        >
          <div className="flex justify-end">
            <HiOutlineXMark
              onClick={() => setOpen(!open)}
              className="md:hidden text-3xl"
            />
          </div>

          <div className="text-center" onClick={() => setOpen(!open)}>
            <div className=" cursor-pointer my-6">
              <Link to="/" className="text-menu">Home</Link>
            </div>
            <div className=" cursor-pointer my-6">
              <Link to="/placetostay" className='text-menu'>Place to stay</Link>
            </div>
            <div className=" cursor-pointer my-6">
              <p className="text-menu">NFTs</p>
            </div>
            <div className=" cursor-pointer my-6">
              <p className="text-menu">Community</p>
            </div>
            <div className=" cursor-pointer my-6">
              <button
                onClick={() => setShowOverlay(!showOverlay)}
                className="bg-gradient-to-r from-primary to-primary py-3 px-6 text-white rounded-lg"
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </div>

        {/* Nav for other screens */}

        <div className="py-10 flex md:text-sm justify-between items-center">
          <Link to="/">
            <img className=" w-28 md:w-36 lg:w-52 " src={Logo} alt='logo'/>
          </Link>

          <HiBars3BottomRight
            onClick={() => setOpen(!open)}
            className="md:hidden text-3xl"
          />

          <div className="hidden md:flex md:gap-7 text-faintGray lg:gap-12 ">
            <Link to="/" className="text-menu">Home</Link>
            <Link to="/placetostay" className="text-menu">Place to stay</Link>
            <a href="/" className="text-menu">NFTs</a>
            <a href="/" className="text-menu">Community</a>
          </div>

          <button
            onClick={() => setShowOverlay(!showOverlay)}
            className=" hidden md:block bg-gradient-to-r from-primary to-primary py-3 px-6 md:px-4 text-white rounded-lg"
          >
            Connect Wallet
          </button>
        </div>
      </PageLayout>
    </>
  );
};

export default Navbar;
