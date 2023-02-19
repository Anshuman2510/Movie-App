import React, { useState, useEffect } from 'react'
import "./Genre.css"
function Genre(props) {
  
  const [toogle,setToogle]=useState(false);
  const [id,setId]=useState(null);
  const sendGenre = (text,id) => {
    console.log("genreName : " + text);
    setId(null);
    props.setGlobalGenre(text,id);
  }

  const ToggleAllGenre=(text,id)=>{
    console.log(text);
    sendGenre(text,id);
    setToogle(false);
    setId(id);
  }

  const ChangeGenre=(e)=>{

     const index=e.target.selectedIndex;
     const el = e.target.childNodes[index];
     const optionId =  el.getAttribute('id'); 
     sendGenre(e.target.value,optionId);
     setToogle(false);
     setId(optionId);
  }
  
  return (
    <>
    <div className="Genre hidden xl:block lg:block md:block sm:block">
      <div className={toogle && id==null?"mr-6 border-2 w-40 text-center h-10 font-bold colour":"mr-6 border-2 w-40 text-center h-10 font-bold"}
        onClick={(e)=>{sendGenre(e.target.textContent,props.content.genres.id);setToogle(!toogle)}}>All Genre</div>
      {props.isLoaded == true ?
        <div className="font-bold"> Loading...</div >
        : props.content?.genres.map(function (genre,idx) {
          return (< div
            key={genre._id}
            className={id==genre.id?"mr-6 border-2 w-40 text-center h-10 font-bold colour":"mr-6 border-2 w-40 text-center h-10 font-bold"}
            onClick={(e)=>{ToggleAllGenre(e.target.textContent,genre.id)}}
          >
            {genre.name}</div>
          )
        }
        )
      }
    </div >
       
    <div className="Genre block mb-5 flex justify-center xl:hidden lg:hidden md:hidden sm:hidden">
    {/* <select>
      <option className={toogle && id==null?"mr-6 border-2 w-40 text-center h-10 font-bold colour":"mr-6 border-2 w-40 text-center h-10 font-bold"}
        onClick={(e)=>{sendGenre(e.target.textContent,props.content.genres.id);setToogle(!toogle)}}>All Genre</option>
    </select> */}
      {props.isLoaded == true ?
        <div className="font-bold"> Loading...</div >
        :
        <select onChange={(e)=>{ChangeGenre(e)}}>
          {
            props.content?.genres.slice(0,12).map(function (genre,idx) {
              return (< option
                key={genre._id}
                className={id==genre.id?" colour":""}
                id={genre.id}
                value={genre.name}
              >
                {genre.name}</option>
              )
            }
         
            )
          }
        </select>
      }
    </div >
    </>
  )
}
export default Genre