# Netflix GPT
-  Created using create react app
-  Tailwind CSS for designs
-  React router dom for routing
-  Login/Sign Up Form
      -  form validation - can use formik
      -  useRef
   - To get form data of input fields : 1. can use state variables, 2. use reference to the input boxes:
      ``` const email = useRef(); <input ref={email} ....>; const email = email?.current?.value; ```
- Firebase as backend for authentication & hosting: 
  - webproject
      - create firebase config and install firebase ``` npm i firebase ```
      - allows hosting as well
  - Enable authentication; 
    - multiple methods of authentication using firebase: email/password, google login, facebook
  - To deploy to firebase:
    - ``` npm i -g firebase-tools ```
    - ``` firebase login ```
    - ``` firebase init ``` --> choose hosting options and build directory (dist in parcel, build in cra)
    - ``` firebase deploy``` --> hit after build (``` npm run build ```)
- Hosted URL: https://netflix-gpt-80c4b.web.app
- SignIn (create account) and LogIn with email/password using Firebase Auth
- Redux for central store
  - userSlice for login user
  
- onAuthStateChange --> common Firebase method (event listener) called whenever user logsin / out, signs in or out -> can be done once on App root
- useNavigate() from react router dom: used to redirect programmatically, (or we can use window.location.href (bad))
  - ``` const navigate = useNavigate(); navigate('/browse')```
- Bug Fix : Moved all the navigate logic to a component which is always there and under router provider, i.e. in React => solving bug of login/logged user
- Unsubsribed to onAuthStateChanged in useEffect

- TMDB APIs for movies data
  - Now playing movies API
  - 
# Features
- Homepage 
   - Toolbar with login/signup
   - Jumbocard/header
   - Body
   - Faq
   - Footer
 
- Login/Signup 
  - (Only on un-authenticated devices) form
  - when logged in redirect to browse page

- Browser Page
   - Main header
   - Main movie
    - Trailer in background
    - Title & desc
    - Movies Suggestions
      - Movies Lists * N num of genres/categories

- Netflix GPT -- accessible via header seach icon
   - Search Bar
   - Movie suggestions