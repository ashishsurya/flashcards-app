import { Logout } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

const LogoutButton = () => {
  const supabase = useSupabaseClient();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    // TODO : handle error case
  };

  return (
    <Button
      onClick={async () => await handleLogout()}
      className='w-full  normal-case text-red-600 font-normal text-base'
      startIcon={<Logout className='rotate-180' />}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
