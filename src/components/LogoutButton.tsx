import { Logout } from "@mui/icons-material";
import { Button } from "@mui/material";

const LogoutButton = () => {
  // TODO : to be implented
  const handleLogout = () => "logout";

  return (
    <Button
      onClick={handleLogout}
      className="w-full  text-base font-normal normal-case text-red-600"
      startIcon={<Logout className="rotate-180" />}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
