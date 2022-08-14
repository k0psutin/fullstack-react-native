import { View, StyleSheet } from "react-native";

import { Formik } from 'formik'
import * as yup from 'yup'
import FormikTextInput from "../Shared/FormikTextInput";
import theme from "../../theme";
import Button from "../Shared/Button";
import Text from "../Shared/Text";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.repositoryItemBackground,
  },
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '0',
  text: ''
}

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owner name is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number()
    .typeError('Rating value should be between 0 and 100')
    .positive()
    .integer()
    .min(0, 'Rating value should be between 0 and 100')
    .max(100, 'Rating value should be between 0 and 100')
    .required('Rating is required'),
  text: yup
    .string()
    .nullable()
})

const ReviewForm = ({ onSubmit, error }) =>
  <>
  <View style={styles.container}>
    <FormikTextInput name='ownerName' placeholder='Repository Owner' />
    <FormikTextInput name='repositoryName' placeholder='Repository Name' />
    <FormikTextInput name='rating' placeholder='Rating' />
    <FormikTextInput multiline name='text' placeholder='Review' />
    <Button text='Create a review' onPress={onSubmit} />
  </View>
  <View>
    { error && <Text error>{ error }</Text> }
  </View>
  </>

const Review = ({ onSubmit, error }) => {

  const parseOnSubmit = async (values) => {
    const parsedValues = validationSchema.cast(values)
    await onSubmit(parsedValues)
  }

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={parseOnSubmit}>
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} error={error}/>}
    </Formik>
  )
}

export default Review