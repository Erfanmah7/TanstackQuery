import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

function UsersPage() {
  const fetchData = () =>
    axios.get("https://jsonplaceholder.typicode.com/users");

  const { data, error, isError, isLoading, isFetching, refetch } = useQuery(
    ["users"],
    fetchData,
    {
      //save
      // cacheTime: 5000,

      //Data update
      // staleTime: 4000,

      //not fetched - if fixed data
      // refetchOnMount: false,

      // Move between pages
      // refetchOnWindowFocus: false,

      //the moment
      // refetchInterval: 2000,

      //click
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
        <h3 key={i.id}>{i.name}</h3>
      ))}
    </div>
  );
}

export default UsersPage;
