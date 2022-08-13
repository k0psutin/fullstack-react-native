import { useParams } from 'react-router-native'
import useRepository from "../../hooks/useRepository"
import RepositoryItem from "./RepositoryItem"

const RepositoryView = () => {
    const { id } = useParams()
    const { item } = useRepository(id)
    
    return <RepositoryItem item={item} showLink />
}

export default RepositoryView