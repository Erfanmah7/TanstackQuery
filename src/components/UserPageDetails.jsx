import React from "react";
import { useParams } from "react-router-dom";
import { useUsersDetailsData } from "../hooks/queries";

function UserPageDetails() {
  const { id } = useParams();

  const { data, error, isError, isLoading, isFetching, refetch } =
    useUsersDetailsData(id);
  console.log({ data, error, isError, isLoading, isFetching, refetch });
  if (isError) return <h3>Error : {error.message}</h3>;
  console.log({ data, error, isError, isLoading, isFetching });
  return <div>UserPageDetails - {id}</div>;
}

export default UserPageDetails;
