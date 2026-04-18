import { Target, Eye, Shield, Users } from "lucide-react";
import aboutImage from "@/assets/about.png";
import HeroSection from "@/components/HeroSection";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <HeroSection
        title="Who We Are"
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "About Us", path: "/aboutus" },
        ]}
        backgroundImage="https://img.freepik.com/free-photo/portrait-engineer-job-site-work-hours_23-2151589654.jpg"
      />

      {/* Content */}
      <section className="section-padding">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl text-foreground mb-6">
              Building Excellence Since 2018
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Akriti SRP Rocket JV is a renowned construction company based in
              Gulmi, Lumbini Province, Nepal...
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With a team of over 50 experienced engineers...
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We are dedicated to contributing to Nepal's development...
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={aboutImage}
              alt="Akriti SRP Rocket JV Office"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-lg p-10">
            <Target className="h-12 w-12 text-secondary mb-4" />
            <h3 className="font-display text-3xl mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To deliver world-class construction solutions...
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-10">
            <Eye className="h-12 w-12 text-secondary mb-4" />
            <h3 className="font-display text-3xl mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              To become Nepal's most trusted construction company...
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-4xl mb-12">Our Core Values</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Safety First",
                desc: "Strict adherence to safety protocols at every project site.",
              },
              {
                icon: Target,
                title: "Quality Assured",
                desc: "We use the best materials and engineering practices.",
              },
              {
                icon: Users,
                title: "Community Focus",
                desc: "Our projects uplift communities and create lasting impact.",
              },
            ].map((v, i) => (
              <div key={i} className="p-8">
                <v.icon className="h-10 w-10 text-secondary mx-auto mb-4" />
                <h3 className="font-display text-2xl mb-3">{v.title}</h3>
                <p className="text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
