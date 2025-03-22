import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { navbarItems } from "../../components/Navbarapi";
import { FiSun, FiMoon, FiMenu } from "react-icons/fi";
import LogoWeb from "@/assets/logo.png";
import MobileLogo from "@/assets/mobilelogo.png";
import { useDispatch,useSelector } from "react-redux";
import { logout, selectUser} from "../../types/user/userSlice";
import { logoutUser } from "../../actions/userActions";
import { AppDispatch } from "../../store";
const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const userInfo = useSelector(selectUser);
  

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const dispatch = useDispatch<AppDispatch>();
  const handleLogout= async()=>{
    const response = await logoutUser();
    dispatch(logout())
    console.log(response);
  }
  return (
    <nav className="bg-white text-black font-Nurito" id="navtop">
      {/* Div 1: Chứa logo, ô tìm kiếm, và đăng nhập */}
      <div className="max-w-screen-lg w-full mx-auto px-4 py-6 flex justify-between items-center font-Nurito">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src={LogoWeb} alt="Logo" className="h-10 w-auto hidden sm:block" />
          <img src={MobileLogo} alt="Mobile Logo" className="h-10 w-auto sm:hidden" />
        </div>

        {/* Ô tìm kiếm */}
        <div className="hidden sm:block w-full max-w-md h-full items-center justify-center space-x-10">
          <input 
            type="text" 
            placeholder="Hôm nay Người đẹp muốn đọc gì..." 
            className="w-full px-4 py-2 bg-white dark:bg-gray-900 text-black dark:text-white border border-gray-300 rounded-lg focus:outline-none"
          />
        </div>

        <div className="flex items-end sm:ml-auto mr-3">
          <button onClick={() => setIsDarkMode(!isDarkMode)} 
            className={`p-4 rounded-full mx-auto transition duration-300 sm:ml-0 dark:text-black dark:bg-white
              ${isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-amber-200 hover:bg-stone-400"}`}
              style={{

              }}>
            {isDarkMode ? <FiSun size={15} className="text-yellow-400" /> : <FiMoon size={24} className="text-slate-700" />}
          </button>
        </div>

            {/* Đăng nhập / Đăng ký */}
        <div className="hidden lg:flex items-center space-x-4 ">
          {!userInfo ? (
            <>
              <Link to="/auth/login">
                <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-yellow-400 transition duration-300">
                  Đăng nhập
                </button>
              </Link>
              <Link to="/auth/register">
                <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-yellow-400 transition duration-300">
                  Đăng ký
                </button>
              </Link>
              <Link to="/auth/profile">
                <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-yellow-400 transition duration-300">
                  Profile
                </button>
              </Link>
            </>
          ) : (
              <button onClick={handleLogout} className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-yellow-400 transition duration-300">
                Đăng xuất
              </button>
          )}
        </div>
        <button onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden block text-lg " 
          style={{
                  fontSize: "clamp(1.2rem, 2vw, 2.5rem)", 
          }}><FiMenu></FiMenu>
        </button>
          
      </div>

       {/* Menu (dấu 3 gạch) */}
      <div className="hidden lg:block bg-gray-100 dark:text-black dark:bg-white m-0 p-0 min-h-0" id="navbottom">
        <ul className="container mx-auto flex justify-between items-center py-0 h-full">
          {navbarItems.map((item, index) => (
            <li key={index} className="h-full flex-1 p-0">
              <Link
                to={item.path}
                className="h-full flex items-center text-black justify-center px-4 py-1 min-w-[90px] hover:text-black hover:bg-yellow-400 hover:border-yellow-500 hover:rounded-lg transition duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      

      {isOpen && (
        <div className="lg:hidden fixed inset-0 overflow-y-auto w-full dark:bg-gray-800 z-50 shadow-md text-sm text-left pl-3 mt-12"
              style={{marginTop: "clamp(6rem, 4vh, 3rem)"}}>
          <div className="flex w-full items-center px-2 sm:px-3 py-2 sm:py-3 text-left relative">
            <input 
              type="text" 
              placeholder="Hôm nay Người đẹp muốn đọc gì..." 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none bg-white dark:bg-gray-900 text-black dark:text-white"
            />
          </div>
          <div className="rounded-sm bg-white text-black  dark:bg-gray-600">
              <ul className="flex flex-col text-left border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-600 text-black dark:text-white rounded-lg">
                {navbarItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="block py-3 pl-3 bg-white dark:bg-gray-600 text-black dark:text-white hover:text-white hover:bg-yellow-400 hover:border-yellow-500 hover:rounded-lg transition duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                </li>
                ))}
              </ul>
              <div className="flex flex-col bg-white text-black text-left dark:bg-gray-600">
                    <Link to="/auth/login"
                        className="block py-3 text-black pl-3 dark:text-white dark:bg-gray-600 hover:text-white hover:bg-yellow-400 hover:border-yellow-500 hover:rounded-lg transition duration-300"
                        onClick={() => setIsOpen(false)}
                    >Đăng nhập</Link>
                    <Link to="/auth/register"
                        className="block py-3 text-black pl-3 dark:text-white dark:bg-gray-600 hover:text-white hover:bg-yellow-400 hover:border-yellow-500 hover:rounded-lg transition duration-300"
                        onClick={() => setIsOpen(false)}
                    >Đăng ký</Link>
                    <Link to="/auth/profile"
                        className="block py-3 text-black pl-3 dark:text-white dark:bg-gray-600 hover:text-white hover:bg-yellow-400 hover:border-yellow-500 hover:rounded-lg transition duration-300"
                        onClick={() => setIsOpen(false)}
                    >Profile</Link>
              </div>
          </div>
          
        </div>
      )}



    </nav>
  );
};

export default Navbar;
