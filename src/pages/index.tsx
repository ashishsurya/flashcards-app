import { Modal } from "@mui/material";
import Head from "next/head";
import { useRecoilState, useSetRecoilState } from "recoil";
import { sideBarAtom } from "~/atoms/sideBarAtom";
import NavBar from "~/components/NavBar";
import Sidebar from "~/components/Sidebar";
import UserProfileInfo from "~/components/UserProfileInfo";

export default function Home() {
  const [sidebarState,setSidebarState] = useRecoilState(sideBarAtom);

  const handleSidebarClose = () => {
    setSidebarState({ open: false });
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row ">
      <Head>
        <title>Flashcards</title>
      </Head>
      <NavBar />
      <UserProfileInfo />
      <Modal open={sidebarState.open} onClose={handleSidebarClose}>
        <Sidebar />
      </Modal>
      <div className="flex-1 pt-[56px] md:pl-[185px]"></div>
    </div>
  );
}
