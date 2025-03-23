import { QueryClient } from "@tanstack/react-query";
import type { Route } from "./types";

async function fetchUser(userId:string) {
    let baseBackendUrl: string = import.meta.env.VITE_NEST_BACKEND_BASE_URL || 'http://localhost:3000';;
    const response = await fetch(`${baseBackendUrl}/comms/your-next-delivery/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
   
    let user: Route.UserCatSubscriptionData = await response.json()
    return user
  }

  /* This loader is used to fetch the user data before the rendering of the application */
  export const userSubscriptionDetailQuery = (userId:string) => ({
    queryKey: ['id', userId],
    queryFn: async () => fetchUser(userId),
  })
  export const loader = (queryClient: QueryClient) => async ({ params }: Route.LoaderArgs) => {
    if (!params.userId) throw new Response("User ID is required", { status: 400 });
    const query = userSubscriptionDetailQuery(params.userId)
    // ⬇️ return data or fetch it
    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    )
  }