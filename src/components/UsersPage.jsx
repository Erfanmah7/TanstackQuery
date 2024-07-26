import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

function UsersPage() {
  const fetchData = () =>
    axios.get("https://jsonplaceholder.typicode.com/users");

  const { data, error, isError, isLoading } = useQuery(["users"], fetchData);

  if (isLoading) return <h3>Loading...</h3>;
  if (isError) return <h3>Error : {error.message}</h3>;
  console.log({ data, error, isError, isLoading });

  return (
    <div>
      {data.data.map((i) => (
        <h3 key={i.id}>{i.name}</h3>
      ))}
    </div>
  );
}

export default UsersPage;
