import projectHighway from "@/assets/project-highway.jpg";
import projectRoad from "@/assets/project-road.jpg";
import { MapPin, Calendar } from "lucide-react";

const completedProjects = [
  {
    title: "Gulmi Resunga Highway",
    description: "Construction of a major highway connecting Gulmi district to the national road network. This project significantly improved transportation access for thousands of residents and boosted regional trade and tourism.",
    location: "Gulmi District, Lumbini Province",
    year: "2022",
    image: projectHighway,
  },
];

const runningProjects = [
  {
    title: "Upgrading of Shiladi Ghamir Road",
    description: "Road upgrading project in Arkhabhang Municipality, Gulmi. Converting the existing gravel road to a fully paved bituminous road with proper drainage, retaining walls, and safety features.",
    location: "Arkhabhang Municipality, Gulmi",
    year: "2024 – Present",
    image: projectRoad,
  },
];

const ProjectCard = ({ project, status }: { project: typeof completedProjects[0]; status: "completed" | "running" }) => (
  <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
    <div className="overflow-hidden h-72">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        width={1280}
        height={720}
      />
    </div>
    <div className="p-8">
      <span
        className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${
          status === "completed"
            ? "bg-green-100 text-green-800"
            : "bg-secondary/20 text-secondary"
        }`}
      >
        {status === "completed" ? "✓ Completed" : "● In Progress"}
      </span>
      <h3 className="font-display text-3xl text-card-foreground mb-3">{project.title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <MapPin className="h-4 w-4 text-secondary" />
          {project.location}
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4 text-secondary" />
          {project.year}
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-[40vh] flex items-center justify-center bg-primary">
        <div className="text-center px-4">
          <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-2">Our Portfolio</p>
          <h1 className="font-display text-5xl md:text-6xl text-primary-foreground">Projects</h1>
        </div>
      </section>

      {/* Completed */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="font-display text-4xl text-foreground mb-8">Completed Projects</h2>
          <div className="grid gap-8">
            {completedProjects.map((p, i) => (
              <ProjectCard key={i} project={p} status="completed" />
            ))}
          </div>
        </div>
      </section>

      {/* Running */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <h2 className="font-display text-4xl text-foreground mb-8">Running Projects</h2>
          <div className="grid gap-8">
            {runningProjects.map((p, i) => (
              <ProjectCard key={i} project={p} status="running" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
