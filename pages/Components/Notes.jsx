import { MdOutlineDelete } from "react-icons/md";
const Notes = () => {
    const notes = [{title:"arnab",content:"saha"},{title:"arnab",content:"saha"},{title:"arnab",content:"saha"},{title:"arnab",content:"saha"},{title:"arnab",content:"saha"},{title:"arnab",content:"saha"},{title:"arnab",content:"saha"},{title:"arnab",content:"saha"},{title:"arnab",content:"saha"},{title:"arnab",content:"saha"},{title:"arnab",content:"saha"},{title:"arnab",content:"saha"},]

    return (
        <>
            <div className="notes">
                {
                    notes.map((e)=>{
                        return(
                            <div className="note">
                                <div className="content">
                                    <h2>{e.title}</h2>
                                    <p>{e.content}</p>
                                </div>
                                <button><MdOutlineDelete className="delete"/></button>
                            </div>
                        )
                    })
                }
                
            </div>
        </>
    );
}

export default Notes;