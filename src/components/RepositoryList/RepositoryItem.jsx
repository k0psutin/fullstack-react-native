import { Image, StyleSheet, View } from "react-native"
import * as Linking from 'expo-linking'
import { useNavigate } from 'react-router-native'
import { convertThousands } from '../../helpers/textHelpers'
import theme from "../../theme";
import Button from "../Shared/Button";
import Text from "../Shared/Text"
import Pressable from "react-native/Libraries/Components/Pressable/Pressable"

const styles = StyleSheet.create({
    repositoryItem: {
        height: 'auto',
        alignSelf: 'stretch',
        backgroundColor: theme.colors.repositoryItemBackground,
    },
    marginBottom: {
        marginBottom: 10,
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
    }
});

const RepositoryItem = ({ item, showLink = false }) => {
    const navigate = useNavigate()

    if (!item) {
        return null
    }

    const navigateTo = (id) => {
        navigate(`/repository/${id}`)
    }

    const openGitHub = async (url) => {
        await Linking.openURL(url)
    }

    const {
        id,
        url,
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
        <Pressable onPress={() => navigateTo(id)}>
            <View testID='repositoryItem' style={[styles.repositoryItem, showLink && styles.marginBottom]}>
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
                {showLink && <Button onPress={() => openGitHub(url)} text={'Open in GitHub'} />}
            </View>
        </Pressable>
    )
}

export default RepositoryItem