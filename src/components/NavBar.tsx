import { Menu } from '@headlessui/react';
import { Logout, NotesSharp } from '@mui/icons-material';
import { Avatar, Button, IconButton, Paper, Typography } from '@mui/material';
import { useSetRecoilState } from 'recoil';
import { sidebarAtom } from '~/atoms/sidebarAtom';
import LogoutButton from './LogoutButton';

export default function NavBar() {
  const setSidebarState = useSetRecoilState(sidebarAtom);

  const handleOpenSidebarOpen = () => {
    setSidebarState({ open: true });
  };

  return (
    <div className='flex fixed left-0 md:top-0 flex-row md:flex-col md:h-screen h-[56px]  w-full md:w-[185px] border-black items-center py-4  px-4 md:px-0'>
      <IconButton
        title='Toggle Menu'
        aria-label='open-sidebar-menu'
        onClick={handleOpenSidebarOpen}
      >
        <NotesSharp className='text-4xl md:text-5xl' />
      </IconButton>
      <div className='flex-1 md:w-[50px]  md:h-[370px] flex items-center justify-center'>
        <Typography
          variant='h3'
          className=' text-center tracking-wider md:-rotate-90  '
        >
          Flashcards
        </Typography>
      </div>
      <Menu>
        <Menu.Button>
          <Avatar
            className='cursor-pointer md:hidden'
            src='https://pbs.twimg.com/profile_images/1506852720648486914/8GDg7Fxh_400x400.jpg'
          />
          <Menu.Items className='absolute right-0  mt-[20px] shadow-lg'>
            <Menu.Item as={'div'} className='focus:border-none'>
              <Paper className='w-[300px] flex flex-col items-center py-2'>
                <LogoutButton />
              </Paper>
            </Menu.Item>
          </Menu.Items>
        </Menu.Button>
      </Menu>
    </div>
  );
}
