/* eslint-disable react/display-name */
import { Close } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { sidebarAtom } from '~/atoms/sidebarAtom';

const Sidebar = React.forwardRef((_, ref) => {
  const setSidebarState = useSetRecoilState(sidebarAtom);
  const handleSidebarClose = () => {
    setSidebarState({ open: false });
  };
  return (
    <div className='h-screen w-full sm:w-[400px] absolute left-0 top-0 bottom-0  bg-white  md:py-4'>
      <IconButton
        aria-label='close-sidebar-menu'
        onClick={handleSidebarClose}
        className='absolute left-[20px] md:left-[50px]'
      >
        <Close className='text-4xl md:text-5xl' />
      </IconButton>

      <div className={`flex flex-col items-center mt-[100px] px-8 space-y-8 `}>
        <Typography className='font-mono' variant='h4'>
          Settings
        </Typography>
        <Typography className='font-mono hover:text-sky-500' variant='h4'>
          <a href='https://github.com/ashishsurya/flashcards-app'>About Us</a>
        </Typography>
        <Typography className='font-mono' variant='h4'>
          Follow on
        </Typography>
      </div>
    </div>
  );
});

export default Sidebar;
