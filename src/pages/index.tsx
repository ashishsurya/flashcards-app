import { Modal, Paper } from '@mui/material';
import {
  createBrowserSupabaseClient,
  createServerSupabaseClient,
} from '@supabase/auth-helpers-nextjs';
import { useUser } from '@supabase/auth-helpers-react';
import { GetServerSidePropsContext, NextPageContext } from 'next';
import Head from 'next/head';
import { useRecoilState } from 'recoil';
import { sidebarAtom } from '~/atoms/sidebarAtom';
import NavBar from '~/components/NavBar';
import Sidebar from '~/components/Sidebar';
import UserProfileInfo from '~/components/UserProfileInfo';
import { IDeck } from '~/typings';

export default function Home({
  decksWithFlashcards,
}: {
  decksWithFlashcards: IDeck[];
}) {
  console.log(decksWithFlashcards[0].title);
  const [sidebarState, setSidebarState] = useRecoilState(sidebarAtom);

  const handleSidebarClose = () => {
    setSidebarState({ open: false });
  };

  const user = useUser();

  return (
    <div className='min-h-screen flex flex-col md:flex-row '>
      <Head>
        <title>Flashcards</title>
      </Head>
      <NavBar />
      <UserProfileInfo />
      <Modal open={sidebarState.open} onClose={handleSidebarClose}>
        <Sidebar />
      </Modal>
      <div className='flex-1 pt-[56px] md:pl-[185px]'>
        <Paper className='w-fit p-4'>
          <pre>Decks : {JSON.stringify(decksWithFlashcards, null, 2)}</pre>
        </Paper>
        <pre>Current User : {JSON.stringify(user, null, 2)}</pre>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const supabase = createServerSupabaseClient(ctx);

  const { data } = await supabase.from('decks').select('* , flashcards(*)');
  console.log(data);

  return {
    props: {
      decksWithFlashcards: data,
    },
  };
}
