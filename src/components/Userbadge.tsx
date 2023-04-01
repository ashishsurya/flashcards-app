/* eslint-disable @next/next/no-img-element */
import { SignOutButton, useUser } from "@clerk/nextjs";
import { Menu } from "@headlessui/react";
import { Logout } from "@mui/icons-material";

const Userbadge = () => {
  const { user } = useUser();
  return (
    <Menu as="div" className={"absolute right-10 top-10 h-12"}>
      <Menu.Button
        className={
          "flex items-center  justify-between  rounded-lg py-2 md:gap-4 md:bg-[--bg-level-4] md:px-4"
        }
      >
        <p className="hidden font-light md:inline-flex">{user?.fullName}</p>
        <img
          src={user?.profileImageUrl}
          alt=""
          className="h-10 w-10 rounded-full"
        />
      </Menu.Button>
      <Menu.Items className={"absolute right-0 mt-2 w-56"}>
        <Menu.Item>
          <SignOutButton>
            <button className="w-full text-red-500 flex items-center justify-center space-x-3">
              <p>Sign out</p>
              <span>
                <Logout />
              </span>
            </button>
          </SignOutButton>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default Userbadge;
