import img from '../images/logo.jpg'

const Footer = () => {
    return (
        <>
            <h1 style={{ fontSize: '4vw', textAlign: 'center' }}>Our Partners</h1>
            <div className="footer">
                <div className="footer-box1">
                    <div className="f-logo">
                        <img src={img} alt="" style={{ width: '100%' }} />
                    </div>
                    <h1>LAPCARE.</h1>
                </div>

                <div className="footer-box2">
                    <div className="partner-box">
                        <img src="https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png" alt="" />
                    </div>

                    <div className="partner-box">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/450px-Dell_Logo.svg.png?20160807135325" alt="" />
                    </div>
                </div>
            </div>

            <hr />
            <footer>
                <div className="details address">
                    <div>
                        <p>
                            Lapcare Technologies Inc.
                        </p>
                        <p>
                            Round Rock, TX 78682, United States
                        </p>
                    </div>

                    <p style={{ textAlign: 'center' }}>Lapcare © 2023 . All Rights Reserved.</p>

                    <div className="contacts">
                        <p>Phone: +971 52 746 4004 </p>
                        <p>Email: support@laptopbazar.ae</p>
                    </div>
                </div>
                
            </footer>
        </>
    );
}

export default Footer;