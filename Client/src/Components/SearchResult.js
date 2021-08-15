//package
import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";

//action
import {  filterPost } from '../Redux/Actions/HoustingAction';
//component
import Spinner from "./Spinner"

import DetailsPostCard from "./Post/DetailsPostCard";


const SearchResult = ({ location,persons,type}) => {
    const housting = useSelector((state) => state.houstingReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(filterPost({ location,persons,type}));
      });
          //paginiation
    const [pageNumber, setPageNumber] = useState(0);
  
    const usersPerPage = 4;
    const pagesVisited = pageNumber * usersPerPage;
  
    const displayUsers = housting.posts
      .slice(pagesVisited, pagesVisited + usersPerPage)
      .map((posts) => {
return(
          <DetailsPostCard key={posts._id} posts={posts} />

        );
      });
  
    const pageCount = Math.ceil(housting.posts.length / usersPerPage);
  
    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };

    
    return (
        <div>
            {housting.loading || !housting.posts ? (
                <div >
                  <Spinner />
                </div>
              ) : housting.posts ? (
                <div>
                {displayUsers}
                  <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                  />
                </div>
              ) : (
                <h4>No profiles found</h4>
              )}
        </div>
    )
}

export default SearchResult
