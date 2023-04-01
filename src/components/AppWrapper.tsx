/* eslint-disable @next/next/no-img-element */
import Userbadge from "./Userbadge";

const AppWrapper = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Userbadge />
      {/* <pre>{JSON.stringify({ name: user?.fullName }, null, 2)}</pre>
      <img src={user?.profileImageUrl} alt="" width={100} height={100} /> */}

      
    </div>
  );
};

export default AppWrapper;
