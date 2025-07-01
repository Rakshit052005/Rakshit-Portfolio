import { ArrowDown } from "lucide-react";


export const HeroSection = () => {
    return (
        <section id="hero" 
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:txt-6xl font-bold tracking-light">
                        <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">Rakshit</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I am a final-year Computer Science Engineering student at Chandigarh University with a strong work ethic and a passion for technology. Originating from Haryana, I bring a diverse perspective and a determined attitude to all my endeavors. I am eager to leverage my skills and knowledge to contribute to innovative projects and further my growth in the tech industry. <br></br> <br></br>

                       💡 Continuously learning, consistently building, and striving for growth every day.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View my Projects
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -transform-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>

        </section>
    );
};