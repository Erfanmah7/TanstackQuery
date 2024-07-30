import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useAddPost = () => {
  // mutate(data);
  const addPost = (data) => {
    return axios.post("https://jsonplaceholder.typicode.com/posts", data);
  };

  return useMutation(addPost);
};

export { useAddPost };
