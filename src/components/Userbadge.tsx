/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @next/next/no-img-element */
import { Menu } from "@headlessui/react";
import { Logout } from "@mui/icons-material";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import LoadingSpinner from "./LoadingSpinner";

const Userbadge = () => {
  const { data: session } = useSession();
  console.log(session);

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <Menu as="div" className={"absolute right-10 top-10 h-12 "}>
      {!session || !session.user ? (
        <LoadingSpinner />
      ) : (
        <>
          <Menu.Button
            className={
              "flex items-center  justify-between  rounded-lg py-2 md:gap-4 md:bg-[--bg-level-4] md:px-4"
            }
          >
            <p className="hidden font-light text-white md:inline-flex">
              {session.user?.name}
            </p>
            <Image
              src={session.user?.image || ""}
              alt=""
              className="h-10 w-10 rounded-full"
              width={40}
              height={40}
            />
          </Menu.Button>
        </>
      )}
      <Menu.Items className={"absolute right-0 mt-1 w-56"}>
        <Menu.Item>
          <button
            onClick={handleLogout}
            className="flex w-full items-center justify-center space-x-3 bg-red-500 text-white"
          >
            <p>Sign out</p>
            <span>
              <Logout />
            </span>
          </button>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default Userbadge;
