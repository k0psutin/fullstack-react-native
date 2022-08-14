import useRepositories from "../../hooks/useRepositories"
import RepositoryList from "./RepositoryList"

const RepositoryContainer = () => {
    const { repositories } = useRepositories()

    return <RepositoryList repositories={repositories} />
}

export default RepositoryContainer