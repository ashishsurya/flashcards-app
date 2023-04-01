import { SignInButton, useUser } from "@clerk/nextjs";
import AppWrapper from "~/components/AppWrapper";
import LoadingSpinner from "~/components/LoadingSpinner";

const Home = () => {
  const {  isLoaded, isSignedIn } = useUser();

  if (!isLoaded)
    return (
      <div className="flex h-screen items-center justify-center">
        <LoadingSpinner size={40} />
      </div>
    );

  if (!isSignedIn)
    return (
      <div className="flex h-screen items-center justify-center">
        <SignInButton />
      </div>
    );

  return <AppWrapper />;
};

export default Home;
