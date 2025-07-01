import { cn } from "@/lib/utils";
import { useState } from "react";

const skills = [
    { name: "C/c++", level: 95, category: "Languages" },
    { name: "Java", level: 95, category: "Languages" },
    { name: "HTML/CSS/JavaScript", level: 98, category: "Languages" },
    { name: "DBMS", level: 90, category: "Technologies" },
    { name: "Operating System", level: 90, category: "Technologies" },
    { name: "Computer Network", level: 85, category: "Technologies" },
    { name: "Data Structure and Algorithm", level: 85, category: "Technologies" },
    { name: "React.JS", level: 90, category: "Frameworks" },
    { name: "Node.JS", level: 85, category: "Frameworks" },
    { name: "Express.JS", level: 80, category: "Frameworks" },
    { name: "SQL", level: 85, category: "Database" },
    { name: "MongoDB", level: 85, category: "Database" },
    { name: "VS Code", level: 95, category: "Tools" },
    { name: "Git/GitHub", level: 90, category: "Tools" },
    { name: "Code Block", level: 90, category: "Tools" },
    { name: "Problem Solving", level: 90, category: "Soft Skills" },
    { name: "Team Work", level: 90, category: "Soft Skills" },
    { name: "Decision Making", level: 95, category: "Soft Skills" },
    { name: "Adaptability", level: 90, category: "Soft Skills" },
    { name: "Leadership", level: 85, category: "Soft Skills" },
    { name: "Creative Thinking", level: 90, category: "Soft Skills" },
];


const categories= ["all", "Languages", "Technologies", "Frameworks", "Database", "Tools", "Soft Skills"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filterSkills = skills.filter
        ((skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return(
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) =>(
                        <button 
                            key={key} 
                            onClick={() => setActiveCategory(category)}
                            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filterSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full h-2 rounded-full bg-gray-700 relative overflow-hidden">

                            <div className="w-full h-2 rounded-full bg-gray-300 relative overflow-hidden">
                            <div
                                className="absolute top-0 left-0 h-full bg-primary rounded-full animate-[grow_1.5s_ease-out]"
                                style={{ width: skill.level + "%" }}
                            />
                            </div>
                            </div>


                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
