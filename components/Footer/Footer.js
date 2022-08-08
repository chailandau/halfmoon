const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className="wrapper">
                <p>
                    Copyright © {currentYear} <span>Half Moon Tavern</span>
                </p>
                <p>Website by Chai Landau</p>
            </div>
        </footer>
    );
};

export default Footer;
