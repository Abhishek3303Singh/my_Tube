import React from 'react'
import {useSelector} from "react-redux"
import SearchVideoCard from './SearchVideoCard'
import {Link} from "react-router-dom"

const SearchResultPage = () => {
  const {searchData }=useSelector(store=>store.searchCache)

  // console.log(searchData,'dataSearch')
  return (
    <div className=''>
      {
        searchData && searchData.map((data)=><Link to={'/watch?v='+data.id.videoId}> <SearchVideoCard key={data.id.videoId} searchData={data}/></Link>)
      }
      
    </div>
  )
}

export default SearchResultPage