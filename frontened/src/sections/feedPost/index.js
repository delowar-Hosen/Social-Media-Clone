import React from 'react'
import "../feedPost/post.css"
import { BsThreeDots } from "react-icons/bs";

const Post = () => {
  return (
    <>
    <div className='textPost'>
        <div className='postHeader'>
            <img className='postImage' src='assests/images/post.png' />
            <div className='postNameInfo'>
              <h6>A B M Shawon Islam</h6>
              <p>29 minutes ago</p>
            </div>
            <BsThreeDots className='dot' />
        </div>
    </div>
    </>
  )
}

export default Post