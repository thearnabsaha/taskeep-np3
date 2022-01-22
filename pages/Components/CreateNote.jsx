import { useState } from "react";
import { MdAdd } from "react-icons/md";
const CreateNote = () => {
    const [data, setData] = useState({
        title:"",
        content:"",
    });
    const changeHandler=(e) => {
        const {name,value}=e.target;
        setData((oldData)=>{
            return{
                ...oldData,
                [name]:value,
            }
        })
    }
    const submitHandler=(e) => {
        e.preventDefault()
        if(data.title&&data.content){

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
                <div className="inputs">
                    <input type="text" name="title" value={data.title} onChange={changeHandler} autoComplete="off" placeholder="Title" />
                    <textarea name="content" value={data.content} onChange={changeHandler} placeholder="Type you note here..." />
                </div>
                <button><MdAdd className="add"/></button>
            </form>
            </div>
        </>
    );
}

export default CreateNote;