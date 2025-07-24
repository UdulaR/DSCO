
export const About = () => {

    return(
        <section id="about" className="min-h-screen flex items-center justify-content">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h1 className="text-white font-bold text-5xl pb-7">ABOUT</h1>
                <p className="text-white text-lg pb-7">Bridging the gap between academia and industry</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="rounded-xl p-8 border-white/10 border-5 hover:-translate-y-1 transition-all">
                        <h1 className="font-bold text-3xl pb-2">Workshops</h1>
                        <p>We do workshops to teach about data science</p>
                    </div>

                    <div className="rounded-xl p-8 border-white/10 border-5 hover:-translate-y-1 transition-all">
                        <h1 className="font-bold text-3xl pb-2">Events</h1>
                        <p>We do workshops to teach about data science</p>
                    </div>

                    <div className="rounded-xl p-8 border-white/10 border-5 hover:-translate-y-1 transition-all">
                        <h1 className="font-bold text-3xl pb-2">Hackathons</h1>
                        <p>We do workshops to teach about data science</p>
                    </div>

                </div>

                <div>
                    <h1 className="text-3xl font-bold pt-7">TEAM</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="rounded-xl p-8 border-white/10 border-5 hover:-translate-y-1 transition-all">
                            <h1 className="font-bold text-3xl pb-2">James Travers</h1>
                            <p>President</p>
                        </div>

                        <div className="rounded-xl p-8 border-white/10 border-5 hover:-translate-y-1 transition-all">
                            <h1 className="font-bold text-3xl pb-2">Jaden Fielding</h1>
                            <p>President</p>
                        </div>

                        <div className="rounded-xl p-8 border-white/10 border-5 hover:-translate-y-1 transition-all">
                            <h1 className="font-bold text-3xl pb-2">Udula Ravishan</h1>
                            <p>President</p>
                        </div>

                        <div className="rounded-xl p-8 border-white/10 border-5 hover:-translate-y-1 transition-all">
                            <h1 className="font-bold text-3xl pb-2">Noah Guttaman</h1>
                            <p>President</p>
                        </div>

                    </div>
                    

                </div>


            </div>
        </section>
    )
}