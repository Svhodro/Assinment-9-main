import React from "react";

function Register() {
  return (
    <div className="flex justify-center ">
      <div className="from w-80 m-7 flex flex-col gap-5 justify-center items-center">     
  
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="User-Name" />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Email Address" />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />
        <input type="file" className="file-input file-input-bordered file-input-sm w-full max-w-xs" />
        <button className="btn w-40 ">Register</button>
        <button className="btn btn-link">Login</button>
      </div>
    </div>
  );
}

export default Register;
