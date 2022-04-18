import { MdOutlineDelete } from "react-icons/md";
import {useGlobalContext} from '../reducers/context'

const Notes = () => {
    const {task}=useGlobalContext()
    const deleteItem=() => {
        alert("this function haven't added yet")
    }
    return (
        <>
            <div className="notes">
                {
                    task.map((e,ind)=>{
                        return(
                            <div className="note" key={ind}>
                                <div className="content">
                                    <h2>{e.title}</h2>
                                    <p>{e.content}</p>
                                </div>
                                <button><MdOutlineDelete className="delete" onClick={deleteItem} /></button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Notes;