import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

function UserPageDetails() {
  const { id } = useParams();

  const fetchDataDetails = () =>
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

  const { data, error, isError, isLoading, isFetching, refetch } = useQuery(
    ["users"],
    fetchDataDetails,
    {
      refetchOnWindowFocus: false,
      cacheTime: 50000,
      refetchInterval: 60000,
    }
  );
  console.log({ data, error, isError, isLoading, isFetching, refetch });
  if (isError) return <h3>Error : {error.message}</h3>;
  console.log({ data, error, isError, isLoading, isFetching });
  return <div>UserPageDetails - {id}</div>;
}

export default UserPageDetails;
