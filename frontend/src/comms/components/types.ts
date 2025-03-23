export namespace Route {
    // Defines the arguments passed to the `loader` function
    export interface LoaderArgs {
      params: {
        userId?: string; // The dynamic route parameter (e.g., "123" in /user/123)
      };
    }
 

    export interface UserCatSubscriptionData {
        title: string
        message: string
        totalPrice:number,
        freeGift: boolean,
      }

     

    // Defines the props expected by the `Product` component
    export interface ComponentProps {
      loaderData: UserCatSubscriptionData;
    }
  }
  