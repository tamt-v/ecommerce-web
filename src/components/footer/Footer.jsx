import './Footer.css';
import { CiFacebook } from 'react-icons/ci';
import { PiTiktokLogo } from 'react-icons/pi';


const Footer = () => {
    return ( 
        <div className='footer'>
            <div className="footer-top">
                <div className="ft-info">
                    <div className="ft-title">
                        GENERAL INFORMATION
                    </div>
                    <div className="ft-content">
                        <p><span className='highline-color'>TiTi Sports</span> is a badminton store system with more than 50 branches nationwide, providing wholesale and retail badminton equipment from movement to professional.</p>
                        <br/>
                        <p><span className='highline-color'>With the mission:</span> "TiTi is committed to bringing the best quality products and services to sports players to improve their own health."</p>
                        <br/>
                        <p><span className='highline-color'>Vision:</span> "Become the largest distributor and manufacturer of sports in Vietnam"</p>
                    </div>
                </div>
                <div className="ft-info">
                    <div className="ft-title">
                        CONTACT INFO
                    </div>
                    <div className="ft-content">
                        <p>Store system: <span className='highline-color'>56 stores nationwide</span></p>
                        <p className='highline-color'>View all TiTi stores</p>
                        <br/>
                        <p>Hotline: <span className='highline-color'>0948764111</span></p>
                        <p>Email: <span className='highline-color'>titishop@titi.com</span></p>
                        <div className="ft-icon">
                            <CiFacebook />
                            <PiTiktokLogo />
                        </div>
                    </div>
                </div>
                <div className="ft-info">
                    <div className="ft-title">
                        POLICY ONLY
                    </div>
                    <div className="ft-content">
                        <li>Return and refund policy</li>
                        <li>Warranty Policy</li>
                        <li>Complaint handling policy</li>
                        <li>Shipping Policy</li>
                        <li>Terms of use</li>
                        <li>Information Privacy Policy</li>
                        <li>Franchise Policy</li>
                    </div>
                </div>
                <div className="ft-info">
                    <div className="ft-title">
                        INSTRUCT
                    </div>
                    <div className="ft-content">
                        <li>Learn about tennis training before the tournament</li>
                        <li>Lining size chart - How to choose the size of lining clothes, Lining badminton shoes</li>
                        <li>Instructions on how to practice tennis for beginners</li>
                        <li>Instructions on how to choose badminton rackets for beginners</li>
                        <li>Payment Guide</li>
                        <li>Warranty Check</li>
                        <li>Check your order</li>
                    </div>
                </div>
            </div>
            <div className="footer-bot">
                <p>TiTi SPORTS CO., LTD</p>
                <p>Business license number 0123456789 issued by the Department of Planning and Investment of Ho Chi Minh City on July 7, 2023</p>
                <p>Website Director/Owner: Tamt-v</p>
            </div>
        </div>
     );
}
 
export default Footer;