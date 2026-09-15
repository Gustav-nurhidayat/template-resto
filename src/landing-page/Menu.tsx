import { ArrowRight, Clock, Leaf, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { menuItems } from "../data/menu";

export default function Menu() {
  return (
    <>
      <SEO
        title="Menu — Centa Restaurant"
        description="Explore the carefully crafted menu at Centa Restaurant, featuring starters, main courses, pasta, desserts, and more."
        canonical="https://centarestaurant.com/menu"
      />

      <main className="relative min-h-screen overflow-hidden bg-[#FAF7F2] text-[#241A15]">
        {/* BACKGROUND GRID */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(rgba(36,26,21,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(36,26,21,0.35)_1px,transparent_1px)]
            [background-size:64px_64px]
          "
        />

        {/* AMBIENT GLOW */}
        <div
          className="
            pointer-events-none
            absolute
            -left-40
            top-40
            h-96
            w-96
            rounded-full
            bg-[#B6533C]/[0.06]
            blur-[120px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            top-[45%]
            h-96
            w-96
            rounded-full
            bg-[#B6533C]/[0.04]
            blur-[120px]
          "
        />

        {/* HEADER */}
        <section className="relative border-b border-[#241A15]/10">
          <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
            <div className="flex items-center gap-3">
              <span
                className="
                  flex
                  h-7
                  items-center
                  rounded-full
                  border
                  border-[#B6533C]/20
                  bg-[#B6533C]/[0.05]
                  px-3
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#B6533C]
                "
              >
                CENTA / MENU
              </span>

              <span className="hidden h-px w-12 bg-[#241A15]/10 sm:block" />

              <span className="hidden text-[9px] uppercase tracking-[0.18em] text-[#241A15]/40 sm:block">
                Food & Dining
              </span>
            </div>

            <h1
              className="
                mt-7
                max-w-4xl
                font-serif
                text-5xl
                font-medium
                leading-[0.95]
                tracking-[-0.055em]
                text-[#241A15]
                sm:text-6xl
                lg:text-[76px]
              "
            >
              Good food,
              <span className="block italic text-[#B6533C]">
                worth remembering.
              </span>
            </h1>

            <div className="mt-7 h-px w-20 bg-[#B6533C]/50" />

            <p
              className="
                mt-7
                max-w-2xl
                text-sm
                leading-7
                text-[#241A15]/55
                sm:text-base
              "
            >
              Explore a thoughtfully crafted selection of dishes made with
              fresh ingredients, refined techniques, and flavors designed to
              make every visit memorable.
            </p>
          </div>
        </section>

        {/* MENU */}
        <section className="relative">
          <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-16">
            {/* SECTION HEADER */}
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <span
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#B6533C]
                  "
                >
                  Our Selection
                </span>

                <h2
                  className="
                    mt-3
                    font-serif
                    text-3xl
                    tracking-[-0.03em]
                    text-[#241A15]
                    sm:text-4xl
                  "
                >
                  Crafted for every occasion.
                </h2>
              </div>

              <div className="hidden items-center gap-2 text-[#241A15]/40 sm:flex">
                <Utensils size={15} strokeWidth={1.5} />
                <span className="text-[9px] uppercase tracking-[0.2em]">
                  Our Menu
                </span>
              </div>
            </div>

            {/* CATEGORY */}
            <div className="mb-8 flex flex-wrap gap-2">
              {[
                "ALL",
                "STARTERS",
                "MAIN COURSE",
                "PASTA",
                "DESSERTS",
              ].map((category) => (
                <span
                  key={category}
                  className="
                    rounded-full
                    border
                    border-[#241A15]/10
                    bg-[#FFFDF9]
                    px-4
                    py-2
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#241A15]/55
                  "
                >
                  {category}
                </span>
              ))}
            </div>

            {/* MENU GRID */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {menuItems.map((item) => (
                <article
                  key={item.slug}
                  className="
                    group
                    overflow-hidden
                    rounded-[1.5rem]
                    border
                    border-[#241A15]/10
                    bg-[#FFFDF9]
                    shadow-sm
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >
                  {/* IMAGE */}
                  <Link
                    to={`/menu/${item.slug}`}
                    className="relative block aspect-[4/3] overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#241A15]/60 via-transparent to-transparent" />

                    <div className="absolute left-5 top-5">
                      <span
                        className="
                          rounded-full
                          bg-[#FAF7F2]/95
                          px-3
                          py-1.5
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-[0.18em]
                          text-[#241A15]
                        "
                      >
                        {item.category}
                      </span>
                    </div>

                    {item.popular && (
                      <div className="absolute right-5 top-5">
                        <span
                          className="
                            rounded-full
                            bg-[#B6533C]
                            px-3
                            py-1.5
                            text-[8px]
                            font-bold
                            uppercase
                            tracking-[0.18em]
                            text-white
                          "
                        >
                          Popular
                        </span>
                      </div>
                    )}

                    <div className="absolute bottom-5 left-5 flex items-center gap-2 text-white">
                      <Leaf size={13} strokeWidth={1.5} />
                      <span className="text-[8px] uppercase tracking-[0.2em]">
                        Fresh Selection
                      </span>
                    </div>
                  </Link>

                  {/* CONTENT */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3
                        className="
                          font-serif
                          text-2xl
                          leading-tight
                          tracking-[-0.03em]
                          text-[#241A15]
                        "
                      >
                        {item.name}
                      </h3>

                      <span
                        className="
                          shrink-0
                          pt-1
                          text-sm
                          font-semibold
                          text-[#B6533C]
                        "
                      >
                        Rp {item.price.toLocaleString("id-ID")}
                      </span>
                    </div>

                    <p
                      className="
                        mt-4
                        text-sm
                        leading-6
                        text-[#241A15]/50
                      "
                    >
                      {item.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-[#241A15]/10 pt-5">
                      <div className="flex items-center gap-2 text-[#241A15]/40">
                        <Clock size={14} strokeWidth={1.5} />
                        <span className="text-[9px] uppercase tracking-[0.16em]">
                          Chef&apos;s Selection
                        </span>
                      </div>

                      <Link
                        to={`/menu/${item.slug}`}
                        className="
                          inline-flex
                          items-center
                          gap-2
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.18em]
                          text-[#241A15]
                          transition-colors
                          hover:text-[#B6533C]
                        "
                      >
                        View Dish
                        <ArrowRight
                          size={13}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>

                  {/* BOTTOM LINE */}
                  <div
                    className="
                      pointer-events-none
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-[#B6533C]
                      to-transparent
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-40
                    "
                  />
                </article>
              ))}
            </div>

            {/* BOTTOM INFO */}
            <div
              className="
                relative
                mt-6
                overflow-hidden
                rounded-[1.5rem]
                border
                border-[#241A15]/10
                bg-[#FFFDF9]
                p-6
                shadow-sm
                sm:p-7
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  right-0
                  top-0
                  h-48
                  w-48
                  rounded-full
                  bg-[#B6533C]/[0.05]
                  blur-[90px]
                "
              />

              <div
                className="
                  relative
                  flex
                  flex-col
                  gap-5
                  md:flex-row
                  md:items-center
                  md:justify-between
                "
              >
                <div>
                  <span
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#B6533C]
                    "
                  >
                    Made for the moment
                  </span>

                  <p
                    className="
                      mt-2
                      max-w-2xl
                      text-[11px]
                      leading-6
                      text-[#241A15]/50
                    "
                  >
                    From light starters to indulgent desserts, every dish is
                    prepared with carefully selected ingredients and attention
                    to detail.
                  </p>
                </div>

                <Link
                  to="/#reservation"
                  className="
                    group
                    inline-flex
                    shrink-0
                    items-center
                    gap-2
                    rounded-xl
                    bg-[#B6533C]
                    px-4
                    py-3
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-white
                    transition-all
                    hover:bg-[#241A15]
                  "
                >
                  Reserve a Table
                  <ArrowRight
                    size={13}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
