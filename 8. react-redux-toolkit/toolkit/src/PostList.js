import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./actions/post";

function PostList() {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.post);

  console.log(list);
  const onPostAddClick = () => {
    dispatch(addPost({ name: "post", desc: "this is post" }));
  };

  return (
    <div>
      {list.map((el) => (
        <div>{el.name}</div>
      ))}
      <button onClick={onPostAddClick}>generate</button>
    </div>
  );
}

export default PostList;
