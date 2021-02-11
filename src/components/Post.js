import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Post = ({ title }) => {
  return (
    <article className='post'>
      <aside className='post__avatar'>
        <Avatar />
      </aside>
      <div className='post__body'>
        <header className='post__header'>
          <h4 className='post__author'>msT</h4>
          <p className='post__date'>20/02/21</p>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </header>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde labore,
          fuga ipsa voluptatum eligendi voluptate ratione hic, repudiandae velit
          provident aut harum iusto, facilis est doloribus! Quis error
          voluptates inventore quidem quos dignissimos sint laboriosam nesciunt
          repellat sit, harum voluptatum quasi minima exercitationem ullam
          dolores iusto facere dicta veniam accusantium!
        </p>
        <img
          src='https://www.pcgamesn.com/wp-content/uploads/2021/02/cyberpunk-2077-cyber-attack-580x334.jpg'
          alt='https://www.pcgamesn.com/wp-content/uploads/2021/02/cyberpunk-2077-cyber-attack-580x334.jpg'
        />
      </div>
    </article>
  );
};

export default Post;
