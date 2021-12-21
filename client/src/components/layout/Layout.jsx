import React from "react";
import { Logout } from "../authentication";
import DisplayName from "../user";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div>
      <div class="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow min-h-screen">
        {/* <!-- fixed-width --> */}
        <div class="w-fixed w-full flex-shrink flex-grow-0 px-4">
          <div class="sticky top-0 p-4 w-full min-h-full bg-slate-200 rounded-xl">
            <DisplayName />
            <Logout />
            {/* <!-- nav goes here --> */}
          </div>
        </div>
        <main role="main" class="w-full flex-grow pt-1 px-3">
          {/* <!-- fluid-width: main content goes here --> */}
          {children}
        </main>
        <div class="w-fixed w-full flex-shrink flex-grow-0 px-2">
          {/* <!-- fixed-width --> */}
          <div class="flex sm:flex-col px-2">
            {/* <!-- sidebar goes here --> */}
          </div>
        </div>
      </div>
      <footer class="bg-black mt-auto"></footer>
    </div>
  );
};

export default Layout;
