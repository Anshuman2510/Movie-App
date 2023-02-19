import React, { useEffect, useState } from 'react'
import Genre from "./Genre";
import Movies from "./Movies";
function Main() {
    const [cGenre, setGenre] = React.useState("");
  const [cPage, setcPage] = React.useState(1);
  const [genreId,setId]=React.useState();
  const [isLoaded, setLoaded] = useState(true);
  const [content, setContent] = useState([]);


  // so i will run only one time after first execution of return statement
    // useeffect -> outer function, async function  
    useEffect(function () {
        (async function () {
          // fetch is inbuilt feature of browser that makes the request to get data -> promise based
          let response = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=c09b0a80bcc417e8db833861cab09e98&language=en-US");
          response = await response.json();
          // console.log(response); 
          setContent(response);
          setLoaded(false);
        })();
      }, [])

    const setGlobalGenre = (text,id) => {
        // console.log("text: " + text);
        // console.log("id: " + id);
        if (text == "All Genre") {
            setGenre("");
            setId(id);
        } else {
            setGenre(text);
            setId(id);
        }
        setcPage(1);
    }
    return (<>
        {/* <div>Main</div> */}
        {/* <div>````````````````</div> */}
        <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-row">
            <Genre 
            setGlobalGenre={setGlobalGenre}
            isLoaded={isLoaded}
            content={content}
            >
            </Genre>
            <Movies
                cGenre={cGenre}
                genreId={genreId}
                cPage={cPage}
                setcPage={setcPage}
                Genrecontent={content}
                setGlobalGenre={setGlobalGenre}
            ></Movies>
        </div>
      
    </>
    )
}
export default Main