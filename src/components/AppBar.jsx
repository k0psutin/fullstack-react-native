import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme'
import NavBar from './NavBar';
import { ScrollView } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.textPrimary,
        height: 100,
        width: 'auto',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
});

const AppBar = () => (
    <View style={styles.container}>
        <ScrollView horizontal>
            <NavBar />
        </ScrollView>
    </View>
)

export default AppBar;