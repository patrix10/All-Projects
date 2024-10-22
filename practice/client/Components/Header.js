import React from 'react'
import {AppBar,styled,InputBase,Box} from '@mui/material'
import {Menu as MenuIcon} from '@mui/icons-material';

const styledappBar = styled(AppBar)({
    background: 'green'
})
const searchwrapper = styled(Box)({
   background: 'red',
   marginLeft: 80,
   border: 8, //already in px
   height: 40,
   display: 'flex',
   '& > div': {   //handle child div from parent div
    width: '150%',
    padding: '0 5px'
   }
})

const Header = () => {
  return (
    <styledappBar>
        <MenuIcon/>
        <searchwrapper>
         <InputBase/>
        </searchwrapper>
    </styledappBar>
  )
}

export default Header