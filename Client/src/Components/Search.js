//package
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "react-datepicker/dist/react-datepicker.css";
//action
import { filterPost } from "../Redux/Actions/HoustingAction";


const Search = ({setSearch,
  location,
  setlocation,
  persons,
  setpersons,
  type,
  settype
 }) => {


  const dispatch = useDispatch();

  const handelSearch = () => {
    dispatch(filterPost({location,persons,type
    }));
    setSearch(true);
  }
    return (
  <div className=" d-flex justify-content-center align-items-center">
    <div className="marginForm">
    <div className="product-search ">
  
    <div className="search-element">

      <label className="search-label">Location</label>

      <select name="cars" id="cars" className="types"  name="type"    value={type}  onChange={(e) => settype(e.target.value)}>
      <option value="" readonly="true" hidden="true" selected>Where are you going?</option>
      <option value="hostel">hostel</option>
      <option value="camping center ">camping center </option>
      <option value="guestroom">guestroom</option>
      <option value="guest house">guest house</option>
      <option value="Mountain refuge">Mountain refuge</option>
      </select>
    </div>
    <div className="search-element">
    <label className="search-label">Address</label>
    <input className="search-input" type="text" autoComplete="on" placeholder="Address"  name="location"    value={location}
    onChange={(e) => setlocation(e.target.value)}/>
  </div>
    <div className="search-element">
      <label className="search-label">Guests</label>
      <input type="text" className="search-input"  placeholder="persons Number ?"  name="persons"    value={persons}
      onChange={(e) => setpersons(e.target.value)}/>
      
    </div>
    <a type="button" className="search-button"
        onClick={handelSearch}
    ><i class="fas fa-search"></i></a>
</div>

    </div>
 

</div>
    )
}

export default Search
