import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { login } from '../types/user/userSlice';

const baseURL = 'http://localhost:8000'
    
export const registerUser = async (name: string, email: string, password: string) => {
    try {
        const config = {
            headers: { 'Content-Type': 'Application/json' },
            withCredentials:true,
        }
        const response = await axios.post(
            `${baseURL}/api/register/`, 
            {name, email, password },
            config
        );

        console.log(response.data); // Debug kết quả
        return response.data;
    } catch (error) {
        console.error("Lỗi đăng ký:", error);
            throw error;
    }
};

export const loginUser = async (email: string, password: string) => {
    try {
        const config = {
            headers: { 'Content-Type': 'Application/json' },
            withCredentials:true,
        }
        const response = await axios.post(`${baseURL}/api/login/`, 
            {email, password}, 
            config
        );
        return response.data
        console.log(response); // Debug kết quả
    } catch (error) {
        console.error("Lỗi đăng nhập:", error);
    }
};

export const logoutUser = async () => {
    const config = {
        headers: { 'Content-Type': 'Application/json' },
        withCredentials:true,
    }
    const response = await axios.post(
        `${baseURL}/api/logout/`,
        {}, 
        config
    );
    console.log(response); // Debug kết quả
};


export const fetchProfile = async () => {
    try {
        const config = {
            headers: { 'Content-Type': 'Application/json' },
            withCredentials:true,
        }
        const response = await axios.post(
            `${baseURL}/api/profile/`,
            {},  
            config
        );
        console.log(response.data); // Debug kết quả
        return response.data;
        
    } catch (error) {
        console.error("Cần đăng nhập/đăng ký:", error);
        throw error;
    }
};

const useAutoLogin = () => {
    const dispatch = useDispatch();
    console.log("AutoLogin chạy!");
    console.log(`${baseURL}/api/refresh/`);
    useEffect(() => {
        const refreshToken = async () => {
            const config = {
                headers: { 'Content-Type': 'Application/json' },
                withCredentials:true,
            }
            try {
                await axios.post(
                    `${baseURL}/api/refresh/`,
                    {}, 
                    config);
                dispatch(login({Islogin:true}));
            } catch (error) {
                console.log("Không thể refresh token", error);
            }
        };

        refreshToken();
    }, [dispatch]);
};

export default useAutoLogin;