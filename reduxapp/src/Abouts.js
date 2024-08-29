import { useDispatch, useSelector } from "react-redux";
import Header from './Header';
function Abouts()
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
    const myDetails=useSelector((state)=>state.myDetails);
    return(
        <div>
            <Header/>
            <h2>This is About page</h2>
            <input type="button" value="Add" onClick={add}/><br></br>
            <input type="button" value="Sub" onClick={sub}/>
            <h1>From redux {counterVal}</h1>
            <h1>{myDetails.name}</h1>
            <h1>{myDetails.email}</h1>
        </div>
    )
};

export default Abouts;