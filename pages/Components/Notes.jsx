import { MdOutlineDelete } from "react-icons/md";
const Notes = (props) => {
    return (
        <>
            <div className="notes">
                <div className="note">
                    <div className="content">
                        <h2>{props.title}</h2>
                        <p>{props.content}</p>
                    </div>
                    <button><MdOutlineDelete className="delete"/></button>
                </div>
            </div>
        </>
    );
}

export default Notes;