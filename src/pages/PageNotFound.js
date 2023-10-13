import {useEffect} from 'react';
import { Link } from 'react-router-dom'
import Image404 from '../assets/images/pagenotfound.png'
export const PageNotFound = () => {

  useEffect(()=>{
    document.title=`Page Not Found`;
  });

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center py-2">
          <p className="text-3xl text-grey-700 dark:text-white my-10" >404 Oops...! Page Not Found</p>
          <img className="max-w-sm" src={Image404} alt="404"></img>
        </div>
        <Link to="/">
        <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Back to Home</button>

        </Link>
      </section>
    </main>
  )
}
