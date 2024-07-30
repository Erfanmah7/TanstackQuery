import React from "react";
import { Link } from "react-router-dom";
import { useUsersData } from "./hooks/queries";

function UsersPage() {
  const { data, error, isError, isLoading, isFetching, refetch } =
    useUsersData();

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
