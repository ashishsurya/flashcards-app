import { Menu } from '@headlessui/react';
import { Logout, More, MoreVert } from '@mui/icons-material';
import { Avatar, Button, Paper, Typography } from '@mui/material';
import LogoutButton from './LogoutButton';
import { useUser } from '@supabase/auth-helpers-react';

const UserProfileInfo = () => {
  const user = useUser();

  // const { name, avatat_url } = user?.user_metadata!;

  return (
    <Menu>
      <Paper className='hidden cursor-pointer select-none fixed   top-[40px] right-[40px] rounded-2xl md:inline-flex'>
        <Menu.Button as='div' className='flex items-center space-x-4 px-4 py-2'>
          <Typography variant='body1'>{user?.user_metadata.name}</Typography>
          <Avatar src={user?.user_metadata.avatar_url} />
          <MoreVert />
        </Menu.Button>
        <Menu.Items className='absolute right-0 mt-[60px] shadow-lg'>
          <Menu.Item as={'div'} className=''>
            <Paper className='w-[300px] flex flex-col items-center py-2'>
              <LogoutButton />
            </Paper>
          </Menu.Item>
        </Menu.Items>
      </Paper>
    </Menu>
  );
};

export default UserProfileInfo;
