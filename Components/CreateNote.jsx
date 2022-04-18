import { useState,createContext } from "react";
import { MdAdd } from "react-icons/md";
import Notes from "./Notes";
import {useGlobalContext} from '../reducers/context'
const CreateNote = () => {
    const {dispatch}=useGlobalContext()
    const [data, setData] = useState({
        title:"",
        content:"",
    });
    const arr=["arnab","arijit"]
    const changeHandler=(e) => {
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler=(e) => {
        e.preventDefault()
        if(data.title&&data.content){
            const newRecord = {...data,id:new Date().getTime()} 
            dispatch({type:"add",payload:newRecord})
            dispatch({type:"arr",payload:arr})
            setData({
                title:"",
                content:"",
            })
        }else{
            alert("Fill Title and Content Both!!")
        }
    }
    return (
        <>
            <div className="createNote">
                    <form action="" onSubmit={submitHandler}>
                        <div className="totalForm">
                            <div className="inputs">
                                <input type="text" name="title" value={data.title} onChange={changeHandler} autoComplete="off" placeholder="Title" />
                                <textarea name="content" value={data.content} onChange={changeHandler} placeholder="Type you note here..." />
                            </div>
                                <button><MdAdd className="add"/></button>
                        </div>
                    </form>
                </div>
            {/* {
                records.map((e)=>{
                    return(
                        <div key={e.id}>
                            <h1>{e.title}</h1>
                            <h1>{e.content}</h1>
                        </div>
                    )
                })
            } */}
        </>
    );
}

export default CreateNote;