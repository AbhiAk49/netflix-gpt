import { useSelector } from "react-redux";
import { auth } from "../utils/firebase.config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/store/userSlice";
import { useDispatch } from "react-redux";
import { APP_LOGO, APP_LOGO_MINI } from "../utils/constants";
import { useLocation } from "react-router-dom";
const Header = () => {
  const loc = useLocation();
  const existingPath = loc.pathname;
  const navigate = useNavigate();
  const signOutUser = () => {
    signOut(auth).catch((error) => {
      console.error("sign out error", error);
      //navigate to error page
    });
  };
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [showDropDownMenu, setShowDropDownMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const authChangeHandler = (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      dispatch(
        addUser({
          user_id: user.uid,
          email: user.email,
          display_name: user.displayName,
          phone: user.phoneNumber,
          photo: user.photoURL,
        })
      );
      navigate(existingPath === "/" ? "/browse" : existingPath);
    } else {
      dispatch(removeUser());
      navigate("/");
    }
  };

  useEffect(() => {
    //https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#returns-firebase.unsubscribe
    const unsubsribe = onAuthStateChanged(auth, authChangeHandler);
    return () => {
      unsubsribe();
    };
  }, []);

  const onSearchClick = () => {
    navigate("/browse/search");
  };

  const logoClickHandle = () => {
    if (user) {
      navigate("/browse");
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <div
        className={`fixed z-50 md:absolute w-full bg-gradient-to-b from-black to-transparent flex justify-between items-center top-0
          ${showMobileMenu ? "bg-gray-800 bg-opacity-95" : ""}`}
      >
        <div className="w-48 cursor-pointer" onClick={logoClickHandle}>
          <img src={APP_LOGO} alt="logo" className="hidden md:inline"></img>
          <img
            src={APP_LOGO_MINI}
            alt="logo"
            className="m-2 my-4 inline md:hidden"
          ></img>
        </div>
        {user && (
          <>
            <div className="hidden items-center relative mr-4 gap-3 md:flex">
              <div>
                <div
                  className="opacity-80 cursor-pointer"
                  onClick={onSearchClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </div>
              </div>
              <div
                className="flex items-center bg-[#ff000c] rounded p-1"
                onMouseEnter={() => {
                  setShowDropDownMenu(true);
                }}
                onMouseLeave={() => {
                  setShowDropDownMenu(false);
                }}
              >
                <img
                  className="w-11 h-11"
                  src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
                  alt="user-img"
                ></img>
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    setShowDropDownMenu(!showDropDownMenu);
                  }}
                >
                  {showDropDownMenu ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </span>
              </div>

              {/* <!-- Dropdown menu --> */}
              {showDropDownMenu && (
                <div
                  id="dropdownHover"
                  className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-[3.25rem] right-[1rem] opacity-80"
                  onMouseEnter={() => setShowDropDownMenu(true)}
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownHoverButton"
                  >
                    <li>
                      <p
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full overflow-x-hidden max-w-[175px] whitespace-nowrap text-ellipsis"
                        title={user?.display_name || user?.email}
                      >
                        Hey, {user?.display_name || user?.email}
                      </p>
                    </li>
                    <li>
                      <button
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full"
                        onClick={signOutUser}
                      >
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {/* Mobile header menu */}
            <div className="md:hidden m-2">
              <div
                className="cursor-pointer group flex flex-col justify-center items-center"
                onClick={() => {
                  setShowMobileMenu(!showMobileMenu);
                }}
              >
                <span
                  className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      showMobileMenu
                        ? "rotate-45 translate-y-1"
                        : "-translate-y-0.5"
                    }`}
                ></span>
                <span
                  className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      showMobileMenu ? "opacity-0" : "opacity-100"
                    }`}
                ></span>
                <span
                  className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      showMobileMenu
                        ? "-rotate-45 -translate-y-1"
                        : "translate-y-0.5"
                    }`}
                ></span>
              </div>
            </div>
          </>
        )}
      </div>
      {user && (
        <div
          className={
            showMobileMenu
              ? "transition-all flex flex-col justify-center items-center fixed top-[80px] left-0 bg-gray-800 bg-opacity-95 w-full h-[calc(100vh-80px)] md:hidden z-50"
              : "hidden"
          }
        >
          <div className="my-4 text-white">
            <div
              className="opacity-80 cursor-pointer flex justify-between items-center gap-2 bg-red-500 bg-opacity-90 p-4 rounded-md"
              onClick={onSearchClick}
            >
              <span>Explore</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </div>
          <div className="my-4">
            <button
              className="text-gray-300 flex justify-between items-center gap-2 bg-slate-800 bg-opacity-70 p-4 rounded-md"
              onClick={signOutUser}
            >
              <span>Sign out</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6Zm-5.03 4.72a.75.75 0 0 0 0 1.06l1.72 1.72H2.25a.75.75 0 0 0 0 1.5h10.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default Header;
