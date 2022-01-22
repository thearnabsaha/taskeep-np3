import { MdAdd } from "react-icons/md";
const CreateNote = () => {
    return (
        <>
            <div className="createNote">
                <Form>
                    <input type="text" name="title" />
                    <textarea name="content" />
                    <button><MdAdd/></button>
                </Form>
            </div>
        </>
    );
}

export default CreateNote;