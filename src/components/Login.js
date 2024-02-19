import { useRef, useState } from "react";
import { checkLoginData, checkSignUpData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.config";
import Header from "./Header";
import { addUser } from "../utils/store/userSlice";
import { useDispatch } from "react-redux";
import { BG_IMAGE } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const fullRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState(null);
  function changeFormType() {
    setIsSignUp(!isSignUp);
    setErrorMsg(null);
    // clear form
    if (emailRef?.current?.value) {
      emailRef.current.value = null;
    }
    if (passRef?.current?.value) {
      passRef.current.value = null;
    }
    if (fullRef?.current?.value) {
      fullRef.current.value = null;
    }
  }

  //using useRef to get instance of input boxes to get data from inputs (instead of state variables)

  function handleClickSubmit() {
    // remove existing error messages
    setErrorMsg(null);
    //ref.current have reference to input boxes --> input.value is that value
    const fullName = fullRef?.current?.value;
    const email = emailRef?.current?.value;
    const password = passRef?.current?.value;
    let errorMsg = null;
    //validate form
    if (isSignUp) {
      errorMsg = checkSignUpData(fullName, email, password);
    } else {
      errorMsg = checkLoginData(email, password);
    }
    setErrorMsg(errorMsg);
    if (errorMsg) return;
    // no message, login/signup
    if (isSignUp) {
      // create account logic
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          // Signed up
          //updateProfile with name
          updateProfile(auth.currentUser, {
            displayName: fullName,
            //photoURL: "",
          })
            .then(() => {
              const user = auth.currentUser;
              dispatch(
                addUser({
                  user_id: user.uid,
                  email: user.email,
                  display_name: user.displayName,
                  phone: user.phoneNumber,
                  photo: user.photoURL,
                })
              );
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.error("create user error", error);
              setErrorMsg(`${errorCode} - ` + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("create user error", error);
          setErrorMsg(`${errorCode} - ` + errorMessage);
        });
    } else {
      // login logic
      signInWithEmailAndPassword(auth, email, password).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("login user error", error);
        setErrorMsg(`${errorCode} - ` + errorMessage);
      });
    }
  }

  return (
    <div className="bg-black h-screen">
      <Header></Header>
      <div>
        <img className="absolute" src={BG_IMAGE} alt="bg-img"></img>

        <form
          className="p-12 absolute bg-black bg-opacity-85 z-10 my-44 mx-auto left-0 right-0 w-[30%] rounded"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1 className="text-3xl text-white mb-3">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h1>
          {isSignUp && (
            <input
              ref={fullRef}
              type="text"
              placeholder="Enter Full Name"
              className="w-full mb-3 outline-none bg-slate-500 p-2 rounded text-white"
            ></input>
          )}
          <input
            ref={emailRef}
            type="email"
            placeholder="Enter email or phone number"
            className="w-full mb-3 outline-none bg-slate-500 p-2 rounded text-white"
          ></input>
          <input
            ref={passRef}
            type="password"
            placeholder="Password"
            className="w-full mb-3 outline-none bg-slate-500 p-2 rounded text-white"
          ></input>
          {errorMsg && <p className="mb-2 text-xs text-red-700">{errorMsg}</p>}
          <button
            className="w-full text-white bg-red-600 rounded-sm p-2 mt-3"
            onClick={handleClickSubmit}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
          <div className="mt-1">
            <input
              type="checkbox"
              className="outline-none mr-1"
              name="remember-me"
            ></input>
            <label htmlFor="remember-me" className="text-gray-600">
              Remember me
            </label>
          </div>
          <div className="text-white text-xs mt-1">
            <p>
              {isSignUp ? "Already have Netflix GPT ?" : "New to Netflix GPT?"}
              <span
                className="ml-1 cursor-pointer text-blue-600 hover:underline"
                onClick={changeFormType}
              >
                {isSignUp ? "Sign in now" : "Sign up now"}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
