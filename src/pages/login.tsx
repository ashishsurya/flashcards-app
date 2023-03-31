import { GitHub, Google } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { toast } from 'react-toastify';

export default function LoginPage() {
  const supabase = useSupabaseClient();

  const handleGithubLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    });
    if (error) {
      toast(error.message, { theme: 'dark', autoClose: 3000 });
    } 
  };

  // const handleGoogleLogin = async () => {
  //   const { data, error } = await supabase.auth.signInWithOAuth({
  //     provider: 'google',
  //   });
  //   console.log(error);
  //   if (error) {
  //     toast(error.message, { theme: 'dark', autoClose: 3000 });
  //   }
  // };

  return (
    <div className='flex items-center flex-col justify-center min-h-screen space-y-6'>
      <Typography variant='h4' className='text-center'>
        Login, to get better grades
      </Typography>
      <Button
        onClick={handleGithubLogin}
        startIcon={<GitHub />}
        className='normal-case flex px-8 tracking-wide text-base bg-[#0E1117] hover:bg-[#0E1117] text-white'
      >
        Sign in with Github
      </Button>
      {/* <Button
        onClick={handleGoogleLogin}
        startIcon={<Google />}
        className='normal-case flex px-8 disabled:text-white disabled:bg-gray-400 tracking-wide text-base bg-[#0E1117] hover:bg-[#0E1117] text-white '
      >
        Sign in with Google
      </Button> */}
    </div>
  );
}
