//this is a function

import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const[data,setData]=useState({});
    useEffect(() => {
      fetch(`
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json `}, 
[currency])

}

export default useCurrencyInfo;