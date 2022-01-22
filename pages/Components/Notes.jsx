import { MdDelete } from "react-icons/md";
const Notes = () => {
    return (
        <>
            <div className="notes">
                <div className="note">
                    <div className="content">
                    <h2>title</h2>
                    <p>content lorem200</p>
                    </div>
                    <button><MdDelete className="delete"/></button>
                </div>
            </div>
        </>
    );
}

export default Notes;