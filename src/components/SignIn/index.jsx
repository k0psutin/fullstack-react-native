import SignIn from "./SignIn"
import { useNavigate } from 'react-router-native'
import useSignIn from "../../hooks/useSignIn";

const SignInContainer = () => {
    const [signIn] = useSignIn()
    const navigate = useNavigate()

    return <SignIn signIn={signIn} navigate={navigate}/>
}

export default SignInContainer