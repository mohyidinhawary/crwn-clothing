import { signInWithGooglePopup,createUserProfileDocument } from "../../utilist/firebase/firebase.utilis"
const SignIn=()=>{
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        createUserProfileDocument(response);
      };
    return(
        
             <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
        
    )
}
export default SignIn