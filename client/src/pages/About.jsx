export default function About() {
  return (
    <main className="flex-grow pt-[88px]">
      <section className="relative w-full h-[614px] md:h-[716px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBMTBdD-a0P9TVjZl9e2wQc3Cm62rMbBBANqc8QPn5MYJAoc8ToeicA7lX-ViPpcMD10_409SadTWheGF1jIBGrtn91Vp-pMFObEQNEerBbFqmA22jkgvVfLvKOBbKeC5AUz1VuYl-ckRbfdJCHxGE56azWiG_iPfzRaLfsz2xlKFTO7GBtF8RU6zXDAZfpdQx9Csbe2loa1A_GqJqYBBC48xhghpavP7gPNdW4QPhEr7Jv4uKvZ9BymQ')"
          }}
        ></div>
        <div className="absolute inset-0 bg-primary/70"></div>
        <div className="relative z-10 text-center px-gutter max-w-4xl mx-auto">
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-surface-bright rough-edge-shadow uppercase tracking-wide mb-6">
            The Smoke Behind the Flavor
          </h1>
          <p className="font-body-lg text-body-lg text-surface-variant md:px-20">
            Yokuts Valley, CA | A Reputation Forged in Fire
          </p>
          <div className="mt-8 flex justify-center items-center gap-2 text-secondary-fixed">
            {["star", "star", "star", "star", "star_half"].map((icon, i) => (
              <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                {icon}
              </span>
            ))}
            <span className="font-label-bold text-label-bold text-surface-bright ml-2">4.2 Star Rating</span>
          </div>
        </div>
      </section>

      <section className="py-section-gap px-gutter max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-item-gap items-center">
          <div className="md:col-span-5 relative">
            <div className="absolute inset-0 bg-tertiary-fixed translate-x-4 translate-y-4 rounded-sm"></div>
            <div
              className="relative z-10 w-full aspect-square bg-cover bg-center border border-[#D4A373] shadow-[4px_4px_0px_0px_#212121]"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBQLpfHIL4cdjeTam1aXr-5-0-YNsn4uR8rhZpTCEM2S8Bb-HSt19oyYLqBPj5yANSCF4XTWZC6GgyzbGD9LvFbYMX1g3TOUP6bSyUisD6-7EdxMu2lBmrVsg9XEesm01qtSm4fsXGLsR1euDiovisWNwaGZJRaCLZWjMqd1-OjSm-zjpnX4seh5tOLr_0eQDQ6yaMqdzIXv0KdeWjLg0pIugLsKnqMPPlLIQ5kevZnSy1CaITzXZxL1w')"
              }}
            ></div>
          </div>
          <div className="md:col-span-7 md:pl-10 mt-8 md:mt-0">
            <div className="inline-block border-2 border-primary-container px-4 py-1 mb-6 rounded-sm">
              <span className="font-label-bold text-label-bold uppercase tracking-widest text-primary-container">
                Our Heritage
              </span>
            </div>
            <h2 className="font-headline-md text-headline-md text-primary-container mb-6">The Caboose Experience</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              Nestled in the heart of Yokuts Valley, CA, Ol' Smokey's isn't just a restaurant; it's a destination. Operating
              out of a meticulously restored vintage train caboose, we've built our legacy on the uncompromising principles of
              traditional Central Texas barbecue infused with West Coast ruggedness.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              We don't rely on shortcuts. Every piece of meat that crosses our cutting block has been perfectly seasoned with
              our proprietary rub and slow-smoked over aged local oak. It's a labor of love that requires patience, precision,
              and an intuitive understanding of the fire.
            </p>
          </div>
        </div>
      </section>

      <section className="py-section-gap bg-surface-container-low px-gutter border-y border-outline-variant relative">
        <div className="texture-overlay absolute inset-0"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="font-headline-md text-headline-md text-primary-container">Crafted by Fire</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            <div
              className="md:col-span-2 md:row-span-2 bg-cover bg-center rounded-sm border border-[#D4A373] relative group overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCqrMrtWI9BnW6sdw1myRDBt8N8qnw0YJOv7Fv15JZKaJXHWx8xVnq1SCuF2-OP7M-lz8onKplwFmHOOp2tG19I3IT7uekcxk6oEq2TlbowZ9YTyVXI2a6r6rDqAk3y8e3_9OwBb1R1LgZRGGrzQ3q0b2sOEQlLtPCEhW8Mx0GyM4C5gFryZBxnJjfFdyGsIW50WYTqlRPZKmw2iHkL6NN6Cvs15ILVCRXDS-5L9bdUMQI4-71enHFXtg')"
              }}
            >
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300"></div>
              <div className="absolute bottom-6 left-6 bg-surface-bright px-4 py-2 rounded-sm border border-primary-container">
                <span className="font-label-bold text-label-bold uppercase">Perfectly Seasoned</span>
              </div>
            </div>
            <div
              className="bg-cover bg-center rounded-sm border border-[#D4A373] relative group overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA7xFri3ECFCxxeXRcvvwd7h1oAnuAM3ZkzA1kUNIBTl79LWdN-i7BCwe6b0WDHW6GxVBJYIzCAU68twkDExMcD9117qZb2YXOIvOuFykj3OASeZVFsKTWSVyT4d9lEPTMSIln9tmZ04EuPvUIhUsvPXUDsuZBDGT6WWWREYTmxs8nFBgzsBgypvnQXfOMf3_mUuGoQsJmCvQS8i82qyZbEINNlOtioyq-cWmMGkG54mUfIo-MaF_Jpgw')"
              }}
            >
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300"></div>
            </div>
            <div className="bg-primary-container text-surface-bright p-8 flex flex-col justify-center rounded-sm relative overflow-hidden">
              <span className="material-symbols-outlined text-[48px] text-[#B7410E] mb-4">local_fire_department</span>
              <h3 className="font-headline-sm text-headline-sm mb-2">The Pit Team</h3>
              <p className="font-body-md text-body-md text-surface-variant">
                Dedicated professionals who treat every shift like a performance. No compromises.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
