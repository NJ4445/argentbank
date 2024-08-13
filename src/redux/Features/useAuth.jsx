// useAuth.jsx
import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail, logout } from '../Features/authSlice';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = useSelector(selectUserEmail);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return { userEmail, handleLogout };
};
