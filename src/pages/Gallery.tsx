import { useState } from "react";
import heroImage from "@/assets/hero-construction.jpg";
import projectHighway from "@/assets/project-highway.jpg";
import projectRoad from "@/assets/project-road.jpg";
import aboutOffice from "@/assets/about.png";
import ca from "../assets/ca.png";
const images = [
  { src: heroImage, alt: "Highway construction aerial view" },
  { src: projectHighway, alt: "Bridge construction project" },
  { src: projectRoad, alt: "Road upgrading in rural Nepal" },
  { src: aboutOffice, alt: "Company office building" },
  { src: ca, alt: "Company works" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-[40vh] flex items-center justify-center bg-primary">
        <div className="text-center px-4">
          <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-2">
            Our Work in Pictures
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-primary-foreground">
            Gallery
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg cursor-pointer group aspect-video"
                onClick={() => setSelectedImage(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-primary/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
