import { Link } from "react-router-dom";
import { ArrowRight, Building2, Route, Mountain, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import projectHighway from "@/assets/project-highway.jpg";
import projectRoad from "@/assets/project-road.jpg";

const stats = [
  { value: "5+", label: "Projects Completed", icon: Trophy },
  { value: "8+", label: "Years Experience", icon: Building2 },
  { value: "50+", label: "Team Members", icon: Mountain },
  { value: "5", label: "Districts Served", icon: Route },
];

const services = [
  {
    title: "Road Construction",
    description:
      "Building and upgrading highways, rural roads, and urban streets across Nepal.",
    icon: Route,
  },
  {
    title: "Bridge Construction",
    description:
      "Engineering durable bridges over rivers and valleys in challenging terrain.",
    icon: Building2,
  },
  {
    title: "Infrastructure Development",
    description:
      "Comprehensive civil engineering solutions for public and private infrastructure.",
    icon: Mountain,
  },
];

const testimonials = [
  {
    name: "Ram Bahadur Thapa",
    role: "District Engineer, Gulmi",
    text: "Akriti SRP Rocket JV has consistently delivered high-quality road construction projects on time. Their commitment to excellence is unmatched.",
  },
  {
    name: "Sita Sharma",
    role: "Municipal Officer, Arkhabhang",
    text: "The road upgrading project has transformed connectivity in our municipality. Professional work and great communication throughout.",
  },
  {
    name: "Bishnu Prasad Poudel",
    role: "Project Consultant",
    text: "Working with Akriti SRP has been a pleasure. Their engineering expertise and dedication to safety standards are commendable.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Highway construction project in Nepal mountains"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-secondary font-medium tracking-widest uppercase text-sm md:text-base mb-4 animate-fade-in-up">
            Building Nepal's Future
          </p>
          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Akriti SRP Rocket JV
          </h1>
          <p
            className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            A leading construction company specializing in road construction,
            bridge building, and infrastructure development across Nepal.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded font-semibold hover:bg-secondary/90 transition-colors"
            >
              View Our Projects <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded font-semibold hover:border-secondary hover:text-secondary transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-12">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center animate-count-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <stat.icon className="h-8 w-8 text-secondary mx-auto mb-2" />
              <div className="font-display text-4xl md:text-5xl text-primary-foreground">
                {stat.value}
              </div>
              <div className="text-primary-foreground/60 text-sm mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-2">
              What We Do
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              Our Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <service.icon className="h-12 w-12 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-2xl text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all"
            >
              View All Services <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-2">
              Our Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              Featured Projects
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="overflow-hidden h-64">
                <img
                  src={projectHighway}
                  alt="Gulmi Resunga Highway"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={1280}
                  height={720}
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  Completed
                </span>
                <h3 className="font-display text-2xl text-card-foreground mb-2">
                  Gulmi Resunga Highway
                </h3>
                <p className="text-muted-foreground">
                  A major highway connecting Gulmi district to the regional road
                  network, enhancing transportation and economic development.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="overflow-hidden h-64">
                <img
                  src={projectRoad}
                  alt="Shiladi Ghamir Road Upgrading"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={1280}
                  height={720}
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-secondary/20 text-secondary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  In Progress
                </span>
                <h3 className="font-display text-2xl text-card-foreground mb-2">
                  Upgrading of Shiladi Ghamir Road
                </h3>
                <p className="text-muted-foreground">
                  Road upgrading project in Arkhabhang Municipality, Gulmi —
                  improving connectivity for rural communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-2">
              Testimonials
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              What People Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-8"
              >
                <p className="text-muted-foreground italic leading-relaxed mb-6">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-semibold text-card-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-4">
            Ready to Build Together?
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Whether it's a highway, bridge, or infrastructure project — we
            deliver excellence.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded font-semibold hover:bg-secondary/90 transition-colors"
          >
            Get in Touch <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
