import { useEffect, useState } from "react";

export function useFetch(url, method = "GET") {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  const [postData, setPostData] = useState(null)

  const getNewRecipe = (newRecipe)=>{
    setPostData({
      method: method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newRecipe)
    })
  }

  useEffect(() => {
    const getData = async (fetchHeaders) => {
      setIsPending(true);
      try {
        const req = await fetch(url, {...fetchHeaders});
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setData(data);
        setIsPending(false);
        setError(null);
      } catch (error) {
        console.log(error.message);
        setIsPending(false);
        setError(error.message);
      }
    };
    
    if (method == 'POST' && postData){
      getData(postData)
    }
    if(method == 'GET'){
      getData()
    }
  }, [url, method, postData]);

  return { data, isPending, error, getNewRecipe };
}
