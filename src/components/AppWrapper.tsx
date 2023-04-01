/* eslint-disable @next/next/no-img-element */
import { DecksContainer } from "./DecksContainer";
import Userbadge from "./Userbadge";

const AppWrapper = () => {
  return (
    <div className="min-h-screen">
      <Userbadge />
      {/* <pre>{JSON.stringify({ name: user?.fullName }, null, 2)}</pre>
      <img src={user?.profileImageUrl} alt="" width={100} height={100} /> */}

      <DecksContainer />
    </div>
  );
};

export default AppWrapper;
