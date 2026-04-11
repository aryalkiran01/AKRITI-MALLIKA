import { Route, Building2, Mountain, Wrench, HardHat, Truck } from "lucide-react";

const services = [
  {
    icon: Route,
    title: "Road Construction",
    description: "Construction and upgrading of highways, district roads, and rural access roads. We handle everything from earthwork and gravel to bituminous and concrete surfacing.",
  },
  {
    icon: Building2,
    title: "Bridge Construction",
    description: "Design and construction of reinforced concrete bridges, steel bridges, and culverts across rivers and valleys in challenging Himalayan terrain.",
  },
  {
    icon: Mountain,
    title: "Infrastructure Development",
    description: "Comprehensive civil engineering for public infrastructure including drainage systems, retaining walls, and slope stabilization projects.",
  },
  {
    icon: HardHat,
    title: "Building Construction",
    description: "Commercial and institutional building construction with modern techniques, from government offices to community centers and schools.",
  },
  {
    icon: Wrench,
    title: "Road Maintenance",
    description: "Periodic and routine maintenance of existing roads, including pothole repair, resurfacing, and drainage improvement for extended road life.",
  },
  {
    icon: Truck,
    title: "Earthwork & Excavation",
    description: "Large-scale earthmoving, land clearing, and site preparation using our fleet of heavy machinery and experienced operators.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-[40vh] flex items-center justify-center bg-primary">
        <div className="text-center px-4">
          <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-2">What We Offer</p>
          <h1 className="font-display text-5xl md:text-6xl text-primary-foreground">Our Services</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <service.icon className="h-14 w-14 text-secondary mb-5 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-2xl text-card-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
