const CreateNote = () => {
    return (
        <>
            <div className="createNote">
                <Form>
                    <input type="text" name="title" />
                    <textarea name="content" />
                    
                </Form>
            </div>
        </>
    );
}

export default CreateNote;