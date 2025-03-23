import '../../App.css'
import catImage from '../../assets/cat-image.webp'
import { useLoaderData, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import type { Route } from "./types";
import { userSubscriptionDetailQuery } from './loader';

function Comms(){
    const initialData = useLoaderData() 
    let params= useParams()
    const {isPending, error,  data: userInfo } = useQuery({
        ...userSubscriptionDetailQuery(params.userId as string),
        initialData, //Cached
      })
  
    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message


    return (
        <div className='main-card'>
            <div className='cat-image-section'>
                <img src={catImage} className='card-images' alt="Cat image" />
            </div>
            <div className='delivery-message-section'>
                <p className='card-title'> {userInfo.title} </p>
                <p> {userInfo.message} </p>
                <p><strong>Total Price: {userInfo.totalPrice}</strong></p>
                <div className="buttons-container">
                    <button className="green-button">SEE DETAILS</button>
                    <button className="green-button-outline">EDIT DELIVERY</button>
                </div>
            </div>
            {userInfo.freeGift &&(
                <div className="free-gift">FREE GIFT</div>

            )}
        </div>
    );


}

export default Comms