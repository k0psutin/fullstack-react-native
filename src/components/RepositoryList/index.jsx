import { useState } from "react"
import useRepositories from "../../hooks/useRepositories"
import RepositoryList from "./RepositoryList"

const RepositoryContainer = () => {
    const [filter, setFilter] = useState('LATEST')
    const { repositories } = useRepositories(filter)

    return <RepositoryList repositories={repositories} filter={filter} setFilter={setFilter} />
}

export default RepositoryContainer