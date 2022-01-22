import { useState } from "react";
import { MdAdd } from "react-icons/md";
const CreateNote = () => {
    const [data, setData] = useState({
        
    });
    return (
        <>
            <div className="createNote">
            <form action="">
                <input type="text" name="title" value="" onChange={changeHandler}/>
                <textarea name="content" value="" onChange={changeHandler}/>
                <button><MdAdd/></button>
            </form>
            </div>
        </>
    );
}

export default CreateNote;