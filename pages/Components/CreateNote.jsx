import { MdAdd } from "react-icons/md";
const CreateNote = () => {
    return (
        <>
            <div className="createNote">
                <Form>
                    <input type="text" name="title" value="" onChange={changeHandler}/>
                    <textarea name="content" value="" onChange={changeHandler}/>
                    <button><MdAdd/></button>
                </Form>
            </div>
        </>
    );
}

export default CreateNote;