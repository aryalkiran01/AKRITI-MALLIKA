import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    // Simulate sending
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
      });
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-[40vh] flex items-center justify-center bg-primary">
        <div className="text-center px-4">
          <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-2">
            Get in Touch
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-primary-foreground">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="font-display text-3xl text-foreground mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-card border border-border rounded-lg px-4 py-3 text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                maxLength={100}
              />
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-card border border-border rounded-lg px-4 py-3 text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                maxLength={255}
              />
              <textarea
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="bg-card border border-border rounded-lg px-4 py-3 text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                maxLength={1000}
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors disabled:opacity-50"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="h-5 w-5" /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Info + Map */}
          <div>
            <h2 className="font-display text-3xl text-foreground mb-6">
              Contact Information
            </h2>
            <div className="flex flex-col gap-6 mb-8">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-secondary shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Address</p>
                  <p className="text-muted-foreground">
                    Gulmi, Lumbini Province, Nepal
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-secondary shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p className="text-muted-foreground">+977-9827514282</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-secondary shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground">
                    info@aakritisrp.com.np
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-lg overflow-hidden border border-border h-64">
              <iframe
                title="Akriti SRP Rokect JV Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112877.79843!2d83.2!3d28.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3997e0d1c1d1e6a7%3A0x1234567890abcdef!2sGulmi%2C%20Nepal!5e0!3m2!1sen!2snp!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
