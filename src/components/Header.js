import { useSelector } from "react-redux";
import { auth } from "../utils/firebase.config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/store/userSlice";
import { useDispatch } from "react-redux";
import { APP_LOGO } from "../utils/constants";
const Header = () => {
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
  useEffect(() => {
    //https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#returns-firebase.unsubscribe
    const unsubsribe = onAuthStateChanged(auth, (user) => {
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
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubsribe();
    };
  }, []);
  return (
    <div className="absolute w-full bg-gradient-to-b from-black to-transparent z-10 flex justify-between items-center top-0">
      <div className="w-48">
        <img src={APP_LOGO} alt="logo"></img>
      </div>
      {user && (
        <div className="flex items-center relative mr-4">
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
              className="hover:bg-red-600 cursor-pointer"
              onClick={() => {
                setShowDropDownMenu(!showDropDownMenu);
              }}
            >
              <svg
                className="w-2.5 h-[2.75rem] mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
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
      )}
    </div>
  );
};
export default Header;
