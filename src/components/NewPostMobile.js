import React from "react";
import { IconButton } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";

const NewPostMobile = () => {
  return (
    <IconButton className='newPostMobile'>
      <CreateIcon fontSize='large' />
    </IconButton>
  );
};

export default NewPostMobile;
