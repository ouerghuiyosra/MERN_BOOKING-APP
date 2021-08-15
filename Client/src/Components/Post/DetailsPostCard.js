
//package
import Reac from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//css
import "../Post/DetailsCard.css"
//action
import { getPost } from '../../Redux/Actions/HoustingAction';


const DetailsPostCard = ({posts}) => {
  const dispatch = useDispatch();
    return (
      <div className="feature-card">
      <img className="img-fluid  imagePosts" src={posts.imagePost} />
      <div class="service-wishlist " >
            <i class="fa fa-heart"></i>
        </div>
      <div className="feature-card-deatails">
      <div className=" mb-1  d-flex  "><i class="fas fa-house-user icn mt-1 mr-2"></i> <h5>{posts.type}</h5><br /></div>
      <div className="mt-1 mb-1 "><span><i class="fas fa-users mr-2"></i></span><span>{posts.persons}<br /></span></div>
      <div className="mt-1 mb-3"><span><i class="fas fa-map-marker-alt mr-2"></i></span><span>{posts.location}<br /></span></div>
      <div className=" mb-3  d-flex  "><i class="fas fa-hand-holding-usd mr-2"></i><h5>{posts.price}DT</h5> /Night<br /></div>
      <Link to={`/visitedPost/${posts._id}`}     onClick={() => {
        dispatch(getPost(posts._id));
      }}   className="btrevPost" >Book Now</Link>
      </div>
    </div>

    )
}

export default DetailsPostCard
