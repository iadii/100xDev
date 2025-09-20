import { useEffect, useState } from "react";

export function Fake(){
    useState[quotes, setQuotes] = useState([])
    useEffect(() => {
        fetch("https://dummyjson.com/quotes")
        .then( async (res) => {
            const json = await res.json();
            setQuotes(json.quotes)
        })
    },[])
}