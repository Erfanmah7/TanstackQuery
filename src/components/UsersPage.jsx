import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function UsersPage() {
  const fetchData = () =>
    axios.get("https://jsonplaceholder.typicode.com/users");

  const { data, error, isError, isLoading, isFetching, refetch } = useQuery(
    ["users"],
    fetchData,
    {
      //save
      // cacheTime: 5000,

      //Data update - if back and forth
      // staleTime: 4000,

      //not fetched - if fixed data
      // refetchOnMount: false,

      // Move between pages
      // refetchOnWindowFocus: false,

      //the moment
      // refetchInterval: 2000,

      //click - refetch
      enabled: false,

      onSuccess: (success) => console.log("Success :", success),
      onError: (error) => console.log("Error :", error),
    }
  );

  // if (isLoading) return <h3>Loading...</h3>;
  if (isError) return <h3>Error : {error.message}</h3>;
  console.log({ data, error, isError, isLoading, isFetching });

  return (
    <div>
      <button onClick={refetch}>Fetch</button>
      {isLoading && isFetching && <h3>Loading...</h3>}
      {data?.data.map((i) => (
        <Link key={i.id} to={`/users/${i.id}`}>
          <h3>{i.name}</h3>
        </Link>
      ))}
    </div>
  );
}

export default UsersPage;
