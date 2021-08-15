//package
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//action
import { setAlert } from '../../Redux/Actions/alert';
import { addComment, getPost } from '../../Redux/Actions/HoustingAction';
//Compoment
import CommentCard from './CommentCard';


//css
import "../Comment/Comment.css"
const Comment = ({id,comments}) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.authReducer.isAuth)
  const housting = useSelector((state) => state.houstingReducer.post);

  const [text, setText] = useState('');



  useEffect(() => {
        dispatch(getPost(id));
    }, []);
 
  
const handelAddComment = () =>{
  if(isAuth){
   
      text &&
        dispatch(
          addComment({ id, formData: text })
        );
   
  }else{
    dispatch(setAlert({ msg:"please login In", alertType: "danger" }));

  }
}

    return (
<div>
<section className="content-item" id="comments">
  <div className="container">   
      <div className="col-sm-8">  
      <h5> Add New Comments</h5>
 
      <form >
      <div className='input-group '>
        <input
          type='text'
          className='form-control rounded-corner mr-3'
          placeholder='Write a comment...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <span className='input-group-btn p-l-10'>
          <span
            className='bteditPost'
            type='button'
            onClick={handelAddComment}
          >
            Comment
          </span>
        </span>
      </div>
    </form>
              <h5>Comments</h5>
              { comments &&
                comments.map((comment, i) => (
                  <CommentCard
                    key={i}
                    commentWriter={comment.user}
                    firstName={comment.firstName}
                    lastName={comment.lastName}
                    comment={comment.text}
                    commentId={comment._id}
                    houstingId={id}
                    date={comment.date}
                  />
                ))}
      </div>
  </div>
</section>
</div>

    )
}

export default Comment
