import { FlatList } from 'react-native'
import { useParams } from 'react-router-native'
import useRepository from "../../hooks/useRepository"
import RepositoryItem from "./RepositoryItem"
import ReviewItem from '../Shared/ReviewItem'
import ItemSeparator from '../Shared/ItemSeparator'

const RepositoryView = () => {
    const { id } = useParams()
    const { item, handleFetchMore, reviews } = useRepository(id)

    const onEndReached = () => {
        handleFetchMore()
    }

    return <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem item={item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <RepositoryItem showLink item={item} />}
        ItemSeparatorComponent={ItemSeparator}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
    />
}

export default RepositoryView