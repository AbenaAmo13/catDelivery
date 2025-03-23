import './App.css'

import { createBrowserRouter, RouterProvider } from "react-router";
import Comms from './comms/components/Comms';
import { loader as commsLoader } from './comms/components/loader';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

// Define routes with loaders
let router = createBrowserRouter([
  { path: "/welcome/:userId", element: <Comms />, loader: commsLoader(queryClient) },

]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
)
}

export default App
