import { useSearchParams } from "react-router-dom";
import {useEffect} from "react";
import { Card } from "../components/Card"
import { useFetch } from "../hooks/useFetch"

export const Search = ({apiPath}) => {
  const [searchParams] =useSearchParams();
  const queryTerm = searchParams.get("q");
   
  const {data:movies} = useFetch(apiPath, queryTerm);  
  
  useEffect(()=>{
    document.title=`Search result for "${queryTerm}" | Cinemadiary`;
  });
 
  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-grey-700 dark:text-white">{movies.length === 0 ? `No items found for your search term "${queryTerm}"` :`Results for your search "${queryTerm}"`}</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex flex-wrap justify-start other:justify-evenly">  
        { movies.map((movie) => (
          <Card key={movie.id} movie={movie}/>
        ))}            
        </div>
      </section>
    </main>
  )
}
