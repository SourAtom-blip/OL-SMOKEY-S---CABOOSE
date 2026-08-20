import { useState } from "react";

const MAP_QUERY = "Yokuts Valley, CA 93675, United States";
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", error: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ state: "sending", error: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong");
      }
      setForm({ name: "", email: "", phone: "", message: "" });
      setStatus({ state: "success", error: "" });
    } catch (err) {
      setStatus({ state: "error", error: err.message });
    }
  }

  return (
    <main className="flex-grow pt-[100px] px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto w-full">
      <svg className="absolute hidden" height="0" width="0">
        <filter id="roughpaper">
          <feTurbulence baseFrequency="0.04" numOctaves="5" result="noise" type="fractalNoise"></feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
        </filter>
      </svg>

      <section className="relative w-full h-[409px] md:h-[512px] mb-section-gap rough-edge overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC5ovxBpqQX2dIq94eVs2vuyUfRulDIAZoWSpbGz_qYUsOwxdJg51R4YeYVU3d4L1xbijRwZ3wC3rH2SXDZEPA60jxJrw_zW-JJhAu7U1-uXEZWy1Qr0vwTXi3sJrZnIQQzrUjEVrQPcLrgiJYpbEGVAOZzVUUPo5-v2_0OwJRYocT3nYmFN4X_XXGLZUo_3rtk5OmI5FIqmMUP9GAuyMCI1np1X-AOtwnDF0e4S4uY-_GKqaGT4zaNyg')"
          }}
        ></div>
        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-display-lg-mobile md:font-display-lg text-on-primary text-center tracking-tight px-4">
            Visit the Caboose.
          </h1>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-item-gap mb-section-gap">
        <div className="md:col-span-8 bg-surface-container rounded border border-[#D4A373] p-1 relative overflow-hidden h-[400px] md:h-[500px]">
          <iframe
            title="Map of Yokuts Valley"
            className="w-full h-full border-0"
            src={MAP_EMBED_SRC}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute inset-0 texture-overlay pointer-events-none"></div>
        </div>

        <div className="md:col-span-4 flex flex-col gap-item-gap">
          <div className="bg-surface-container p-6 border border-[#D4A373] relative">
            <div className="absolute inset-0 texture-overlay pointer-events-none opacity-50"></div>
            <div className="flex items-start gap-4 mb-4">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                location_on
              </span>
              <div>
                <h3 className="font-headline-sm text-headline-sm mb-2 text-on-surface">Location</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Yokuts Valley, CA 93675,
                  <br />
                  United States
                </p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Yokuts+Valley+CA+93675"
              target="_blank"
              rel="noreferrer"
              className="block text-center w-full bg-primary-container text-on-primary font-label-bold text-label-bold uppercase px-4 py-3 border-2 border-primary-container hover:bg-[#B7410E] hover:border-[#B7410E] transition-colors mt-4"
            >
              Directions
            </a>
          </div>

          <div className="bg-surface-container p-6 border border-[#D4A373] relative flex-grow flex flex-col justify-between">
            <div className="absolute inset-0 texture-overlay pointer-events-none opacity-50"></div>
            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex items-center gap-4 border-b-2 border-[#D4A373] pb-4">
                <span className="material-symbols-outlined text-secondary">phone</span>
                <div>
                  <h3 className="font-headline-sm text-headline-sm mb-1 text-on-surface">Phone</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">+1 559-347-7314</p>
                </div>
              </div>
              <div className="flex items-center gap-4 border-b-2 border-[#D4A373] pb-4">
                <span className="material-symbols-outlined text-secondary">schedule</span>
                <div>
                  <h3 className="font-headline-sm text-headline-sm mb-1 text-on-surface">Hours</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Open until 8 PM</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="border border-primary-container text-primary-container px-3 py-1 font-label-bold text-caption uppercase rounded-sm bg-surface">
                  Dine-in
                </span>
                <span className="border border-primary-container text-primary-container px-3 py-1 font-label-bold text-caption uppercase rounded-sm bg-surface">
                  Takeout
                </span>
              </div>
            </div>
            <a
              href="tel:+15593477314"
              className="block text-center w-full bg-transparent text-[#D4A373] font-label-bold text-label-bold uppercase px-4 py-3 border-2 border-[#D4A373] hover:bg-surface-variant transition-colors mt-6 relative z-10"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="mb-section-gap max-w-2xl mx-auto w-full">
        <div className="bg-surface-container p-8 border border-[#D4A373] relative">
          <div className="absolute inset-0 texture-overlay pointer-events-none opacity-50"></div>
          <div className="relative z-10">
            <h2 className="font-headline-md text-headline-md text-on-background mb-2 text-center">Send Us a Message</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 text-center">
              Questions, catering requests, or feedback — drop us a line.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-label-bold text-label-bold uppercase text-on-surface-variant mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b-2 border-[#D4A373] focus:outline-none focus:border-secondary py-2 font-body-md text-body-md text-on-background"
                  />
                </div>
                <div>
                  <label className="block font-label-bold text-label-bold uppercase text-on-surface-variant mb-2" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b-2 border-[#D4A373] focus:outline-none focus:border-secondary py-2 font-body-md text-body-md text-on-background"
                  />
                </div>
              </div>
              <div>
                <label className="block font-label-bold text-label-bold uppercase text-on-surface-variant mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b-2 border-[#D4A373] focus:outline-none focus:border-secondary py-2 font-body-md text-body-md text-on-background"
                />
              </div>
              <div>
                <label className="block font-label-bold text-label-bold uppercase text-on-surface-variant mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-2 border-[#D4A373] focus:outline-none focus:border-secondary py-2 px-3 font-body-md text-body-md text-on-background"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status.state === "sending"}
                className="w-full bg-primary-container text-on-primary font-label-bold text-label-bold uppercase px-4 py-3 border-2 border-primary-container hover:bg-[#B7410E] hover:border-[#B7410E] transition-colors disabled:opacity-60"
              >
                {status.state === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status.state === "success" && (
                <p className="font-body-md text-body-md text-center" style={{ color: "#4a7c59" }}>
                  Thanks! We'll get back to you soon.
                </p>
              )}
              {status.state === "error" && (
                <p className="font-body-md text-body-md text-center text-error">{status.error}</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
