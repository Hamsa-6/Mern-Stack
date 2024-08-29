import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
function Home()
{
    const counterVal=useSelector((state)=>state.counter);
    const dispatch=useDispatch();

    const add=()=>
    {
        dispatch({
            type:"add",
        });
    };
    const sub=()=>
    {
        dispatch({
            type:"sub",
        });

    };
    const myDetails=()=>{
        dispatch({
            type:"saveDetails",
            data:{name:"Hamsa",email:"mailhamsas@gmail.com"}
        })
    }
    return(
        <div>
             <Header/>  
        <h2>This is Home page</h2>
        <input type="button" value="Add" onClick={add}/><br></br>
        <input type="button" value="Sub" onClick={sub}/>
        <h1>From redux {counterVal}</h1><br></br>
        <input type="button" value="submit" onClick={myDetails}/><br></br>
        </div>
    )
};

export default Home;