import { useDispatch, useSelector } from "react-redux";
import React from 'react';
import DayJS from 'react-dayjs';

//css
import "../Comment/Comment.css"
//action
import { setAlert } from "../../Redux/Actions/alert";
import { deleteComment } from "../../Redux/Actions/HoustingAction";

const CommentCard = ({

  commentWriter,
  firstName,
  lastName,
  comment,
  commentId,
  houstingId,
  date
}) => {
    const isAuth = useSelector(state => state.authReducer.isAuth)
  const dispatch = useDispatch();
  const handelDelete = () =>{
  if (isAuth){
    return    dispatch(deleteComment({   houstingId  , commentId }))
  }else{
    dispatch(setAlert({ msg:"please login In", alertType: "danger" }));
  }
  }
  return (
    <div className="media">
    <div className="media-body">
      <h4 className="media-heading ">{firstName} {lastName}</h4>
      <div className="d-flex ">
      <p className="pcomment">{comment}</p>    
      <span  type="button" onClick={handelDelete}><i class="fas fa-trash-alt icComment"></i></span>
      </div>
    

      <ul className="list-unstyled list-inline media-detail pull-left">
        <li><i className="fa fa-calendar" />
        <DayJS format="MM-DD-YYYY">{date}</DayJS>
        </li>
      </ul>

    </div>
  </div>
  );
};

export default CommentCard;
