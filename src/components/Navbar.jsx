
export const Navbar = ()=>{

    return ( <nav className="fixed top-0 w-full z-40 backdrop-blur-lg border-b shadow-lg">
        <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-bold">DSCO</a>

                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden">
                    &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-8 font-bold">
                    <a href="#home" className="text-white">Home</a>
                    <a href="#events" className="text-white">Events</a>
                    <a href="#about" className="text-white">About</a>
                    <a href="#contact" className="text-white">Contact</a>

                </div>
            </div>
        </div>

    </nav>

    )
}