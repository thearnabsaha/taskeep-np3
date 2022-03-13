const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <>
            <div className="footer">
                <h3>Copyright &copy; {year}</h3>
            </div>
        </>
    );
}

export default Footer;