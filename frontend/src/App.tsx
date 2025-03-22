import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./screens//Navbar/Navbar.tsx";
import Footer from "./screens//Footer/Footer.tsx";
import "./index.css";
import useAutoLogin from "./actions/userActions.ts";

const App = () => {
  useAutoLogin();
  const location = useLocation();  // Lấy thông tin URL hiện tại
  const hideNavbar = location.pathname === "/auth/login";  // Kiểm tra nếu đang ở trang login
  const hideNavbar02 = location.pathname === "/auth/register";
  const hideFooter = location.pathname === "/auth/login";  // Kiểm tra nếu đang ở trang login
  const hideFooter01 = location.pathname === "/auth/register";
  return (
    <div className="flex flex-col min-h-screen">
      {(!hideNavbar && !hideNavbar02 && <Navbar />)}  {/* Navbar luôn hiển thị */}
      <Outlet />   {/* Nội dung trang sẽ thay đổi ở đây */}
      {(!hideFooter && !hideFooter01 && <Footer />)}  {/* Navbar luôn hiển thị */}
    </div>
  );
};

export default App;
