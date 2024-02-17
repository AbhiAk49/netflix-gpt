import { useRef, useState } from "react";
import Header from "./Header";
import { checkLoginData, checkSignUpData } from "../utils/validate";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const fullRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState(null);
  function changeFormType() {
    setIsSignUp(!isSignUp);
    setErrorMsg(null);
  }

  //using useRef to get instance of input boxes to get data from inputs (instead of state variables)

  function handleClickSubmit() {
    // remove existing error messages
    setErrorMsg(null);
    //ref.current have reference to input boxes --> input.value is that value
    const fullName = fullRef?.current?.value;
    const email = emailRef?.current?.value;
    const password = passRef?.current?.value;
    //validate form
    if (isSignUp) {
      setErrorMsg(checkSignUpData(fullName, email, password));
    } else {
      setErrorMsg(checkLoginData(email, password));
    }
  }

  return (
    <div className="bg-black h-screen">
      <Header></Header>
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        ></img>

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
