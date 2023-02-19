import React from 'react'
import InputBox from './InputBox'
import MoviesTable from './MoviesTable';
import Pagination from "./Pagination";
import { useEffect } from 'react';
function Movies(props) {
  let {cGenre, genreId,cPage, setcPage, Genrecontent,setGlobalGenre } = props;
  let [searchText, setSearchText] = React.useState("");
  let [moviesCount, setCount] = React.useState(4);
  // *******************Movies table get *********************************************
  const [content, setContent] = React.useState([]);
  const [isLoaded, setLoaded] = React.useState(true);
  
  useEffect(function () {
    (async function()  {
      // fetch is inbuilt feature of browser that makes the request to get data -> promise based
      let response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=c09b0a80bcc417e8db833861cab09e98&language=en-US&page=1");
      response = await response.json();
      // console.log(response); 
      setLoaded(false);
      setContent(response.results);
    })()
  }, []);
  // ****************************************************************
  // ****************************************************************
  const setGlobalSearchText = (searchText) => {
    console.log("movies : " + searchText);
    setSearchText(searchText);
    setcPage(1);
  }
  const setGlobalCount = (moviesCount) => {
    console.log("movies : " + moviesCount);
    setCount(moviesCount);
    setcPage(1);
  }

  //  *******************Movies table************
  let filteredContent;
  let totalpagesMovies;
  
  if(content)
   {
      
      filteredContent=content;
      //   // **************searching*********
      if(searchText!=="")
       {
         filteredContent = content.filter((movie) => {
                let lowerCaseTitle = movie.title.toLowerCase();
                let lowercaseSearchText = searchText.toLowerCase();
                // movie (title) -> lowercase  
                return lowerCaseTitle.includes(lowercaseSearchText);
              });
       }
       // ************genre****** -> grouping
      if(cGenre!=="")
      {
        console.log("cGenre",cGenre);
         
        filteredContent = filteredContent.filter((movie)=>Number(movie.genre_ids[0])=== Number(genreId))
              console.log("movies table ", filteredContent)
          
                
           if(filteredContent.length==0)
           {
               setGlobalGenre("All Genre","")
           }
      }

        totalpagesMovies = filteredContent;
  //   // **************number of elems logic(Pagination)*********** 
        let sidx = (cPage - 1) * moviesCount;
        let eidx = sidx + moviesCount;
        filteredContent = filteredContent.slice(sidx, eidx);

    }
  // console.log("content ",content);
  // ***********************movies table **************

  
  return (<div >
    <InputBox setGlobalSearchText
      ={setGlobalSearchText}
      setGlobalCount
      ={setGlobalCount}
    ></InputBox>
    <MoviesTable searchText={searchText}
      filteredContent={filteredContent}
      cGenre={props.cGenre}
      content={content}
      isLoaded={isLoaded}
      setContent={setContent}
      cPage={cPage}
      Genrecontent={Genrecontent}
    ></MoviesTable>
    <Pagination
      moviesCount={moviesCount}
      totalpagesMovies={totalpagesMovies}
      cPage={cPage}
      setcPage={setcPage}
    ></Pagination>
  </div>
  )
}
export default Movies;