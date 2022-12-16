import React from "react";

export default function navbar() {
  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 bg-green-300">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="data:image/png;base64,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"
              className="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              SAI KRUPA
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  ABOUT
                </a>
              </li>
              <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">PRODUCTS <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
            {/* <!-- Dropdown menu --> */}
            <div id="dropdownNavbar" className="z-40 hidden font-normal bg-white divide-y divide-gray-100 rounded shadow w-54 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-400 z-40" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Cotton Product</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Organic Soya Products</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Organic Grain Products</a>
                  </li>
                </ul>
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Organic Spices Products</a>
                </div>
            </div>
        </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  STRATEGY
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  CAREERS
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
