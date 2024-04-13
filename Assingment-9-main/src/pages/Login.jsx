import React from "react";

function Login() {
    const handlesubmit=(e)=>{
      e.preventDefault();
     console.log(e.target.password.value)
    }
  return (
    <>
      <div className="w-full flex justify-center">
        <form className="w-96" onSubmit={(e)=>{handlesubmit(e)}}>
          <p>username:</p>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" name="username" className="grow" placeholder="Username" />
          </label>
          <p>password</p>         
           <input type="password" name="password" className="flex items-center gap-2" placeholder="password" />
         
          <div>
            <button className="btn">
              <input type="submit" value="Login" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
