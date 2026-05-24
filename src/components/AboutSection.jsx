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
                            I'm a Web Developer and Computer Science graduate at Chandigarh University, passionate about building modern, responsive, and functional websites. I specialize in crafting clean UI/UX using HTML, CSS, JavaScript, and React.js, while also integrating backend features with Node.js, Express.js, and databases like MongoDB and SQL. Through academic projects and an internship at CodTech IT Solutions, I’ve developed real-world applications like portfolio websites, an e-learning platform, a weather dashboard, and a dynamic furniture e-commerce site — focusing on both performance and user experience.

                        </p>

                        <p className="text-muted-foreground">
                            I actively explore new tools, contribute on GitHub, and solve coding challenges on LeetCode to keep improving. I’m open to internship and project opportunities where I can contribute to impactful web development work and continue learning with a passionate team. <br></br> <br></br>

                            Skills: HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, SQL, C++, Git, API Integration, Responsive Design.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get in Touch
                            </a>

                            <a href="rakshit_cv 1.pdf" download className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download Resume 1
                            </a>

                            <a href="RR1.pdf" download className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download Resume 2
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
                                        Developing performant, accessible, and mobile-responsive user interfaces leveraging modern front-end frameworks.
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
                                        Worked on frontend web development and built several responsive and user-friendly projects.
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