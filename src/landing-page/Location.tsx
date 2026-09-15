import { useState } from "react";
import {
  ArrowRight,
  Car,
  MapPin,
  Navigation,
  TrainFront,
  Utensils,
  ShoppingBag,
  Landmark,
} from "lucide-react";

import SEO from "../components/SEO";

const restaurantConfig = {
  name: "Centa Restaurant",
  location: "Jakarta, Indonesia",
  address: "Jl. Sudirman No. 88, Jakarta",
};

const nearbyPlaces = [
  {
    icon: Utensils,
    distance: "03 MIN",
    title: "Dining District",
    description:
      "Discover restaurants, cafés, and local culinary experiences around the area.",
  },
  {
    icon: ShoppingBag,
    distance: "08 MIN",
    title: "Shopping Center",
    description:
      "Boutiques, lifestyle stores, and everyday essentials within easy reach.",
  },
  {
    icon: Landmark,
    distance: "12 MIN",
    title: "City Attractions",
    description:
      "Explore cultural landmarks, entertainment, and iconic destinations across Jakarta.",
  },
  {
    icon: Navigation,
    distance: "10 MIN",
    title: "City Center",
    description:
      "Stay close to Jakarta's business district, lifestyle destinations, and urban experiences.",
  },
];

const travelOptions = [
  {
    icon: Car,
    title: "By Car",
    text: "Convenient road access makes Centa easy to reach from major areas across Jakarta.",
  },
  {
    icon: Navigation,
    title: "Ride-Hailing",
    text: "Grab, Gojek, taxis, and other ride-hailing services are readily available.",
  },
  {
    icon: TrainFront,
    title: "Public Transport",
    text: "The restaurant is accessible from nearby public transportation routes and stations.",
  },
];

export default function Location() {
  const [activePlace, setActivePlace] = useState<string | null>(null);

  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=Jl.+Sudirman+No.+88,+Jakarta,+Indonesia";

  return (
    <>
      <SEO
        title={`${restaurantConfig.name} — Location`}
        description="Find Centa Restaurant in Jakarta, explore nearby destinations, transportation options, and plan your visit."
        canonical="https://centa.ltd/location"
      />

      <main className="relative overflow-hidden bg-[#FAF7F2] text-[#241A15]">
        {/* =====================================================
            HERO — DARK
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#241A15] text-[#FAF7F2]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-[-180px] top-[-140px] h-[500px] w-[500px] rounded-full bg-[#B6533C]/15 blur-[140px]" />

            <div className="absolute bottom-[-220px] left-[-160px] h-[480px] w-[480px] rounded-full bg-[#B6533C]/10 blur-[130px]" />

            <div
              className="
                absolute
                inset-0
                opacity-[0.035]
                [background-image:linear-gradient(rgba(250,247,242,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(250,247,242,0.4)_1px,transparent_1px)]
                [background-size:72px_72px]
              "
            />
          </div>

          <div className="relative mx-auto max-w-[1440px] px-6 pb-24 pt-32 sm:px-8 lg:px-10 lg:pb-32 lg:pt-40 xl:px-12">
            <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#B6533C]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#B6533C]">
                    FIND US
                  </span>
                </div>

                <h1 className="mt-7 max-w-5xl font-serif text-5xl font-medium leading-[1] tracking-[-0.045em] sm:text-6xl lg:text-[78px]">
                  Come for the food,
                  <span className="block italic text-[#B6533C]">
                    stay for the moment.
                  </span>
                </h1>
              </div>

              <div className="lg:pb-2 lg:pl-12">
                <p className="max-w-xl text-sm leading-7 text-[#FAF7F2]/55 sm:text-[15px]">
                  Located in the heart of Jakarta, Centa Restaurant brings
                  thoughtful dining, warm hospitality, and a relaxed atmosphere
                  together in one memorable destination.
                </p>

                <div className="mt-8 flex items-start gap-3 border-l border-[#B6533C]/40 pl-5 text-xs leading-6 text-[#FAF7F2]/55">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#B6533C]" />

                  <span>
                    {restaurantConfig.address}
                    <br />
                    {restaurantConfig.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MAP SECTION — CREAM
        ====================================================== */}

        <section className="relative bg-[#FAF7F2]">
          <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28 xl:px-12">
            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
              {/* MAP */}

              <div
                className="
                  group
                  relative
                  min-h-[460px]
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-[#241A15]/10
                  bg-[#2D211B]
                  shadow-[0_25px_80px_rgba(36,26,21,0.14)]
                "
              >
                {/* Grid */}

                <div
                  className="
                    absolute
                    inset-0
                    opacity-30
                    [background-image:linear-gradient(rgba(250,247,242,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(250,247,242,0.08)_1px,transparent_1px)]
                    [background-size:48px_48px]
                  "
                />

                {/* Roads */}

                <div className="absolute left-[12%] top-[-10%] h-[130%] w-px rotate-[24deg] bg-[#B6533C]/35" />

                <div className="absolute right-[18%] top-[-10%] h-[130%] w-px -rotate-[32deg] bg-[#B6533C]/25" />

                <div className="absolute left-[-10%] top-[52%] h-px w-[120%] rotate-[-8deg] bg-[#B6533C]/25" />

                <div className="absolute left-[-10%] top-[28%] h-px w-[120%] rotate-[17deg] bg-[#FAF7F2]/10" />

                <div className="absolute left-[15%] top-[20%] text-[9px] font-semibold uppercase tracking-[0.2em] text-[#FAF7F2]/25">
                  CENTRAL JAKARTA
                </div>

                <div className="absolute right-[16%] top-[25%] text-[9px] font-semibold uppercase tracking-[0.2em] text-[#FAF7F2]/25">
                  SUDIRMAN
                </div>

                <div className="absolute bottom-[23%] left-[22%] text-[9px] font-semibold uppercase tracking-[0.2em] text-[#FAF7F2]/20">
                  CITY DISTRICT
                </div>

                {/* Decorative shapes */}

                <div className="absolute bottom-[-20%] right-[-10%] h-[65%] w-[55%] rotate-[-18deg] rounded-[50%] border border-[#B6533C]/15" />

                <div className="absolute left-[10%] top-[55%] h-40 w-40 rounded-full bg-[#B6533C]/10 blur-3xl" />

                {/* Marker */}

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="absolute inset-[-32px] animate-ping rounded-full border border-[#B6533C]/20" />

                  <div className="absolute inset-[-17px] rounded-full border border-[#B6533C]/30" />

                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-[#B6533C]/60 bg-[#241A15] shadow-[0_0_60px_rgba(182,83,60,0.25)]">
                    <MapPin className="h-6 w-6 text-[#B6533C]" />
                  </div>
                </div>

                {/* Location Card */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    right-5
                    flex
                    flex-col
                    gap-4
                    rounded-2xl
                    border
                    border-[#FAF7F2]/10
                    bg-[#241A15]/95
                    p-5
                    backdrop-blur-xl
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#B6533C]">
                      CENTA RESTAURANT
                    </p>

                    <p className="mt-2 text-sm text-[#FAF7F2]/55">
                      {restaurantConfig.address}
                    </p>
                  </div>

                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      inline-flex
                      w-fit
                      items-center
                      gap-2
                      rounded-lg
                      bg-[#B6533C]
                      px-4
                      py-2.5
                      text-[10px]
                      font-bold
                      tracking-[0.12em]
                      text-[#FAF7F2]
                      transition-all
                      hover:-translate-y-0.5
                      hover:bg-[#FAF7F2]
                      hover:text-[#241A15]
                    "
                  >
                    GET DIRECTIONS

                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* LOCATION INFO — TERRACOTTA */}

              <div
                className="
                  relative
                  flex
                  min-h-[460px]
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-[2rem]
                  bg-[#B6533C]
                  p-8
                  text-[#FAF7F2]
                  shadow-[0_20px_60px_rgba(182,83,60,0.15)]
                  sm:p-10
                "
              >
                <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full border border-[#FAF7F2]/10" />

                <div className="pointer-events-none absolute bottom-[-100px] left-[-100px] h-64 w-64 rounded-full border border-[#FAF7F2]/10" />

                <div className="relative">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#FAF7F2]/65">
                    THE LOCATION
                  </span>

                  <h2 className="mt-5 font-serif text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl">
                    Right where
                    <span className="block italic text-[#241A15]">
                      the city meets dining.
                    </span>
                  </h2>

                  <p className="mt-6 text-sm leading-7 text-[#FAF7F2]/70">
                    Conveniently located in Jakarta, Centa Restaurant is
                    designed to be easy to reach whether you're joining us for
                    lunch, dinner, a business meeting, or a special occasion.
                  </p>
                </div>

                <div className="relative mt-12 border-t border-[#FAF7F2]/20 pt-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#241A15]" />

                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#FAF7F2]/55">
                        ADDRESS
                      </p>

                      <p className="mt-2 text-sm leading-6 text-[#FAF7F2]/80">
                        {restaurantConfig.address}
                        <br />
                        {restaurantConfig.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            NEARBY — DARK
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#241A15] text-[#FAF7F2]">
          <div className="pointer-events-none absolute right-[-200px] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#B6533C]/10 blur-[120px]" />

          <div className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28 xl:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#B6533C]">
                  NEARBY
                </span>

                <h2 className="mt-5 font-serif text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
                  Explore Jakarta
                  <span className="block italic text-[#B6533C]">
                    after your meal.
                  </span>
                </h2>

                <p className="mt-6 max-w-md text-sm leading-7 text-[#FAF7F2]/45">
                  Make the most of your visit with popular destinations,
                  shopping, entertainment, and city experiences nearby.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {nearbyPlaces.map((place) => {
                  const Icon = place.icon;
                  const isActive = activePlace === place.title;

                  return (
                    <button
                      key={place.title}
                      type="button"
                      onClick={() =>
                        setActivePlace(isActive ? null : place.title)
                      }
                      className={`
                        group
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        p-6
                        text-left
                        transition-all
                        duration-500
                        ${
                          isActive
                            ? "border-[#B6533C]/50 bg-[#B6533C]/15"
                            : "border-[#FAF7F2]/10 bg-[#FAF7F2]/[0.035] hover:-translate-y-0.5 hover:border-[#B6533C]/35 hover:bg-[#FAF7F2]/[0.06]"
                        }
                      `}
                    >
                      <div
                        className={`
                          absolute
                          right-[-40px]
                          top-[-40px]
                          h-32
                          w-32
                          rounded-full
                          bg-[#B6533C]
                          blur-3xl
                          transition-opacity
                          ${
                            isActive
                              ? "opacity-10"
                              : "opacity-0 group-hover:opacity-[0.06]"
                          }
                        `}
                      />

                      <div className="relative flex items-start justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#B6533C]/25 bg-[#B6533C]/10">
                          <Icon className="h-4 w-4 text-[#B6533C]" />
                        </div>

                        <span className="text-[9px] font-semibold tracking-[0.15em] text-[#FAF7F2]/30">
                          {place.distance}
                        </span>
                      </div>

                      <h3 className="relative mt-6 text-base font-semibold text-[#FAF7F2]">
                        {place.title}
                      </h3>

                      <p
                        className={`
                          relative
                          mt-3
                          text-xs
                          leading-6
                          transition-colors
                          duration-300
                          ${
                            isActive
                              ? "text-[#FAF7F2]/70"
                              : "text-[#FAF7F2]/40"
                          }
                        `}
                      >
                        {place.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            GETTING HERE — CREAM
        ====================================================== */}

        <section className="relative bg-[#FAF7F2]">
          <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28 xl:px-12">
            <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#B6533C]">
                  GETTING HERE
                </span>

                <h2 className="mt-5 font-serif text-3xl font-medium tracking-[-0.03em] text-[#241A15] sm:text-4xl">
                  Getting here is easy.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-[#241A15]/45">
                Convenient routes and flexible transportation options make
                your visit to Centa simple from wherever you're coming.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {travelOptions.map((option, index) => {
                const Icon = option.icon;

                return (
                  <div
                    key={option.title}
                    className={`
                      group
                      relative
                      overflow-hidden
                      rounded-[1.5rem]
                      p-7
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      ${
                        index === 1
                          ? "bg-[#241A15] text-[#FAF7F2]"
                          : "border border-[#241A15]/10 bg-[#EDE5DA]"
                      }
                    `}
                  >
                    <div
                      className={`
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        ${
                          index === 1
                            ? "border border-[#B6533C]/40 bg-[#B6533C]/15"
                            : "border border-[#B6533C]/20 bg-[#B6533C]/10"
                        }
                      `}
                    >
                      <Icon className="h-4 w-4 text-[#B6533C]" />
                    </div>

                    <h3
                      className={`
                        mt-6
                        text-base
                        font-semibold
                        ${
                          index === 1
                            ? "text-[#FAF7F2]"
                            : "text-[#241A15]"
                        }
                      `}
                    >
                      {option.title}
                    </h3>

                    <p
                      className={`
                        mt-3
                        text-xs
                        leading-6
                        ${
                          index === 1
                            ? "text-[#FAF7F2]/45"
                            : "text-[#241A15]/45"
                        }
                      `}
                    >
                      {option.text}
                    </p>

                    <div
                      className={`
                        absolute
                        bottom-0
                        left-7
                        right-7
                        h-px
                        origin-left
                        scale-x-0
                        bg-[#B6533C]
                        transition-transform
                        duration-500
                        group-hover:scale-x-100
                      `}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA — TERRACOTTA / DARK
        ====================================================== */}

        <section className="relative bg-[#B6533C]">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-[-220px] h-[500px] w-[700px] -translate-x-1/2 rounded-full border border-[#FAF7F2]/10" />

            <div className="absolute bottom-[-180px] left-[-100px] h-[350px] w-[350px] rounded-full bg-[#241A15]/10 blur-[100px]" />
          </div>

          <div className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28 xl:px-12">
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#FAF7F2]/65">
                SEE YOU SOON
              </span>

              <h2 className="mt-5 font-serif text-4xl font-medium leading-tight tracking-[-0.04em] text-[#FAF7F2] sm:text-6xl">
                Your table is waiting.
                <span className="block italic text-[#241A15]">
                  Come dine with us.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#FAF7F2]/65">
                Make your next meal a memorable one at Centa Restaurant.
              </p>

              <a
                href="/#reservation"
                className="
                  group
                  mt-9
                  inline-flex
                  items-center
                  gap-3
                  rounded-lg
                  bg-[#241A15]
                  px-6
                  py-3.5
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-[#FAF7F2]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#FAF7F2]
                  hover:text-[#241A15]
                "
              >
                RESERVE TABLE

                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}