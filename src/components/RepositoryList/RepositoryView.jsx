import { FlatList, StyleSheet, View } from 'react-native'
import { useParams } from 'react-router-native'
import useRepository from "../../hooks/useRepository"
import theme from '../../theme'
import RepositoryItem from "./RepositoryItem"
import ReviewItem from './ReviewItem'

const styles = StyleSheet.create({
    separator: {
        height: 10,
        backgroundColor: theme.colors.background
    },
})

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryView = () => {
    const { id } = useParams()
    const { item, reviews } = useRepository(id)

    return <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem item={item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <RepositoryItem showLink item={item} />}
        ItemSeparatorComponent={ItemSeparator}
    />
}

export default RepositoryView