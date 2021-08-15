//package
import React  from "react";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import Search from "../../Components/Search";
import SearchResult from "../../Components/SearchResult";
import DetailsPostCard from "../../Components/Post/DetailsPostCard";

//css
import "../Home/home.css"
//action
import { filterPost } from "../../Redux/Actions/HoustingAction";
const Home = ({search, setSearch,
  location,
  setlocation,
  persons,
  setpersons,
  type,
  settype
}) => {

  const posts = useSelector((state) => state.houstingReducer.posts);

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(filterPost({ location,persons,type}));
    });
    //paginiation
    const [pageNumber, setPageNumber] = useState(0);
  
    const usersPerPage = 4;
    const pagesVisited = pageNumber * usersPerPage;
  
    const displayUsers = posts
      .slice(pagesVisited, pagesVisited + usersPerPage)
      .map((posts) => {
return(
          <DetailsPostCard key={posts._id} posts={posts} />

        );
      });
  
    const pageCount = Math.ceil(posts.length / usersPerPage);
  
    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };

    return (
  <div className="view "  >
<Search 
setSearch={setSearch}
location={location}
setlocation={setlocation}
 persons={persons}
  setpersons={setpersons}
  type={type}
  settype={settype}
/>
{search ? (
  <div className="searchResult">

  <SearchResult 
  location={location}
  persons={persons}
  type={type}
 
  />
  </div>

):(
  <div className="searchResult">
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

)}

<div className="place">
<div className="title">
<h3>Live anywhere</h3>
</div>

<div className="cntCard">
<div className="cardPlace">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ49HPz99boyhWMjAjhBlxYLXQZnVw2hHHXRQ&usqp=CAU" className="Imgplace" alt="place" />
<div className="containerP">

  <p className="PPlace">Outdoor getaways</p> 
</div>
</div>
<div className="cardPlace">
<img src="https://globalgrasshopper.com/wp-content/uploads/2018/08/Hotel-Palisade.jpg" className="Imgplace" alt="place" />
<div className="containerP">

  <p className="PPlace">Unique stays</p> 
</div>
</div>
<div className="cardPlace">
<img src="https://i.pinimg.com/originals/fb/99/7d/fb997d4c5f883d30c2ba49efe8cb7a58.png" className="Imgplace" alt="place" />
<div className="containerP">

  <p className="PPlace">Entire homes</p> 
</div>
</div>

</div>
</div>


</div>
    )
}

export default Home
