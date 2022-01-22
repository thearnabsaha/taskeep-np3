import { MdDelete } from "react-icons/md";
const Notes = () => {
    return (
        <>
            <div className="notes">
                <h2>title</h2>
                <p>content</p>
                <button><MdDelete/></button>
            </div>
        </>
    );
}

export default Notes;