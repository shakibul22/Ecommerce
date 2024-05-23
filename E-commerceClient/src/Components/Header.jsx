const Header = () => {
  return (
    <div className="top-0 py-1 lg:py-2 w-full bg-transparent lg:relative z-50 ">
      <nav className="z-10 sticky top-0 left-0 right-0 w-full  xl:container mx-auto  py-2.5 lg:border-none lg:py-4">
        <div className="flex items-center justify-between">
          <button>
            <div className="flex items-center space-x-2">
              <a href="/" className=" font-bold text-2xl">
                GREENMIND
              </a>
            </div>
          </button>
          <div className="hidden lg:block">
            <ul className="flex space-x-10 text-base font-bold ">
              <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                <a href="/">Home</a>
              </li>
              <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                <a href="/products">Products</a>
              </li>

              <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex lg:items-center gap-x-2">
            <a
              href="/signup"
              className="flex items-center  justify-center px-6 py-2.5 font-semibold"
            >
              Sign up
            </a>
            <a
              href="/signin"
              className="flex items-center justify-center rounded-md bg-[#4A3BFF] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
            >
              Login
            </a>
          </div>
          <div className="flex items-center justify-center lg:hidden">
            <button className="focus:outline-none ">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="text-2xl text-slate-800 dark:text-white focus:outline-none active:scale-110 active:text-red-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
