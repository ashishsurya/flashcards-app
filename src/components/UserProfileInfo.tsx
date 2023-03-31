import { Menu } from "@headlessui/react";
import { Logout, More, MoreVert } from "@mui/icons-material";
import { Avatar, Button, Paper, Typography } from "@mui/material";
import LogoutButton from "./LogoutButton";

const UserProfileInfo = () => {
  // const { name, avatat_url } = user?.user_metadata!;

  return (
    <Menu>
      <Paper className="fixed right-[40px] top-[40px] hidden   cursor-pointer select-none rounded-2xl md:inline-flex">
        <Menu.Button as="div" className="flex items-center space-x-4 px-4 py-2">
          <Typography variant="body1">Surya Ashish</Typography>
          <Avatar>SA</Avatar>
          <MoreVert />
        </Menu.Button>
        <Menu.Items className="absolute right-0 mt-[60px] shadow-lg">
          <Menu.Item as={"div"} className="">
            <Paper className="flex w-[300px] flex-col items-center py-2">
              <LogoutButton />
            </Paper>
          </Menu.Item>
        </Menu.Items>
      </Paper>
    </Menu>
  );
};

export default UserProfileInfo;
