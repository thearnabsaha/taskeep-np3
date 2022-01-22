import { useState } from "react";
import { MdAdd } from "react-icons/md";
const CreateNote = () => {
    const [data, setData] = useState({
        title:"",
        content:"",
    });

    return (
        <>
            <div className="createNote">
            <form action="">
                <input type="text" name="title" value={data.title} onChange={changeHandler} autoComplete="off" placeholder="Title" />
                <textarea name="content" value={data.content} onChange={changeHandler} placeholder="Type you note here..." />
                <button><MdAdd/></button>
            </form>
            </div>
        </>
    );
}

export default CreateNote;