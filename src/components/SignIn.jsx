import { Pressable, View, StyleSheet } from "react-native";
import { Formik } from 'formik'
import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";

const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.repositoryItemBackground,
      paddingBottom: 10
    },
  });

const initialValues = {
    username: '',
    password: ''
}

const SignInForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <FormikTextInput name='username' placeholder='Username'/>
            <FormikTextInput name='password' placeholder='Password'/>
            <Pressable onPress={onSubmit}>
                <Text button>Log in</Text>
            </Pressable>
        </View>
    )
}

const SignIn = () => {
    const onSubmit = (values) => {
        const username = values.username
        const password = values.password
        console.log(username, password)
    }
    
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    )
}

export default SignIn;