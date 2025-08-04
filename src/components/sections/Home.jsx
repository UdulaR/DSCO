import DS2 from '../../assets/DS2.webp'
import DS4 from '../../assets/DS4.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-orange-700 to-orange-300">
            {/* Overlay image behind text, normal size and slightly lower */}
            <img
    src={DS4}
    alt="Overlay"
    className="absolute left-1/2 bottom-0 transform -translate-x-1/2 opacity-100 z-0 pointer-events-none"/>
            <div className="text-center px-4 relative z-10">
                <h1 className="text-3xl md:text-7xl font-bold">DATA SCIENCE CLUB</h1>
                <h1 className="text-1xl md:text-3xl font-bold text-right">OTTAWA</h1>
                <button className="transform hover:-translate-y-2 ease-in duration-250" onClick={() => window.open("https://www.instagram.com/dscottawa/", "_blank")}>
                    <FontAwesomeIcon icon={faInstagram} size="3x" />
                </button>
            </div>
        </section>
    )
}