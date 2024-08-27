import './footer.css'
import Social from './building-blocks/socialicons';

function Footer(){
    return (
        <div className="footer-section">
            <div className="footer-left"> 
                <p>© 2024 Le Petit Croissant</p>
                <p>4721 N Paulina St Chicago, IL 60640</p>
            </div>
            <div className="footer-middle"> 
                <p>Tue-Fri: 6AM-2PM</p> 
                <p>Sat-Sun: 6AM-6PM</p>
                <p>Closed Mondays</p>
             </div>
             <div className="footer-right">
                <Social iconGap="15px" iconSize="20px"/>
             </div>
             
        </div>
    )
}

export default Footer;