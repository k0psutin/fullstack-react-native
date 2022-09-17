import { format } from "date-fns"
import { View, StyleSheet } from "react-native"
import theme from "../../theme"
import Button from "./Button"
import Text from "./Text"

const styles = StyleSheet.create({
    base: {
        backgroundColor: theme.colors.repositoryItemBackground,
        flexDirection: 'column'
    },
    header: {
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
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})

const ReviewItem = ({ item, onViewRepository = null, onDeleteReview = null }) => {
    const {
        id,
        createdAt,
        rating,
        repositoryId,
        text,
        user
    } = item

    const { name, ownerName } = item?.repository ?? [null, null]

    const { username } = user

    return (
        <View style={styles.base}>
            <View style={styles.header}>
                <View style={styles.leftPart}>
                    <Text circle fontWeight={'bold'} color={'primary'}>
                        {rating}
                    </Text>
                </View>
                <View style={styles.rightPart}>
                    { !onDeleteReview && !onViewRepository && <Text fontWeight={'bold'} fontSize={'subheading'}>{username}</Text> }
                    { onDeleteReview && onViewRepository && <Text fontWeight={'bold'} fontSize={'subheading'}>{ownerName + '/' + name}</Text> }
                    <Text fontSize={'subheading'} color={'subheading'}>{format(new Date(createdAt), 'dd-MM-yyyy')}</Text>
                    <Text fontSize={'subheading'}>{text}</Text>
                </View>
            </View>
            {
                onDeleteReview && onViewRepository &&
                <View style={styles.footer}>
                    <Button marginRight={5} width={'45%'} short onPress={() => onViewRepository(repositoryId)} text={'View repository'} />
                    <Button marginLeft={5} width={'45%'} short red onPress={() => onDeleteReview(id)} text={'Delete review'} />
                </View>
            }
        </View>
    )
}

export default ReviewItem