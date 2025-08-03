import img from '../../assets/img.jpeg'
import img_udula from '../../assets/img_udula.jpg'
import img_james from '../../assets/img_james.jpg'
import img_jaden from '../../assets/img_jaden.jpg'
import img_noah from '../../assets/img_noah.jpg'
import img_raveena from '../../assets/img_raveena.jpg'

export const About = () => {

    return(
        <section id="about" className="min-h-screen flex items-center justify-content">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h1 className="text-white font-bold text-5xl pb-7">ABOUT</h1>
                <p className="text-white text-2xl pb-7">Bridging the gap between academia and industry</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="rounded-xl p-8 border-white/10 border-5 hover:-translate-y-1 transition-all bg-gradient-to-b from-orange-700 to-orange-500">
                        <h1 className="font-bold text-3xl pb-2">Workshops</h1>
                        <p>We run data science workshops.</p>
                    </div>

                    <div className="rounded-xl p-8 border-white/10 border-5 hover:-translate-y-1 transition-all bg-gradient-to-b from-orange-700 to-orange-500">
                        <h1 className="font-bold text-3xl pb-2">Events</h1>
                        <p>We host networking events with industry professionals and educators.</p>
                    </div>

                    <div className="rounded-xl p-8 border-white/10 border-5 hover:-translate-y-1 transition-all bg-gradient-to-b from-orange-700 to-orange-500">
                        <h1 className="font-bold text-3xl pb-2">Hackathons</h1>
                        <p>We host hackathons for hands-on learning</p>
                    </div>

                </div>

                <div>
                    <h1 className="text-3xl font-bold pt-7">TEAM</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="rounded-xl p-8 border-white/10 border-5 hover:-translate-y-1 transition-all bg-gradient-to-b from-orange-700 to-orange-500">
                            <img src={img_james} className='rounded-full'/>
                            
                            <h1 className="font-bold text-3xl pb-2">James Travers</h1>
                            <p>President</p>
                        </div>

                        <div className="rounded-xl p-8 border-white/10 border-5 hover:-translate-y-1 transition-all bg-gradient-to-b from-orange-700 to-orange-500">
                            <img src={img_jaden} className='rounded-full'/>
                            <h1 className="font-bold text-3xl pb-2">Jaden Fielding</h1>
                            <p>VP Finances</p>
                        </div>

                        <div className="rounded-xl p-8 border-white/10 border-5 hover:-translate-y-1 transition-all bg-gradient-to-b from-orange-700 to-orange-500">
                            <img src={img_udula} className='rounded-full'/>
                            <h1 className="font-bold text-3xl pb-2">Udula Ravishan</h1>
                            <p>VP Communications</p>
                        </div>

                        <div className="rounded-xl p-8 border-white/10 border-5 hover:-translate-y-1 transition-all bg-gradient-to-b from-orange-700 to-orange-500">
                            <img src={img_raveena} className='rounded-full'/>
                            <h1 className="font-bold text-3xl pb-2">Raveena Kumar</h1>
                            <p>VP Events</p>
                        </div>

                        <div className="rounded-xl p-8 border-white/10 border-5 hover:-translate-y-1 transition-all bg-gradient-to-b from-orange-700 to-orange-500">
                            <img src={img_noah} className='rounded-full'/>
                            <h1 className="font-bold text-3xl pb-2">Noah Guttaman</h1>
                            <p>Chairman</p>
                        </div>

                    </div>
                    

                </div>


            </div>
        </section>
    )
}