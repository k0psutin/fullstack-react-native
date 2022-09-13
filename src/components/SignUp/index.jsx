import SignUp from "./SignUp"
import { useNavigate } from 'react-router-native'
import useSignUp from "../../hooks/useSignUp"
import useSignIn from "../../hooks/useSignIn"

const SignUpContainer = () => {
    const [signUp] = useSignUp()
    const [signIn] = useSignIn()
    const navigate = useNavigate()

    const onSubmit = async (values) => {
        const { username, password } = values

        try {
          await signUp({ username, password })
          await signIn({ username, password })
          navigate('/', { replace: true })
        } catch (e) {
            console.log(e)
        }
    }

    return <SignUp onSubmit={onSubmit} />
}

export default SignUpContainer