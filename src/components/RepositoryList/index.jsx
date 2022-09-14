import { useState } from "react"
import useRepositories from "../../hooks/useRepositories"
import RepositoryList from "./RepositoryList"

let timerId = null

const RepositoryContainer = () => {
    const [filter, setFilter] = useState('LATEST')
    const [searchKeyword, setSearchKeyword] = useState('')
    const { repositories, handleFetchMore } = useRepositories(filter, searchKeyword)

    const onSetSearchKeyword = (value) => {
        if (timerId) {
            clearTimeout(timerId)
        }
        timerId = setTimeout(() => {
            setSearchKeyword(value)
        }, 500);
    }

    const onEndReached = () => {
        handleFetchMore()
    }

    return <RepositoryList repositories={repositories} onEndReached={onEndReached} filter={filter} setFilter={setFilter} onSetSearchKeyword={onSetSearchKeyword} />
}

export default RepositoryContainer