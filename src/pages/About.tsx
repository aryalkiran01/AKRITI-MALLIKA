import { Target, Eye, Shield, Users } from "lucide-react";
import aboutImage from "@/assets/about.png";
const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center bg-primary">
        <div className="text-center px-4">
          <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-2">
            Who We Are
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-primary-foreground">
            About Us
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl text-foreground mb-6">
              Building Excellence Since 2018
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Akriti SRP Rokect JV is a renowned construction company based in
              Gulmi, Lumbini Province, Nepal. Established as a joint venture, we
              specialize in road construction, bridge building, and large-scale
              infrastructure projects across western Nepal.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With a team of over 50 experienced engineers, technicians, and
              skilled workers, we have successfully delivered 5+ projects
              including highways, rural roads, and bridges. Our commitment to
              quality, safety, and timely delivery has earned us the trust of
              government agencies and communities alike.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We are dedicated to contributing to Nepal's development by
              building the infrastructure that connects communities and drives
              economic growth.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={aboutImage}
              alt="Akriti SRP Rokect JV Office"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1280}
              height={720}
            />
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-lg p-10">
            <Target className="h-12 w-12 text-secondary mb-4" />
            <h3 className="font-display text-3xl text-card-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To deliver world-class construction solutions that transform
              Nepal's infrastructure landscape, while maintaining the highest
              standards of safety, quality, and environmental responsibility.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-10">
            <Eye className="h-12 w-12 text-secondary mb-4" />
            <h3 className="font-display text-3xl text-card-foreground mb-4">
              Our Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To become Nepal's most trusted construction company, recognized
              for engineering excellence, innovation, and a deep commitment to
              the nation's development and prosperity.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-4xl text-foreground mb-12">
            Our Core Values
          </h2>
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
                <h3 className="font-display text-2xl text-foreground mb-3">
                  {v.title}
                </h3>
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
