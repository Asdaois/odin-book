import './layout.css';

import React from 'react';

import { Logout } from '../authentication';
import { SearchBar } from '../search/SearchBar';
import { NameWithPicture } from '../user';

const Layout = ({ children }) => {
  return (
    <div>
      <div className="w-full flex flex-col justify-between sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow min-h-screen">
        {/* <!-- fixed-width --> */}
        <div className="w-fixed w-full flex-shrink flex-grow-0 px-4 max-h-screen hidden md:block">
          <div className="fixed h-[95%] min-w-[200px]">
            <div className="sticky top-0 p-4 w-full min-h-full bg-slate-200 rounded-xl flex flex-col gap-2">
              <NameWithPicture />
              <SearchBar />
              <Logout />
              {/* <!-- nav goes here --> */}
            </div>
          </div>
        </div>
        <main role="main" className="w-[600px] pt-1 px-16">
          {/* <!-- fluid-width: main content goes here --> */}
          {children}
        </main>
        <div className="w-fixed w-full lg:w-96 flex-shrink flex-grow-0 px-2 hidden lg:block">
          {/* <!-- fixed-width --> */}

          <div className="fixed h-[95%] min-w-[200px]">
            <div className="sticky top-0 p-4 w-full min-h-full bg-slate-200 rounded-xl">
              {/* <!-- notifications goes here --> */}
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-black mt-auto"></footer>
    </div>
  );
};

export default Layout;
