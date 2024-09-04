import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Avatar}  from '@mui/material'
import Login from '../Login';
import './Header.css'
import { openModal } from '../../actions/modalAction';
import { useDispatch,useSelector} from 'react-redux';
const Header = () => {
  const dispatch = useDispatch()
  const userLogin =useSelector(state=>state.userLogin)
  const {userInfo} = userLogin
  const openModalHandle=()=>{
    dispatch(openModal("open", <Login />))
  }
  return (
    <div className='header'>
      <img className='header_logo' src='https://seeklogo.com/images/A/airbnb-logo-3023AC4CBA-seeklogo.com.png' alt='logo'/>
     <div className='header_center'>
        <input type='text'/>
         <SearchIcon/>
        </div>
        <div className='header_right'>
            <p>Become a host</p>
        
         <LanguageIcon/>
         <div className='dropdown'>
         <ExpandMoreIcon className='dropbtn'/>
         <div className='dropdown-content'>
          {userInfo?(
          <>
          <span>account</span>
          <span>Log out</span>
          </>

          ):(
          <>
          <span>Sign up</span>
          <span onClick={openModalHandle}>log in</span>
          </>
         )}
         </div>
         </div>
        
         <span onClick={openModalHandle}>Log in</span>
         <Avatar/>
        </div>
    </div>

  )
}

export default Header