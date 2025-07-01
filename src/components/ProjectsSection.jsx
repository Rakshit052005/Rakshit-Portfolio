import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Weather Dashboard",
        description: " Built a dynamic Weather Dashboard using React.js, JavaScript, HTML5, and CSS3 that displays real-time weather and a 5-day forecast via public APIs. Integrated city-based search, recent history, and responsive design to ensure consistent cross-device user experience. ",
        image: "/projects/weather dashboard.jpg",
        tags: ["HTML5", "CSS3", "JavaScript", "React.js"],
        demoUrl: " https://codesandbox.io/p/github/Rakshit052005/Weather-Dashboard/main?import=true&workspaceId=ws_9sHgbim9Bmua7p18DNj5uT",
        githubUrl: "https://github.com/Rakshit052005/Weather-Dashboard",
    }, 
    {
        id: 2,
        title: "Furni-Sphere Website",
        description: " Built Furni-Sphere, a responsive e-commerce website for furniture using HTML, CSS, JavaScript, and PHP, with user login, product listings, and shopping cart functionality. Integrated front-end and back-end components to deliver smooth navigation, dynamic product views, and device-optimized UI/UX experience. ",
        image: "/projects/furnisphere.jpg",
        tags: ["HTML", "CSS", "JavaScript", "PHP"],
        demoUrl: "http://localhost/furniture-shop-main/index.php",
        githubUrl: "https://github.com/Rakshit052005/HomeHaven-Website",
    },
    {
        id: 3,
        title: "Snake Game using C++ and Data Structures ",
        description: " Designed and implemented a console-based Snake Game in C++ utilizing fundamental DSA concepts like arrays, queues, and BFS/DFS for auto-play logic. Incorporated game loop, real-time input handling, collision detection, and pathfinding to enhance gameplay and logic efficiency. ",
        image: "/projects/snake.jpg",
        tags: ["c++"],
        githubUrl: "https://github.com/Rakshit052005/Snake-Game",
    },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Rakshit052005"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};