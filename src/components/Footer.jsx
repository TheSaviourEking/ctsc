import { Link } from "react-router-dom";

/** FONT AWESOME */
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row gy-4">
                    <div className="col-10 col-md-5">
                        <h4 className="mb-3">CRACKING THE STYLE CODE</h4>
                        <p>We believe that valuable content should be <br />
                            easily accessible to empower Link diverse global <br /> audience.</p>
                        <Link href="#"><span className="footer-icon" style={{ marginLeft: 0 }}><i className="fa-brands fa-facebook-f"></i><FaFacebookF/></span>
                        </Link >
                        <Link href="#"><span className="footer-icon"><FaTwitter /></span>
                        </Link >
                        <Link href="#"><span className="footer-icon"><FaInstagram /></span>
                        </Link >
                    </div>

                    <div className="col-10 col-md-3">
                        <h4>Pages</h4>
                        <h6><Link href="/index.html">Home</Link ></h6>
                        <h6><Link href="/mkpo-nnyin/mkpo-nnyin.html">Mkpo Nnyin</Link ></h6>
                        <h6><Link href="/news-and-stories/news-and-stories.html">News & Stories</Link ></h6>
                        <h6><Link href="Link bout-ctscLink bout-us.html">About CTSCode</Link ></h6>
                    </div>

                    <div className="col-10 col-md-4">
                        <h4>Get In Touch</h4>
                        <p>Email: <Link href="mailto:ourstory@crackingthestyleco.de?subject=Submit%20your%20story%20anonymously"
                            target="_blank">ourstory@crackingthestyleco.de</Link ></p>
                        <p>Phone</p>
                    </div>
                </div>
            </div>
            <div className="text-center copy-right">All Rights Reserved. &copy;2024 cracking the style code</div>
        </footer>
    )
}

export default Footer;
