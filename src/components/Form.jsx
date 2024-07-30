import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useAddPost } from "../hooks/mutations";

function Form() {
  const { mutate, data, isLoading } = useAddPost();

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
