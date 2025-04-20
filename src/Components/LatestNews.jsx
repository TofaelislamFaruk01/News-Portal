import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    const [news,setNews]=useState([]);

    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/news/category/08")
        .then(result=>result.json())
        .then(data=>setNews(data.data))
    },[])
    // console.log(news);
    return (
        <div className="flex gap-2 items-center bg-base-200 p-2">
            <p className="bg-[#D72050] text-base-100 px-2 py-1">latest</p>

            <Marquee pauseOnHover={true} speed={100} className="space-x-10">
  {news &&
    news.map((singleNews) => (
      <Link key={singleNews._id} to={`/news/${singleNews._id}`} className="mx-4 hover:underline">
        {singleNews.title}
      </Link>
    ))}
</Marquee>
            

            {/* <Marquee pauseOnHover={true} speed={100} className="space-x-10">
                <Link to="/news">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, ipsam!</Link>
                <Link to="/news">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, ipsam!</Link>
                <Link to="/news">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, ipsam!</Link>
            </Marquee> */}

        
          
            
        </div>
    );
};

export default LatestNews;