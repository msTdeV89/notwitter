import React from "react";
import { Avatar } from "@material-ui/core";
import Button from "../reusable/Button";

const NewPost = () => {
  return (
    <div className='newPost'>
      <Avatar />
      <form>
        <textarea
          placeholder="What's happening?"
          cols='30'
          rows='7'
          maxLength='255'
        ></textarea>
        <Button type='submit' title='Post' />
      </form>
    </div>
  );
};

export default NewPost;
