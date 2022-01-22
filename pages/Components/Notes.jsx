import { MdOutlineDelete } from "react-icons/md";
const Notes = () => {
    const notes = [{title:"arnab",content:"saha",key:1},{title:"arnab",content:"saha",key:1},{title:"arnab",content:"saha",key:1},{title:"arnab",content:"saha",key:1},]
    const deleteItem=() => {
        
    }
    return (
        <>
            <div className="notes">
                {
                    notes.map((e)=>{
                        return(
                            <div className="note" key={e.key}>
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