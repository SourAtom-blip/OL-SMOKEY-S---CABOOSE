import { Link } from "react-router-dom";

const categories = [
  {
    title: "Burgers",
    image: "/images/burgers-category.jpg"
  },
  {
    title: "Sandwiches",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkDbqTRok-GMJPtVZRu6Sn3RHbrNHOOWgqIoaXPjf5tIGewEYd6gsx7OTOEuAiidDQ9Uvg0YagQl7UCYoxZ64Xc2ZLLsIOHaz2I3pxAwMREQdR2OpvidGvY5rJh71IkZuFdFIbC37DxtQcVFRdvodGYXVkWUv1ebPwBX2f8uAazuUV2Q4P1Wo2F8FAKGNd-tKUkpyEyq1SKHygLq2nYGxWyVlIO9cEkJzLFDO6P8E7i-ujvhS6eJrL7A"
  },
  {
    title: "Sides",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC61TidzApPEI76EyG-NSPhQzLNF3kHoGFqulGYLD6QOX19Uvr4PMwIrLL8Ja4AAtkOLN3I7gHQIQjhQx95R4LoufuAmPGRHjsB5BhWEHdsX7GOYKYM3l_UtbKW4k7M_wHIsVy7gourStTYvIOu4uVCelxAyjRuOBFNIBj-MoOP3GKFt5Cn6HALM5EuvD5S93vVb9eS0LuyMSofN9g6gYT52G5y9WjTFGaw7fWNp5KsA44JyLPewl5JlA"
  }
];

const favorites = [
  {
    name: "Sirloin Philly Cheesesteak",
    price: "$20.70",
    desc: "Shaved sirloin, grilled peppers, onions, melted provolone on a toasted hoagie.",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1VThIt6zwiX5_0j8KrQBtQ8kNFhnvLXLRykRxUtDaoaMeetfCGF7R5pQABKy-_WDmzBbeMPHZmAcnhsCrNYs--9e2d7X-fOo-fUUzjyQv8ONw_TLRndc_HmPRtZpt9h017CZM3rx7x8TRY42zA1X4R_lljLGsuZ3k8FS0rTRlasPDAjsGuWTwGcrTwb74zqDWDsmY5WgLLOHNjL9AKOGFwgT0Z-rw6rQnasGYhyN1uTQ_Y-8zNcblXRqos"
  },
  {
    name: "Tri-Tip",
    price: "$23.00",
    desc: "Smoked sliced tri-tip, house BBQ sauce, crispy onions on an artisan bun.",
    badge: true,
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1UXIRuTUbUjxzUC0ZkNyWKqwQcy7FNn7gKW-3Sm5qmHsQODASxOxMtUmcI5u1QV9TxT-gmJv2d3Gdt18LRWp1gesBwhzXOkGcq3d6JdEqNwqDxA-9NNrlkkVcnttCxCMS0vnxzliofuFFSt6NBX1Mh7VCR5y4Z6UmUYnjBpW_kqRPeuFYX3bodi1x0VfRl4X_awMwfNZeZhLFM3IbLHNf3G7vK2SR_Ed3HistMBwtBYr9BnP2dKdhIs8gfw"
  },
  {
    name: "Western Burger",
    price: "$20.00",
    desc: "Bacon, cheddar, onion rings, BBQ sauce.",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1UCMyhNwO2-LoM708B3ZRumfCIxrnz8kdwToI_RH-ooBJ5sV7ApuoTVLNv0bANwAHI7JXHt2RXbszVbFu45KQ21TRCRxARjwpLF5z-Xbs97hmiAGkZhlajoCu9Wi-hiSoGmidjebPUio59D6Rma51bRmxoIgNUqD5-EcQhBa3HeyWtk83X9VmUneP-uZ1YDXFirZiTmw0M8inG35MShV9jycafVlMg_61f3S9-bZIUxSGT5YbFQuQB5s8rZ"
  }
];

export default function Home() {
  return (
    <main className="pt-[88px] max-w-7xl mx-auto">
      <section className="relative w-full h-[819px] min-h-[600px] flex items-center justify-center px-margin-mobile md:px-margin-desktop mb-section-gap overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="bg-cover bg-center w-full h-full"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuASs3FCLsvPXHKoRcGTScrVgJARirfXQc-to_UyI5hJfgTwxyj4HoshHw43hJByqyBBK-Xm3MtLVJF355plImZ0l-3HnqgY8dJJEfLrQcYtYiGuU5v-Rdz_Wf919pSUoQKUkdJajNyEaoJ751Xs9EEnCw9atq4hKXrtTxpyN678iUWEie9gBux-NBgkUYMM6b0UaBVh56GTUX10vyCitfp1cdi1SZaBzUWCIbcb8TN_R_HZlG7xGcAQ2Q')"
            }}
          ></div>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-on-primary max-w-3xl flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4 bg-primary-container/80 px-4 py-2 rounded-full border border-secondary text-secondary-fixed-dim backdrop-blur-sm">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
              star
            </span>
            <span className="font-label-bold text-label-bold">4.2 (5 Reviews)</span>
          </div>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary mb-6 text-rough uppercase tracking-tight">
            Real Smoke.
            <br />
            Real Flavor.
          </h1>
          <p className="font-body-lg text-body-lg mb-8 text-surface-variant max-w-xl mx-auto">
            Yokuts Valley's destination for signature steak sandwiches and burgers.
          </p>
          <Link
            to="/menu"
            className="inline-flex bg-secondary text-on-primary hover:bg-secondary-container transition-colors px-8 py-4 uppercase font-label-bold text-label-bold rounded border border-secondary-container shadow-[inset_0_-2px_4px_rgba(0,0,0,0.4)]"
          >
            View Menu
          </Link>
        </div>
      </section>

      <section className="px-margin-mobile md:px-margin-desktop mb-section-gap">
        <h2 className="font-headline-md text-headline-md text-center mb-12 uppercase tracking-wide border-b-2 border-outline-variant pb-4 inline-block w-full">
          House Specialties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-item-gap">
          {categories.map((cat) => (
            <div className="group cursor-pointer" key={cat.title}>
              <div className="relative h-64 mb-4 overflow-hidden rounded bg-surface-variant border border-[#D4A373]">
                <div
                  className="bg-cover bg-center w-full h-full transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${cat.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 font-headline-sm text-headline-sm text-on-primary">{cat.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-margin-mobile md:px-margin-desktop mb-section-gap bg-surface-container py-16 border-y border-outline-variant">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="material-symbols-outlined text-secondary text-5xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>
            local_fire_department
          </span>
          <p className="font-headline-md text-headline-md text-on-surface mb-8">
            "From the smoker to your plate, every bite is a legacy."
          </p>
          <div className="w-16 h-1 bg-secondary mb-8"></div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            At Ol' Smokey's, we believe in the slow way. Hours over hardwood, simple ingredients, and a commitment to the craft
            of true barbecue. Join us at the Caboose for a taste of Yokuts Valley tradition.
          </p>
        </div>
      </section>

      <section className="px-margin-mobile md:px-margin-desktop mb-section-gap">
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

      <section className="px-margin-mobile md:px-margin-desktop mb-section-gap">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                local_fire_department
              </span>
              <h2 className="font-headline-md text-headline-md text-on-background">Signature Favorites</h2>
            </div>
            <p className="font-body-md text-body-md text-surface-variant">A taste of our most popular smoked creations.</p>
          </div>
          <Link
            to="/menu"
            className="inline-flex border-2 border-secondary text-secondary hover:bg-secondary hover:text-on-primary transition-colors px-6 py-3 uppercase font-label-bold text-label-bold rounded whitespace-nowrap"
          >
            View Full Menu
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-item-gap">
          {favorites.map((item) => (
            <div
              key={item.name}
              className="bg-surface-container-lowest border border-outline-variant relative group hover:shadow-lg transition-shadow rounded overflow-hidden flex flex-col"
            >
              {item.badge && (
                <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-bold text-[10px] uppercase text-center leading-tight shadow-md z-10 transform rotate-12 border border-secondary">
                  Pitmaster
                  <br />
                  Choice
                </div>
              )}
              <div className="h-48 overflow-hidden">
                <img
                  alt={item.name}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                  src={item.image}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline-sm text-headline-sm text-on-background">{item.name}</h3>
                  <span className="font-label-bold text-label-bold text-secondary">{item.price}</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-margin-mobile md:px-margin-desktop mb-section-gap">
        <div className="bg-primary-container text-on-primary p-8 rounded border border-outline-variant flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-secondary text-3xl">schedule</span>
            <div>
              <h4 className="font-headline-sm text-headline-sm">Today's Hours</h4>
              <p className="font-body-md text-body-md text-surface-variant">Open until 8 PM</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-secondary text-3xl">location_on</span>
            <div>
              <h4 className="font-headline-sm text-headline-sm">Location</h4>
              <p className="font-body-md text-body-md text-surface-variant">Yokuts Valley, CA</p>
            </div>
          </div>
          <Link
            to="/contact"
            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-on-primary transition-colors px-6 py-3 uppercase font-label-bold text-label-bold rounded whitespace-nowrap"
          >
            Get Directions
          </Link>
        </div>
      </section>
    </main>
  );
}
