import React from "react";


const Header = () => {
  return (
    <div>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-blue">
          <a
            href="/"
            class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span class="ml-3 text-3xl underline">
              Schedule Your Interviews
            </span>
          </a>
          <nav class="md:ml-auto mr-10 flex flex-wrap items-center text-base justify-center">
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-1 rounded">
            <a href="/" class="text-xl mr-5 hover:text-gray-900">
              Create
            </a>
              </button>
                 <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
            <a
              href="/update-interview"
              class="text-xl mr-5 hover:text-gray-900"
            >
              Update
            </a></button>

                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
            <a href="/view-interview" class="text-xl mr-5 hover:text-gray-900">
              View
            </a>
            </button>
          </nav>
        </div>
      </header>{" "}
    </div>
  );
};
export default Header;
