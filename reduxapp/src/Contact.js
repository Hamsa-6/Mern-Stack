import { useDispatch, useSelector } from "react-redux";
import Header from './Header';
function Contact()
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
    return(
        <div>
            <Header/>
        <h2>This is Contact page</h2>
        <input type="button" value="Add" onClick={add}/><br></br>
        <input type="button" value="Sub" onClick={sub}/>
        <h1>From redux {counterVal}</h1>
        <p>You can reach us at mailhamsas@gmail.com</p>
        </div>
    )
};

export default Contact;