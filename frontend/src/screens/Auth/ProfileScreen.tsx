import { useParams } from "react-router-dom";
import Sky from "@/assets/sky.jpg"
import MobileLogo from "@/assets/mobilelogo.png";
import {useState} from "react"
import { logout, selectUser} from "../../types/user/userSlice";
import { logoutUser } from "../../actions/userActions";
import { useDispatch,useSelector } from "react-redux";
import { AppDispatch } from "../../store";

export default function ProfileScreen() {
    // const {userId} = useParams();
    // const profiles = [1,2,3,4];
    // if (!profiles.includes(Number(userId))) {
    //     throw new Error("Profile not found");
    // }   
    const dispatch = useDispatch<AppDispatch>();
    const [isOpen, SetIsOpen] = useState(false)
    const [selectedItem, SetSelectedItem] = useState("info")
    const handleLogout= async()=>{
        const response = await logoutUser();
        dispatch(logout())
        console.log(response);
    }
    return (
        <div onMouseEnter={() => SetIsOpen (true)}>
            <aside id="default-sidebar" className={`fixed top-30 left-0 z-50 w-4/5 lg:mt-39 lg:ml-20 h-2/5 text-sm lg:w-1/6 transition-transform sm:translate-x-0 ${
                isOpen ? "translate-x-0" : "-translate-x-full" 
            }`}>
                <div className="h-full px-3 pt-10 overflow-y-auto bg-gray-100 dark:bg-gray-800 ">
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" 
                            onClick={() => { SetIsOpen(false);
                                             SetSelectedItem("info")
                            }}
                            data-key="info">
                            <span className="ms-3">🧑 Thông tin tài khoản</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            onClick={() => { SetIsOpen(false);
                                SetSelectedItem("follow")
                            }}
                            data-key="follow">
                            <span className="ms-3">👉️ Truyện theo dõi</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            onClick={() => { SetIsOpen(false);
                                SetSelectedItem("comment")
                            }}
                            data-key="comment">
                            <span className="ms-3">⌨️ Bình luận</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            onClick={() => { SetIsOpen(false);
                                SetSelectedItem("notify")
                            }}
                            data-key="notify">
                            <span className="ms-3">🔔 Thông báo</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            onClick={() => { SetIsOpen(false);
                                SetSelectedItem("change_pwd")
               }}
                            data-key="change_pwd">
                            <span className="ms-3">🔄 Đổi mật khẩu</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="space-y-2 pb-0">
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                             onClick={() => {
                                SetIsOpen(false);  
                                SetSelectedItem("logout"); 
                                handleLogout(); 
               }}
                            data-key="logout">
                            <span className="ms-3">↪️ Đăng xuất</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
            <div className="p-4 w-full text-sm lg:mt-10 lg:ml-85 lg:w-3/5 lg:text-lg">
                {selectedItem === "info" && (
                    <div className="w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Background bầu trời */}
                        <div
                            id="a"
                            className="h-32 bg-cover bg-center"
                            style={{ backgroundImage: `url(${Sky})` }}
                        ></div>

                        <div className="text-center pt-5 text-[10px] lg:text-sm">
                            <table className="w-full mx-auto border-separate border-spacing-2">
                                <tbody>
                                    <tr>
                                        <td className="bg-orange-500 text-white font-bold w-1/5 text-center p-3 rounded-lg">Họ và tên</td>
                                        <td className="bg-white text-black lg:text-sm text-[11px] text-left w-4/5 p-3 rounded-lg">Nguyễn Văn Capybara</td>
                                    </tr>
                                    <tr>
                                        <td className="bg-orange-500 text-white font-bold w-1/5 text-center p-3 rounded-lg">Tuổi</td>
                                        <td className="bg-white text-black lg:text-sm text-[11px] text-left w-4/5 p-3 rounded-lg">7</td>
                                    </tr>
                                    <tr>
                                        <td className="bg-orange-500 text-white font-bold w-1/5 text-center p-3 rounded-lg">Email</td>
                                        <td className="bg-white text-black lg:text-sm text-[11px] text-left w-4/5 p-3 rounded-lg">capybaranguyen@example.com</td>
                                    </tr>
                                    <tr>
                                        <td className="bg-orange-500 text-white font-bold w-1/5 text-center p-3 rounded-lg">Nghề nghiệp</td>
                                        <td className="bg-white text-black lg:text-sm text-[11px] text-left w-4/5 p-3 rounded-lg">Lập trình viên</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                  </div>
                )}
                {selectedItem === "follow" && (
                <div>📚 Danh sách truyện bạn đang theo dõi.</div>
                )}
                {selectedItem === "comment" && (
                <div>💬 Các bình luận bạn đã đăng.</div>
                )}
                {selectedItem === "notify" && (
                <div>🔔 Các thông báo mới nhất.</div>
                )}
                {selectedItem === "change_pwd" && (
                <div>🔑 Giao diện đổi mật khẩu.</div>
                )}
                {selectedItem === "logout" && (
                <div>🚪 Bạn đã đăng xuất khỏi hệ thống.</div>
                )}
            </div>

            

        </div>
    )
}