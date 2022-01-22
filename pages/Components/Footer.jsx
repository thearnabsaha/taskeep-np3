const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <>
            <div className="footer">
                <h1>Copyright &copy; {year}</h1>
            </div>
        </>
    );
}

export default Footer;