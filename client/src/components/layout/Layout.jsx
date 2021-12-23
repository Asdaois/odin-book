import React from "react";
import { Logout } from "../authentication";
import { NameWithPicture } from "../user";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow min-h-screen">
        {/* <!-- fixed-width --> */}
        <div className="w-fixed w-full flex-shrink flex-grow-0 px-4">
          <div className="sticky top-0 p-4 w-full min-h-full bg-slate-200 rounded-xl">
            <NameWithPicture />
            <Logout />
            {/* <!-- nav goes here --> */}
          </div>
        </div>
        <main role="main" className="w-full flex-grow pt-1 px-16">
          {/* <!-- fluid-width: main content goes here --> */}
          {children}
        </main>
        <div className="w-fixed w-full flex-shrink flex-grow-0 px-2">
          {/* <!-- fixed-width --> */}
          <div className="flex sm:flex-col px-2">
            {/* <!-- sidebar goes here --> */}
          </div>
        </div>
      </div>
      <footer className="bg-black mt-auto"></footer>
    </div>
  );
};

export default Layout;
