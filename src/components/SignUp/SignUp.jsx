import { View, StyleSheet } from "react-native";

import { Formik } from 'formik'
import * as yup from 'yup'
import FormikTextInput from "../Shared/FormikTextInput";
import theme from "../../theme";
import Button from "../Shared/Button";


const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.repositoryItemBackground,
    },
  });

const initialValues = {
    username: '',
    password: ''
}

const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(1, 'Username is required')
      .required('Username is required'),
    password: yup
      .string()
      .min(5, 'Password length should be between 5 and 50')
      .max(51, 'Password length should be between 5 and 50')
      .required('Password is required'),
      passwordConfirmation: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .required('Password confirmation is required')
})

const SignUpForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <FormikTextInput name='username' placeholder='Username'/>
            <FormikTextInput name='password' placeholder='Password'/>
            <FormikTextInput name='passwordConfirmation' placeholder='Password confirmation'/>
            <Button text='Sign up' onPress={onSubmit} />
        </View>
    )
}

const SignUp = ({ onSubmit }) => {
    return (
        <Formik 
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={onSubmit}>
            {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
        </Formik>
    )
}

export default SignUp;