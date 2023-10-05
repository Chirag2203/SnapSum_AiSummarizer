import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Loginbtn = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="Wavebtn ">
  <button className="text-md font-satoshi mt-1" onClick={() => loginWithRedirect()}>Log In</button>
  </div>
  )
};

export default Loginbtn;