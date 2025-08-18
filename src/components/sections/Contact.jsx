import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () =>{
    return(
        <RevealOnScroll>
        <section id="contact" className="min-h-screen flex items-center justify-center">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-5xl pb-2 font-bold">Contact Us</h1>
                <h1 className="text-2xl pb-2 font-bold">dscodatascience@gmail.com</h1>
                <div className="space-x-4">
                    <button className="rounded-xl p-4 border-white/10 border-5 hover:-translate-y-1 transition-all bg-gradient-to-b from-orange-500 to-orange-400" onClick={() => window.open("https://www.instagram.com/dscottawa/", "_blank")}><FontAwesomeIcon icon={faInstagram} size="2x" /></button>
                    <button className="rounded-xl p-4 border-white/10 border-5 hover:-translate-y-1 transition-all bg-gradient-to-b from-orange-500 to-orange-400" onClick={() => window.open("https://www.linkedin.com/company/dscottawa/", "_blank")}><FontAwesomeIcon icon={faLinkedinIn} size="2x" /></button>

                </div>
                    
                
            </div>

        </section>
        </RevealOnScroll>


    )
}