import { Menu } from "@headlessui/react";
import { NotesSharp } from "@mui/icons-material";
import { Avatar, IconButton, Paper, Typography } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { sideBarAtom } from "~/atoms/sideBarAtom";
import LogoutButton from "./LogoutButton";

export default function NavBar() {
  const setSidebarState = useSetRecoilState(sideBarAtom);

  const handleOpenSidebarOpen = () => {
    setSidebarState({ open: true });
  };

  return (
    <div className="fixed left-0 flex h-[56px] w-full flex-row items-center border-black  px-4 py-4 md:top-0 md:h-screen md:w-[185px]  md:flex-col md:px-0">
      <IconButton
        title="Toggle Menu"
        aria-label="open-sidebar-menu"
        onClick={handleOpenSidebarOpen}
      >
        <NotesSharp className="text-4xl md:text-5xl" />
      </IconButton>
      <div className="flex flex-1  items-center justify-center md:h-[370px] md:w-[50px]">
        <Typography
          variant="h3"
          className=" text-center tracking-wider md:-rotate-90  "
        >
          Flashcards
        </Typography>
      </div>
      <Menu>
        <Menu.Button>
          <Avatar className="cursor-pointer md:hidden">SA</Avatar>
          <Menu.Items className="absolute right-0  mt-[20px] shadow-lg">
            <Menu.Item as={"div"} className="focus:border-none">
              <Paper className="flex w-[300px] flex-col items-center py-2">
                <LogoutButton />
              </Paper>
            </Menu.Item>
          </Menu.Items>
        </Menu.Button>
      </Menu>
    </div>
  );
}
