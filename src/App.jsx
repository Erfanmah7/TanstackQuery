import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import UsersPage from "./components/UsersPage";
import UserPageDetails from "./components/UserPageDetails";
import Form from "./components/Form";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserPageDetails />} />
          <Route path="/form" element={<Form />} />
        </Routes>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
