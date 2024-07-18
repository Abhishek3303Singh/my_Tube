import React, { useEffect } from "react";
import logo from "../images/logo.png";
import humbarger from "../images/humbarger.png";
import user from "../images/user.png";
import bell from "../images/bell.png";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "./utils/navSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import { setSearchCache } from "./utils/searchSlice";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "./utils/constants";
import { getSearchVideos } from "./utils/searchSlice";
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const [searchText, setSearchText] = useState("")
  const [suggestinList, setSuggestionList] = useState([])
  const [showSuggestion, setShowSuggestion] = useState(false)
  const navigate = useNavigate()
  const { cache } = useSelector(store => store.searchCache)
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(toggle());
  };

  // console.log(searchText,'search-text')
  useEffect(() => {
    // Debouncing with 200ms
    const timer = setTimeout(() => {
      if (cache[searchText] !== undefined) {
        setSuggestionList(cache[searchText])
        // console.log(cache[searchText], 'cache1', searchText)
      }
      else {
        // console.log(cache, 'cache2', searchText)
        getSearchSuggestionData()       
      }

    }, 200)
    
    // return UseEffect and clr the timer
    return () => {

      clearTimeout(timer)
    }

  }, [searchText])
  const getSearchSuggestionData = async () => {
    // console.log(searchText, 'text')
    const searchSugData = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchText)
    const searchJsonData = await searchSugData.json()
    setSuggestionList(searchJsonData[1])
    console.log(searchJsonData[1], 'search', searchText)
    dispatch(setSearchCache({
      [searchText]: searchJsonData[1]
    }))
  }

  useEffect(()=>{

  },[])

  const handleBlure=()=>{
    setTimeout(()=>setShowSuggestion(false),200)
  }
  const handleSetSuggestionInInput=(suggestionData)=>{
    setSearchText(suggestionData)
    // setShowSuggestion(false)
  }
const handleSearch=(searchText)=>{
  dispatch(getSearchVideos(searchText))
  navigate("/results?search_query="+searchText)
}
  return (
    <div className="grid grid-flow-col p-4 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleHandler()}
          className="h-9 cursor-pointer"
          alt="menu"
          src={humbarger}
        />
<Link to="/">
        <img
          className="h-9 mx-3 bg-white-100 cursor-pointer"
          alt="logo"
          src={logo}
        />
        </Link>

      </div>
      <div className="col-span-10 text-center">
        <div className="">
          <input
            placeholder="search"
            className="w-1/2 border border-gray-600 p-2 rounded-l-full focus:outline-none px-5"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={handleBlure}
            
          />
       <button 
          className="border border-gray-500 py-2 px-3 bg-gray-200 rounded-r-full"
          onClick={()=>handleSearch(searchText)}
          
          >
            🔍
          </button>
        </div>
        {
          showSuggestion &&
          <div className="fixed bg-white ml-[14rem] w-[30rem] text-left rounded-xl border border-gray-200 z-[1000]">
            <ul>

              {
                suggestinList[0] && suggestinList?.map((suggestionData) => <li onClick={()=>handleSetSuggestionInInput(suggestionData)} key={suggestionData} className="shadow-sm py-2 hover:bg-gray-200 rounded-xl"><span className="px-2 py-3">🔍</span>{suggestionData} </li>)
              }

            </ul>
          </div>
        }
      </div>

      <div className="flex col-span-1">
        <img className="h-9 mx-3" alt="notification" src={bell} />
        <img className="h-8" alt="user" src={user} />

      </div>
    </div>
  );
};

export default Header;
