import { format } from "date-fns"
import { View, StyleSheet } from "react-native"
import theme from "../../theme"
import Text from "./Text"

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.repositoryItemBackground,
        height: 'auto',
        minHeight: 100,
        padding: 20,
        flexDirection: 'row'
    },
    leftPart: {
        flexDirection: 'column'
    },
    rightPart: {
        marginLeft: 20,
        marginTop: 5,
        flexDirection: 'column',
        flexShrink: 1
    }
})

const ReviewItem = ({ item }) => {
    const {
        createdAt,
        rating,
        text,
        user
    } = item

    const { username } = user

    return (
        <View style={styles.container}>
            <View style={styles.leftPart}>
                <Text circle fontWeight={'bold'} color={'primary'}>
                    { rating }
                </Text>
            </View>
            <View style={styles.rightPart}>
                <Text fontWeight={'bold'} fontSize={'subheading'}>{ username }</Text>
                <Text fontSize={'subheading'} color={'subheading'}>{ format(new Date(createdAt), 'dd-MM-yyyy') }</Text>
                <Text fontSize={'subheading'}>{ text }</Text>
            </View>
        </View>
    )
}

export default ReviewItem