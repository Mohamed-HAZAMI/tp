import React, { Component } from "react";
import { getMovies} from "./services/fakeMovieService"

class Grid extends Component {
  state = {
    movies: getMovies(),
  };
  click=(e)=>{
    const movie =this.state.movies.filter((i)=>i._id!==e._id);
    this.setState({movies:movie})
          };
  clickInc=(e)=>{
    const incr =this.state.movies.map((el)=>{if(e._id===el._id){el.numberInStock=el.numberInStock+1}})
     this.setState({num:incr})
  }
    cont(){
      var res =""
      const {length:conter} =this.state.movies;
      if(conter===0){
         res="nothing there"
        }
        else{
           res="the number of movies is"+" "+conter;
        }
        return res;
    }
  render() {

    return (
      <div>
        <h1>{this.cont()}</h1>
        <table class="table">
          <thead>
            <tr >
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
            </tr>
          </thead>
          <tbody>
                            
    {this.state.movies.map((e)=><tr key={e._id}>
                                <td>{e.title}</td> 
                                <td>{e.genre.name}</td>
                                <td>{e.numberInStock}</td>
                                <td>{e.dailyRentalRate}</td>   
                                <td className="flex">
                                <button onClick={()=>this.click(e)} class="btn btn-danger">Delete</button>
                                <button onClick={()=>this.clickInc(e)} class="btn btn-primary">{e.numberInStock}</button>
                                </td>  
                                </tr>                        
              )}
                             
          </tbody>
        </table>
      </div>
    );
  }
}

export default Grid;
