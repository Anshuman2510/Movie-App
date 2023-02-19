import React, { useState } from 'react';
function MoviesTable(props) {
  // so i will run only one time after first execution of return statement  
  let {searchText,filteredContent,cGenre,content, isLoaded, setContent ,cPage,Genrecontent} = props

  const deleteMovie = (tobeDeletedMovieId) => {
    let restOfTheMovies = content.filter((movie) => movie.id !== tobeDeletedMovieId);
    // let newObject = { movies: restOfTheMovies };
    // setContent(newObject);
    setContent([...restOfTheMovies])
  }
   console.log("filteredContent ",filteredContent);
   console.log("Genrecontent ",Genrecontent);
  // data
  return (
    <div>{isLoaded === true ?
      <div className="font-bold">Loading...</div > :
      // <div>Some error</div>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-2">#</th>
            <th className="px-2 "> Title</th>
            <th className="px-2">Genre</th>
            <th className="px-2">popularity</th>
            <th className="px-2">vote_average</th>
          </tr>
        </thead>
        <tbody>
          {/* {filteredContent.map(
            function (movie, idx) {
              return <tr key={movie._id} >
                <td className="px-2 text-center">{idx + 1}</td>
                <td className="px-2 text-center">{movie.title}</td>
                <td className="px-4 text-center">{movie.genre.name}</td>
                <td className="px-2 text-center">{movie.numberInStock}</td>
                <td className="px-2 text-center">{movie.dailyRentalRate}</td>
                <td>
                  <button className="bg-red-500 hover:bg-red-700 text-white 
        font-bold py-2 px-4 rounded"  onClick={function () {
                      deleteMovie(movie._id);
                    }}>DELETE</button></td>
              </tr>
            })} */}

{
          filteredContent?.map((movie,idx)=>(
            //movie.genre_ids[0]
            
            <tr >
              <td className="px-2 text-center">{idx+1}</td>
              <td className="px-2 text-center">{movie.title}</td>
              {
                Genrecontent.length!==0?
                 Genrecontent?.genres.filter((genre)=>(
                  movie.genre_ids[0]===genre.id ?  true:  false

                )).map((genre)=>(
                  <td className="px-4 text-center">{genre.name}</td>
                ))
                 :false
                
              }
              
              
              <td className="px-2 text-center">{movie.popularity}</td>
              <td className="px-2 text-center">{movie.vote_average}</td>
              
              <td>
                  <button className="bg-red-500 hover:bg-red-700 text-white 
        font-bold py-2 px-4 rounded"  onClick={function () {
                      deleteMovie(movie.id)
                    }}>DELETE</button></td>
              

            </tr>



          ))
        }
        </tbody>
      </table>
    }
    </div>


  )
}
export default MoviesTable;