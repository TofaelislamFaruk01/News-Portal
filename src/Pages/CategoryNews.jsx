import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsCard from "../Components/layout-component/NewsCard";


const CategoryNews = () => {

    const {id} = useParams();

    const [news,setNews]= useState([]);
    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
        .then(res=>res.json())
        .then(data => setNews(data.data))
            .catch(err => console.error("Failed to fetch news:", err));
},[id])
    return (
        <div>

            {/* <h2>category news page for ID : {id}</h2>
            <h2>Total new found : {news.length}</h2> */}
            <div>
                <h2 className="font-semibold mb-3">Dragon News Home</h2>

            <p className="text-sm text-gray-400 mb-2">Total new found : {news.length}</p> 
            </div>
           
            {/* {news.map((item) => (
    <div key={item._id} className="mb-4 p-4 border rounded shadow-sm">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <img src={item.image_url} alt={item.title} className="w-full h-auto my-2" />
        <p>{item.details.slice(0, 150)}...</p>
    </div>
))} */}

{   news.length>0?
    news.map((SingleNews)=>(
         <NewsCard key={SingleNews._id} news={SingleNews}/> 
    ))
    :
    <p className="text-center text-gray-500">No news found.</p>
}

            
        </div>
    );
};

export default CategoryNews;