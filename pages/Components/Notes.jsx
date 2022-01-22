import { MdOutlineDelete } from "react-icons/md";
const Notes = () => {
    const notes = [{title:"arnab",content:"saha"},{title:"arnab",content:"saha"},{title:"arnab",content:"saha"},{title:"arnab",content:"saha"},]
    const deleteItem=() => {
        alert("this function haven't added yet")
    }
    return (
        <>
            <div className="notes">
                {
                    notes.map((e,ind)=>{
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