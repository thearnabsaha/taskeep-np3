import { useState } from "react";
import { MdAdd } from "react-icons/md";
const CreateNote = () => {
    const [data, setData] = useState({
        title:"",
        content:"",
    });
    const [records, setRecords] = useState([]);
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
        const newRecord = {...data}
        if(data.title&&data.content){
            setRecords((oldData)=>{
                return {
                    ...oldData,newRecord
                }
            })
            console.log(records);
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
        </>
    );
}

export default CreateNote;