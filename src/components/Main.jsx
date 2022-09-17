import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native'
import theme from '../theme';
import AppBar from './AppBar';
import MyReviews from './MyReviews';
import RepositoryList from './RepositoryList';
import RepositoryView from './RepositoryList/RepositoryView';
import Review from './ReviewForm';
import SignIn from './SignIn';
import SignUp from './SignUp';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} exact />
        <Route path='/repository/:id' element={<RepositoryView />} exact />
        <Route path='/signIn' element={<SignIn />} exact />
        <Route path='/signUp' element={<SignUp />} exact />
        <Route path='/createReview' element={<Review />} exact />
        <Route path='/myReviews' element={<MyReviews />} exact />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </View>
  );
};

export default Main;