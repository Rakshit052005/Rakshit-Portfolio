import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About<span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Software developer</h3>

                        <p className="text-muted-foreground">
                            I am a Software Developer and Computer Science Engineering graduate from Chandigarh University, passionate about building scalable and user-friendly web apps. My expertise lies in Full-Stack Web Development, with experience in HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and SQL.

                        </p>

                        <p className="text-muted-foreground">
                            
                            During my academic journey and internship at CodTech IT Solutions, I developed portfolio websites, e-learning platforms, weather dashboards, chat applications, and e-commerce solutions. These experiences strengthened my skills in frontend development, backend integration, database management, REST APIs, and problem-solving.

                        </p>

                        <p className="text-muted-foreground">
                            I am passionate about software engineering, clean code practices, and continuous learning while strengthening my problem-solving skills through Data Structures & Algorithms in C++. Currently seeking opportunities as a Software Developer or Full-Stack Developer. <br></br> <br></br>

                            💻 Skills: React.js, JavaScript, Node.js, Express.js, MongoDB, SQL, HTML, CSS, C++, Git, GitHub, REST APIs, Data Structures & Algorithms, Responsive Web Design.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get in Touch
                            </a>

                            <a href="Rakshit_CV.pdf" download className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>

                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Web Development
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Building responsive and interactive web applications with a focus on performance, usability, and seamless user experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        DSA & Problem Solving
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Strengthening Data Structures and Algorithms through hands-on coding and problem-solving on competitive platforms like LeetCode.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        System Design
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Understanding application architecture, database design, API integration, and scalable development practices through academic and real-world projects.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </section>
    );
};