/* eslint-disable @typescript-eslint/no-misused-promises */
import { signIn } from "next-auth/react";
import React from "react";

const LoginPage = () => {


  const handleLogin = async() => {
    await signIn("github" ,{redirect:true,callbackUrl:"/"})
  } 


  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl pb-4">Login Page</h1>
      <button onClick={handleLogin} className="">Sign in with Github</button>
    </div>
  );
};

export default LoginPage;
