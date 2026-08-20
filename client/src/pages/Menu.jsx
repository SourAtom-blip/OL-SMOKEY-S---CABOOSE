import { useEffect, useState } from "react";
import { sandwiches, burgers, chicken, hotdogs, sides, sweets, beverages } from "../data/menuFallback.js";

function bySection(apiItems, sectionName, fallback) {
  const matches = apiItems.filter((i) => i.section === sectionName);
  return matches.length ? matches : fallback;
}

export default function Menu() {
  const [apiItems, setApiItems] = useState([]);

  useEffect(() => {
    fetch("/api/menu")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => setApiItems(data))
      .catch(() => setApiItems([]));
  }, []);

  const sandwichItems = bySection(apiItems, "Signature Steak Sandwiches", sandwiches);
  const burgerItems = bySection(apiItems, "Burgers (1/3 lb)", burgers);
  const chickenItems = bySection(apiItems, "Chicken", chicken);
  const hotdogItems = bySection(apiItems, "1/4lb Hot Dogs", hotdogs);
  const sideItems = bySection(apiItems, "Sides", sides);
  const sweetItems = bySection(apiItems, "Sweet Treats", sweets);
  const beverageItems = bySection(apiItems, "Beverages", beverages);

  return (
    <main className="pt-[100px] md:pt-[120px] pb-section-gap px-margin-mobile md:px-margin-desktop max-w-[1200px] mx-auto paper-texture">
      <section className="relative w-full h-[300px] md:h-[400px] mb-section-gap flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center w-full h-full z-0"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCDlfBWqxkHn7nRkbUOLDDMdLs_q_SKwoVE3cuA0W4u2dg2b86VoD_Hf2WEsnYX3IZR5_xGf3uhMMlSqHsD4TVFiThdHoFhRlodTx9qYlAXl9sez1N0ppt2C_5GdLkhbNhtG-IiMM9kZGhdYNctEB7uAqHLBq8U3iFapSb8lWVNbuneh7IP_Vbj_2aqarAejHsi4QYDS-PpwSJ_eblPgMW1YulEREw2H0HTpOkSvyqYsI0o7uWxY5qtwA')"
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 text-center">
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-surface-bright mb-4 drop-shadow-md">
            The Menu
          </h1>
          <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl mx-auto">
            Smoked low and slow. Served hot and fast.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-item-gap md:gap-x-[40px] md:gap-y-section-gap">
        <div className="md:col-span-8 flex flex-col gap-section-gap">
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                local_fire_department
              </span>
              <h2 className="font-headline-md text-headline-md text-on-background">Signature Steak Sandwiches</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-item-gap">
              {sandwichItems.map((item) =>
                item.image ? (
                  <div
                    key={item.name}
                    className="bg-surface-container-lowest ink-border relative group hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
                  >
                    {item.badge && (
                      <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full pit-black text-on-primary flex items-center justify-center font-label-bold text-[10px] uppercase text-center leading-tight shadow-md z-10 transform rotate-12">
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
                        <span className="font-label-bold text-label-bold ember-red">{item.price}</span>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant">{item.desc}</p>
                    </div>
                  </div>
                ) : (
                  <div
                    key={item.name}
                    className="bg-surface-container-lowest p-6 ink-border relative group hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-headline-sm text-headline-sm text-on-background">{item.name}</h3>
                      <span className="font-label-bold text-label-bold ember-red">{item.price}</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-4">{item.desc}</p>
                  </div>
                )
              )}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                lunch_dining
              </span>
              <h2 className="font-headline-md text-headline-md text-on-background">
                Burgers <span className="font-body-md text-body-md text-on-surface-variant normal-case">(1/3 lb)</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-item-gap">
              {burgerItems.map((item) =>
                item.image ? (
                  <div
                    key={item.name}
                    className="bg-surface-container-lowest ink-border relative group hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
                  >
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
                        <span className="font-label-bold text-label-bold ember-red">{item.price}</span>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant">{item.desc}</p>
                    </div>
                  </div>
                ) : (
                  <div key={item.name} className="bg-surface-container-lowest p-6 ink-border">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-headline-sm text-headline-sm text-on-background">{item.name}</h3>
                      <span className="font-label-bold text-label-bold ember-red">{item.price}</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">{item.desc}</p>
                  </div>
                )
              )}
            </div>
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-item-gap">
            <section>
              <h2 className="font-headline-md text-headline-md text-on-background mb-6">Chicken</h2>
              <div className="flex flex-col gap-4">
                {chickenItems.map((item) => (
                  <div key={item.name} className="border-b-2 border-outline-variant pb-4">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-headline-sm text-[20px] text-on-background">{item.name}</h3>
                      <span className="font-label-bold text-label-bold ember-red">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h2 className="font-headline-md text-headline-md text-on-background mb-6">1/4lb Hot Dogs</h2>
              <div className="flex flex-col gap-4">
                {hotdogItems.map((item) => (
                  <div key={item.name} className="border-b-2 border-outline-variant pb-4">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-headline-sm text-[20px] text-on-background">{item.name}</h3>
                      <span className="font-label-bold text-label-bold ember-red">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col gap-section-gap">
          <section className="bg-surface-container-high p-8 ink-border">
            <h2 className="font-headline-md text-[28px] text-on-background mb-6 text-center border-b border-[#D4A373] pb-4">
              Sides
            </h2>
            <ul className="flex flex-col gap-4">
              {sideItems.map((item) => (
                <li key={item.name} className="flex justify-between items-center">
                  <span className="font-headline-sm text-[18px] text-on-background">{item.name}</span>
                  <span className="font-label-bold text-label-bold ember-red">{item.price}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="pit-black p-8 text-on-primary">
            <h2 className="font-headline-md text-[28px] honey-oak mb-6 text-center border-b border-[#D4A373] pb-4">
              Sweets &amp; Drinks
            </h2>
            <div className="mb-6">
              <h3 className="font-label-bold text-label-bold text-surface-variant uppercase tracking-widest mb-3">
                Sweet Treats
              </h3>
              <ul className="flex flex-col gap-3">
                {sweetItems.map((item) => (
                  <li key={item.name} className="flex justify-between items-center">
                    <span className="font-headline-sm text-[18px] text-surface-bright">{item.name}</span>
                    <span className="font-label-bold text-label-bold honey-oak">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-label-bold text-label-bold text-surface-variant uppercase tracking-widest mb-3">
                Beverages
              </h3>
              <ul className="flex flex-col gap-3">
                {beverageItems.map((item) => (
                  <li key={item.name} className="flex justify-between items-center">
                    <span className="font-headline-sm text-[18px] text-surface-bright">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="border-2 border-outline p-6 text-center">
            <span className="material-symbols-outlined text-secondary text-4xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>
              child_care
            </span>
            <h2 className="font-headline-sm text-headline-sm text-on-background mb-2">Kids / Small Eaters</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Ask about our smaller portions perfect for lighter appetites.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
