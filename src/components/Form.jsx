import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

function Form() {
  // mutate(data);
  const addPost = (data) => {
    return axios.post("https://jsonplaceholder.typicode.com/posts", data);
  };

  const { mutate, data, isLoading } = useMutation(addPost);

  console.log({ mutate, data, isLoading });
  const sendHandler = () => {
    const data = {
      title: "erfan",
      body: "mohiti",
      userId: 1,
    };
    mutate(data);
  };

  return (
    <div>
      <h3>Form</h3>
      <button onClick={sendHandler}>Send</button>
    </div>
  );
}

export default Form;
