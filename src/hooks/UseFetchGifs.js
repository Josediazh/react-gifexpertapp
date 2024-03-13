import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";


export const UseFetchGifs = (category) => {

    const [gifs, setGift] = useState([]);
    const [isloading, setIsloading] = useState(true);

    const showimgs = async() =>{
        const img = await getGifs(category);
        setGift(img);
        setIsloading(false);
    }

    useEffect(() => {
        showimgs();
    },[])
  
    return {
        gifs: gifs,
        isloading: isloading
    }
}
