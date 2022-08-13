import { Image, StyleSheet, View } from "react-native"
import { Link } from "react-router-native"
import { convertThousands } from '../../helpers/textHelpers'
import theme from "../../theme";
import Button from "../Shared/Button";
import Text from "../Shared/Text"

const styles = StyleSheet.create({
    repositoryItem: {
        height: 'auto',
        alignSelf: 'stretch',
        backgroundColor: theme.colors.repositoryItemBackground
    },
    topSection: {
        flexDirection: 'column',
        flexShrink: 1
    },
    subSection: {
        alignItems: 'baseline'
    },
    avatarImg: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    topPart: {
        flexDirection: 'row',
        margin: 20,
    },
    bottomPart: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 20
    },
    bottomSection: {
        flexDirection: 'column',
        alignItems: 'center'
    },
});

const RepositoryItem = ({ item, showLink = false }) => {
    if (!item) {
        return null
    }
    
    const {
        id,
        fullName,
        description,
        language,
        forksCount,
        stargazersCount,
        reviewCount,
        ratingAverage,
        ownerAvatarUrl
    } = item

    return (
        <Link to={`/repository/${id}`}>
            <View testID='repositoryItem' style={styles.repositoryItem}>
                <View style={styles.topPart}>
                    <View style={styles.topSection}>
                        <Image style={styles.avatarImg} source={{ uri: ownerAvatarUrl }} resizeMode={'cover'}></Image>
                    </View>
                    <View style={styles.topSection}>
                        <Text marginLeft marginBottom fontWeight={'bold'} fontSize={'itemHeader'}>{fullName}</Text>
                        <Text style={styles.textWrap} marginLeft marginBottom color={'subheading'}>{description}</Text>
                        <View style={styles.subSection}>
                            <Text marginLeft rounded backgroundColor={'primary'} fontSize={'itemHeader'}>{language}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomPart}>
                    <View style={styles.bottomSection}>
                        <Text fontSize={'itemHeader'} fontWeight={'bold'}>{convertThousands(stargazersCount)}</Text>
                        <Text fontSize={'itemHeader'} color={'subheading'}>Stars</Text>
                    </View>
                    <View style={styles.bottomSection}>
                        <Text fontSize={'itemHeader'} fontWeight={'bold'}>{convertThousands(forksCount)}</Text>
                        <Text fontSize={'itemHeader'} color={'subheading'}>Forks</Text>
                    </View>
                    <View style={styles.bottomSection}>
                        <Text fontSize={'itemHeader'} fontWeight={'bold'}>{reviewCount}</Text>
                        <Text fontSize={'itemHeader'} color={'subheading'}>Reviews</Text>
                    </View>
                    <View style={styles.bottomSection}>
                        <Text fontSize={'itemHeader'} fontWeight={'bold'}>{ratingAverage}</Text>
                        <Text fontSize={'itemHeader'} color={'subheading'}>Rating</Text>
                    </View>
                </View>
                {showLink && <Button text={'Open in GitHub'} />}
            </View>
        </Link>
    )
}

export default RepositoryItem