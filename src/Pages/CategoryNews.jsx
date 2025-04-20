
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../Components/layout-component/NewsCard";


const CategoryNews = () => {

    const {data:news} = useLoaderData();
    const { id } = useParams();
    console.log(news);

   

   
    return (
        <div>
            <div>
                <h2 className="font-semibold mb-3">Dragon News Home</h2>
                {/* <h2>category news page for ID : {id}</h2> */}
            {/* <p className="text-sm text-gray-400 mb-2">Total new found : {news.length}</p>  */}
            
            </div>
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