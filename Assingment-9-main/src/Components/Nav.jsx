import React from "react";

function Nav() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="btn btn-active">Login</button>
              </li>
              <li>
                {" "}
                <button className="btn btn-active">Logout</button>{" "}
              </li>
            </ul>
          </div>
          <p className="text-teal-700 font-bold text-2xl">Luxury-Estate</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6">
            <li>Home</li>
            <li>UserProfile</li>
            <li>UpdateProfile</li>
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <button className="btn btn-active">Login</button>
          <button className="btn btn-active">Logout</button>
          <div className="avatar">
            <div className="w-14 mask mask-squircle">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
