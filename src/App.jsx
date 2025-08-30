import NavBar from "./components/navbar";

const App = () => {
  return (
    <div>
      <header>
        <div className="bg-[url(./src/assets/images/slide-01.jpg)] bg-no-repeat  bg-cover bg-center w-full min-h-screen">
          <div className="container mx-auto py-6">
            <div className="flex justify-between items-center">
              {/* Logo Section Start*/}

              <div>
                <a href="#">
                  <img src="./src/assets/images/logo.png" alt="Mexant" />
                </a>
              </div>
              {/* Logo Section End*/}

              {/* Navbar Section Start */}

              <NavBar />
              {/* <div className="flex items-center">
                <nav>
                  <ul className="flex">
                    <li className="text-white hover:text-orange-500 transition-all duration-300 mx-6">
                      <a href="#">Home</a>
                    </li>
                    <li className="text-white hover:text-orange-500 transition-all duration-300 mx-6">
                      <a href="#">Services</a>
                    </li>
                    <li className="text-white hover:text-orange-500 transition-all duration-300 mx-6">
                      <a href="#">About</a>
                    </li>
                    <li className="relative group h-10 text-white hover:text-orange-500 transition-all duration-300 mx-6">
                      <a href="#">
                        Pages
                        <ul className="bg-white absolute left-0  -top-16 hidden w-40  text-black shadow-lg group-hover:block group-hover:top-10   rounded-md transition duration-300">
                          <li className="text-gray-800 border-b p-2 border-b-gray-200 hover:pl-4 hover:text-orange-500 transition-all duration-300 ">
                            <a href="#">About us</a>
                          </li>
                          <li className="text-gray-800 border-b p-2 border-b-gray-200 hover:pl-4 hover:text-orange-500 transition-all duration-300 ">
                            <a href="#">Our Services</a>
                          </li>
                          <li className="text-gray-800  p-2  hover:pl-4 hover:text-orange-500 transition-all duration-300 ">
                            <a href="#">Contact Us</a>
                          </li>
                        </ul>
                      </a>
                      <i className="fa-solid fa-angle-down ml-2"></i>
                    </li>
                    <li className="text-white hover:text-orange-500 transition-all duration-300 mx-6 mr-10">
                      <a href="#">Testimonials</a>
                    </li>
                  </ul>
                </nav>
                <button
                  type="button"
                  className="btn btn-success px-10 py-6 text-white shadow-none text-base"
                >
                  Contact Support
                </button>
              </div> */}
              {/* Navbar Section Start */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default App;
