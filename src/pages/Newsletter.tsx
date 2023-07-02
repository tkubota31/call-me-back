import React, {useState, useEffect} from "react"
import {FDA} from "../api"

type News = {
  country: string;
  city: string;
  product_description: string;
  reason: string;
  recall_initiation_date: string;
  recalling_firm: string
}

export default function Newletter(){

  const[news, setNews] = useState<News>()

  useEffect(() =>{
    getNews()
  }, [])

  async function getNews(){
    let newsInfo = await FDA.getReport()
    setNews(newsInfo[0])
    console.log(news)
  }


  return (<>
    { news
      ?(
        <div>
          <h1>{news.country}</h1>
          <h1>{news.city}</h1>
          <h1>{news.product_description}</h1>
          <h1>{news.reason}</h1>
          <h1>{news.recall_initiation_date}</h1>
          <h1>{news.recalling_firm}</h1>
        </div>
      )
      : (<div>Loading</div>)
  }
  </>

  );
};
