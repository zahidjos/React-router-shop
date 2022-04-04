import { useEffect, useState } from "react"

const Usehook=()=>{
    const[cards,setcards]=useState([]);
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res=>res.json())
        .then(data=>setcards(data))
    },[])
    return[cards,setcards];
}
export default Usehook;