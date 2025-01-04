import { Navigate, Outlet } from 'react-router-dom';
import SidebarLayout from './layouts/SidebarLayout';

const isAuthenticated = () => {
  return localStorage.getItem("token") !== null
}
const PrivateRoute =() => {
  return isAuthenticated() ? <SidebarLayout /> : <Navigate to="/login" replace />
}
export default PrivateRoute;