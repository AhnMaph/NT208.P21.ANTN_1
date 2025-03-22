import {Route, Routes} from 'react-router-dom'
import LoginScreen from '../screens/Auth/LoginScreen'
import ProfileScreen from '../screens/Auth/ProfileScreen'
import RegisterScreen from '../screens/Auth/RegisterScreen'
import Manga from '../screens/Manga/MangaPage'

export default function AuthRoutes()
{
    return (
        <Routes>
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/manga' element={<Manga />} />
        </Routes>
    )
}