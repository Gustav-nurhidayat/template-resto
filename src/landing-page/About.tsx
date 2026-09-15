import {
  ArrowRight,
  ChefHat,
  Flame,
  Leaf,
  Star,
  Utensils,
  Wine,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const restaurantConfig = {
  name: "Centa Restaurant",
  location: "Jakarta, Indonesia",
  address: "Jl. Sudirman No. 88, Jakarta",
  phone: "+62 21 1234 5678",
  email: "reservation@centarestaurant.com",
  tagline: "Good food. Great moments.",
  description:
    "A modern dining destination where thoughtful ingredients, refined cooking, and warm hospitality come together.",
};

const values = [
  {
    icon: Leaf,
    number: "01",
    title: "Fresh Ingredients",
    description:
      "We carefully select seasonal ingredients to bring natural flavor, freshness, and quality to every plate.",
  },
  {
    icon: ChefHat,
    number: "02",
    title: "Thoughtful Cooking",
    description:
      "Our kitchen combines classic techniques with modern ideas to create dishes that feel refined yet approachable.",
  },
  {
    icon: Utensils,
    number: "03",
    title: "Shared Moments",
    description:
      "We believe the best meals are meant to be shared, enjoyed slowly, and remembered long after the last bite.",
  },
  {
    icon: Star,
    number: "04",
    title: "Warm Hospitality",
    description:
      "From the moment you arrive, our team is here to make your dining experience comfortable and memorable.",
  },
];

const experiences = [
  {
    icon: ChefHat,
    title: "Chef's Table",
    description:
      "An intimate dining experience that gives you a closer look at our kitchen and signature dishes.",
  },
  {
    icon: Wine,
    title: "Curated Pairings",
    description:
      "Carefully selected beverages designed to complement the flavors and character of our dishes.",
  },
  {
    icon: Flame,
    title: "Open Kitchen",
    description:
      "Watch our chefs prepare each dish with precision, passion, and attention to detail.",
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85",
    alt: "Centa Restaurant dining room",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=85",
    alt: "Restaurant table and dishes",
  },
  {
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=85",
    alt: "Elegant restaurant interior",
  },
  {
    src: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1400&q=85",
    alt: "Restaurant dining experience",
  },
];

export default function Aboutrest() {
  return (
    <>
      <SEO
        title={`About — ${restaurantConfig.name}`}
        description={`${restaurantConfig.name} is a modern dining destination in ${restaurantConfig.location}, bringing together thoughtful ingredients, refined cooking, and warm hospitality.`}
        canonical="https://centarestaurant.com/about"
      />

      <main className="min-h-screen bg-[#FAF7F2] text-[#241A15]">
        {/* =================================================
            HERO
        ================================================= */}

        <section className="relative overflow-hidden bg-[#241A15]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2200&q=90')",
            }}
          />

          <div className="absolute inset-0 bg-[#241A15]/65" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#241A15] via-[#241A15]/35 to-[#241A15]/20" />

          <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-7xl items-end px-6 pb-20 pt-36 sm:px-8 lg:px-10 lg:pb-28">
            <div className="max-w-4xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#B6533C]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#FAF7F2]/75">
                  About {restaurantConfig.name}
                </span>
              </div>

              <h1 className="font-serif text-5xl font-medium leading-[0.98] tracking-[-0.04em] text-[#FAF7F2] sm:text-7xl lg:text-[86px]">
                More than
                <br />
                <span className="italic text-[#B6533C]">
                  just a restaurant.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-[#FAF7F2]/70 sm:text-base">
                {restaurantConfig.description}
              </p>

              <div className="mt-9">
                <a
                  href="#story"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#B6533C] px-6 py-3.5 text-sm font-bold text-[#FAF7F2] transition hover:-translate-y-0.5 hover:bg-[#FAF7F2] hover:text-[#241A15]"
                >
                  Discover Our Story
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            INTRO
        ================================================= */}

        <section
          id="story"
          className="scroll-mt-24 px-6 py-24 sm:px-8 lg:px-10 lg:py-36"
        >
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B6533C]">
                Our Story
              </span>

              <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.03em] text-[#241A15] sm:text-5xl lg:text-6xl">
                Born from a love
                <br />
                of <span className="italic text-[#B6533C]">good food.</span>
              </h2>
            </div>

            <div>
              <p className="text-sm leading-8 text-[#241A15]/65 sm:text-base">
                {restaurantConfig.name} was created around a simple
                idea: great food should bring people together.
                Every detail, from the ingredients we choose to the
                way our dishes are served, is designed around that
                belief.
              </p>

              <p className="mt-6 text-sm leading-8 text-[#241A15]/65 sm:text-base">
                Our kitchen brings together familiar culinary
                traditions and contemporary techniques. We focus on
                balanced flavors, honest ingredients, and dishes
                that allow the quality of each component to speak
                for itself.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-12 bg-[#B6533C]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#241A15]/50">
                  Since 2014
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            IMAGE + STORY
        ================================================= */}

        <section className="px-6 pb-24 sm:px-8 lg:px-10 lg:pb-36">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=85"
                alt={`${restaurantConfig.name} interior`}
                className="aspect-[4/3] h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-[#241A15] p-8 sm:p-12 lg:p-16">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B6533C]">
                The Philosophy
              </span>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#FAF7F2] sm:text-5xl">
                Simple ideas.
                <br />
                <span className="italic text-[#B6533C]">
                  Thoughtful execution.
                </span>
              </h2>

              <p className="mt-7 text-sm leading-7 text-[#FAF7F2]/60">
                We do not believe food needs to be complicated to
                be memorable. The best dishes begin with quality
                ingredients, careful preparation, and a clear
                understanding of what makes each ingredient special.
              </p>

              <p className="mt-5 text-sm leading-7 text-[#FAF7F2]/60">
                That philosophy guides everything we do — from our
                kitchen to our dining room and the hospitality we
                provide to every guest.
              </p>

              <div className="mt-9 grid grid-cols-2 gap-6 border-t border-[#FAF7F2]/10 pt-7">
                <div>
                  <div className="font-serif text-3xl text-[#B6533C]">
                    12+
                  </div>

                  <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#FAF7F2]/40">
                    Years of craft
                  </div>
                </div>

                <div>
                  <div className="font-serif text-3xl text-[#B6533C]">
                    4.9
                  </div>

                  <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#FAF7F2]/40">
                    Guest rating
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            VALUES
        ================================================= */}

        <section className="border-y border-[#241A15]/10 bg-[#FFFDF9] px-6 py-24 sm:px-8 lg:px-10 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B6533C]">
                What We Believe
              </span>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#241A15] sm:text-5xl">
                The values behind
                <br />
                <span className="italic text-[#B6533C]">
                  every plate.
                </span>
              </h2>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[#241A15]/10 bg-[#241A15]/10 md:grid-cols-2">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <article
                    key={value.number}
                    className="group bg-[#FFFDF9] p-7 transition duration-500 hover:bg-[#FAF7F2] sm:p-9"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#B6533C]/10">
                        <Icon className="h-5 w-5 text-[#B6533C]" />
                      </div>

                      <span className="font-serif text-3xl text-[#241A15]/10 transition group-hover:text-[#B6533C]/20">
                        {value.number}
                      </span>
                    </div>

                    <h3 className="mt-7 font-serif text-2xl text-[#241A15]">
                      {value.title}
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-7 text-[#241A15]/55">
                      {value.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =================================================
            EXPERIENCE
        ================================================= */}

        <section className="bg-[#241A15] px-6 py-24 sm:px-8 lg:px-10 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B6533C]">
                  Dining Experience
                </span>

                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#FAF7F2] sm:text-5xl">
                  Designed around
                  <br />
                  <span className="italic text-[#B6533C]">
                    the table.
                  </span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-[#FAF7F2]/55">
                From the kitchen to the dining room, every element
                is carefully considered to create a relaxed and
                memorable experience.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {experiences.map((experience) => {
                const Icon = experience.icon;

                return (
                  <article
                    key={experience.title}
                    className="rounded-2xl border border-[#FAF7F2]/10 bg-[#FAF7F2]/5 p-7 transition duration-500 hover:-translate-y-1 hover:border-[#B6533C]/40 hover:bg-[#B6533C]/10"
                  >
                    <Icon className="h-7 w-7 text-[#B6533C]" />

                    <h3 className="mt-7 font-serif text-2xl text-[#FAF7F2]">
                      {experience.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#FAF7F2]/55">
                      {experience.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =================================================
            GALLERY
        ================================================= */}

        <section className="px-6 py-24 sm:px-8 lg:px-10 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B6533C]">
                  Inside Centa
                </span>

                <h2 className="mt-5 font-serif text-4xl text-[#241A15] sm:text-5xl">
                  Where food meets
                  <br />
                  <span className="italic text-[#B6533C]">
                    atmosphere.
                  </span>
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-[#241A15]/55">
                A warm space designed for intimate dinners,
                celebrations, conversations, and unforgettable
                moments.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {galleryImages.map((image) => (
                <div
                  key={image.src}
                  className="group overflow-hidden rounded-xl"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="aspect-square h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================
            CTA
        ================================================= */}

        <section className="px-6 pb-24 sm:px-8 lg:px-10 lg:pb-36">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#B6533C]">
            <div className="relative px-8 py-16 sm:px-12 lg:px-16 lg:py-20">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#FAF7F2]/10 blur-3xl" />

              <div className="relative max-w-2xl">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#FAF7F2]/70">
                  Come Dine With Us
                </span>

                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#FAF7F2] sm:text-5xl">
                  Good food is better
                  <br />
                  <span className="italic">when shared.</span>
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-[#FAF7F2]/75">
                  Join us at {restaurantConfig.name} and make your
                  next meal a moment worth remembering.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <Link
                    to="/menu"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#241A15] px-6 py-3.5 text-sm font-bold text-[#FAF7F2] transition hover:bg-[#FAF7F2] hover:text-[#241A15]"
                  >
                    Explore Our Menu
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    to="/#reservation"
                    className="inline-flex items-center gap-2 rounded-lg border border-[#FAF7F2]/40 bg-[#FAF7F2]/10 px-6 py-3.5 text-sm font-semibold text-[#FAF7F2] transition hover:bg-[#FAF7F2]/20"
                  >
                    Reserve a Table
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            CONTACT INFO
        ================================================= */}

        <section className="border-t border-[#241A15]/10 px-6 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-3">
            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#241A15]/40">
                Location
              </span>

              <p className="mt-2 text-sm text-[#241A15]">
                {restaurantConfig.address}
              </p>

              <p className="mt-1 text-xs text-[#241A15]/50">
                {restaurantConfig.location}
              </p>
            </div>

            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#241A15]/40">
                Opening Hours
              </span>

              <p className="mt-2 text-sm text-[#241A15]">
                Daily · 11:00–23:00
              </p>
            </div>

            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#241A15]/40">
                Reservations
              </span>

              <p className="mt-2 text-sm text-[#241A15]">
                {restaurantConfig.phone}
              </p>

              <p className="mt-1 text-xs text-[#241A15]/50">
                {restaurantConfig.email}
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}