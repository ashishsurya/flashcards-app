import { SignInButton, useUser } from "@clerk/nextjs";
import AppWrapper from "~/components/AppWrapper";
import { LoadingPage } from "~/components/LoadingSpinner";

const Home = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return <LoadingPage />;

  if (!isSignedIn)
    return (
      <div className="flex h-screen items-center justify-center">
        <SignInButton />
      </div>
    );

  return <AppWrapper />;
};

export default Home;
