import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUsersData = () => {
  const fetchData = () =>
    axios.get("https://jsonplaceholder.typicode.com/users");

  return useQuery(["users"], fetchData, {
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
  });
};

const useUsersDetailsData = (id) => {
  const fetchDataDetails = ({ queryKey }) =>
    axios.get(`https://jsonplaceholder.typicode.com/users/${queryKey[1]}`);

  return useQuery(["users", id], fetchDataDetails, {
    refetchOnWindowFocus: false,
    cacheTime: 50000,
    refetchInterval: 60000,
  });
};

export { useUsersData, useUsersDetailsData };
