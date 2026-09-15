import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Leaf,
  Utensils,
} from "lucide-react";
import SEO from "../components/SEO";
import { menuItems } from "../data/menu";

export default function MenuDetail() {
  const { slug } = useParams<{ slug: string }>();

  const menuItem = menuItems.find((item) => item.slug === slug);

  /*
   * =====================================================
   * MENU ITEM NOT FOUND
   * =====================================================
   */

  if (!menuItem) {
    return (
      <main
        className="
          flex
          min-h-screen
          flex-col
          items-center
          justify-center
          bg-[#FAF7F2]
          px-6
          text-[#241A15]
        "
      >
        <span
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.25em]
            text-[#B6533C]
          "
        >
          CENTA / MENU
        </span>

        <h1
          className="
            mt-5
            font-serif
            text-3xl
            font-medium
            tracking-tight
            sm:text-5xl
          "
        >
          Dish Not Found
        </h1>

        <p
          className="
            mt-4
            max-w-md
            text-center
            text-sm
            leading-7
            text-[#241A15]/50
          "
        >
          The dish you're looking for could not be found.
        </p>

        <Link
          to="/menu"
          className="
            group
            mt-8
            inline-flex
            items-center
            gap-2
            text-xs
            font-bold
            uppercase
            tracking-[0.18em]
            text-[#B6533C]
            transition-colors
            duration-300
            hover:text-[#241A15]
          "
        >
          <ArrowLeft
            className="
              h-3.5
              w-3.5
              transition-transform
              duration-300
              group-hover:-translate-x-1
            "
          />

          Back to Menu
        </Link>
      </main>
    );
  }

  const seoTitle = `${menuItem.name} — Centa Restaurant`;

  const seoDescription = `${menuItem.description} Discover ${menuItem.name} at Centa Restaurant.`;

  const canonicalUrl = `https://centarestaurant.com/menu/${menuItem.slug}`;

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonical={canonicalUrl}
        image={menuItem.image}
      />

      <main
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-[#FAF7F2]
          text-[#241A15]
        "
      >
        {/* AMBIENT BACKGROUND */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-[550px]
            w-[850px]
            -translate-x-1/2
            rounded-full
            bg-[#B6533C]/[0.04]
            blur-[150px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#B6533C]/20
            to-transparent
          "
        />

        {/* HERO */}

        <section className="relative border-b border-[#241A15]/10">
          <div
            className="
              mx-auto
              max-w-[1440px]
              px-6
              pb-16
              pt-32
              sm:pb-20
              lg:px-10
              lg:pt-36
              xl:px-12
            "
          >
            <Link
              to="/menu"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-[10px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#241A15]/40
                transition-colors
                duration-300
                hover:text-[#B6533C]
              "
            >
              <ArrowLeft
                className="
                  h-3.5
                  w-3.5
                  transition-transform
                  duration-300
                  group-hover:-translate-x-1
                "
              />

              Back to Menu
            </Link>

            <div
              className="
                mt-10
                grid
                gap-10
                lg:grid-cols-[1fr_0.8fr]
                lg:items-end
                lg:gap-20
              "
            >
              <div>
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-[#B6533C]/20
                    bg-[#B6533C]/[0.05]
                    px-3.5
                    py-1.5
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#B6533C]
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#B6533C]
                      shadow-[0_0_8px_rgba(182,83,60,0.7)]
                    "
                  />

                  {menuItem.category}
                </div>

                <h1
                  className="
                    mt-7
                    max-w-4xl
                    font-serif
                    text-5xl
                    font-medium
                    leading-[0.98]
                    tracking-[-0.045em]
                    sm:text-6xl
                    lg:text-[76px]
                  "
                >
                  {menuItem.name}
                </h1>

                <p
                  className="
                    mt-7
                    max-w-2xl
                    text-base
                    leading-8
                    text-[#241A15]/55
                    sm:text-lg
                  "
                >
                  {menuItem.description}
                </p>
              </div>

              <div
                className="
                  flex
                  flex-col
                  lg:items-end
                  lg:text-right
                "
              >
                {menuItem.popular && (
                  <span
                    className="
                      inline-flex
                      w-fit
                      rounded-full
                      bg-[#B6533C]
                      px-3
                      py-1.5
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-white
                      lg:self-end
                    "
                  >
                    Popular Choice
                  </span>
                )}

                <span
                  className="
                    mt-5
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#241A15]/35
                  "
                >
                  Price
                </span>

                <div
                  className="
                    mt-2
                    text-3xl
                    font-semibold
                    tracking-tight
                    text-[#B6533C]
                    sm:text-4xl
                  "
                >
                  Rp {menuItem.price.toLocaleString("id-ID")}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURE IMAGE */}

        <section
          className="
            relative
            mx-auto
            max-w-[1440px]
            px-6
            py-8
            sm:py-12
            lg:px-10
            xl:px-12
          "
        >
          <div
            className="
              group
              relative
              block
              aspect-[1.65]
              overflow-hidden
              rounded-[1.5rem]
              bg-[#241A15]
            "
          >
            <img
              src={menuItem.image}
              alt={menuItem.name}
              className="
                h-full
                w-full
                object-cover
                brightness-[0.88]
                transition-all
                duration-700
                group-hover:scale-[1.03]
                group-hover:brightness-100
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-[#241A15]/70
                via-[#241A15]/10
                to-transparent
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-[radial-gradient(circle_at_50%_40%,rgba(182,83,60,0.16),transparent_60%)]
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />

            <div
              className="
                absolute
                bottom-4
                left-4
                flex
                items-center
                gap-2
                rounded-lg
                border
                border-white/[0.12]
                bg-black/30
                px-3
                py-1.5
                backdrop-blur-md
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#B6533C]
                  shadow-[0_0_8px_rgba(182,83,60,0.8)]
                "
              />

              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-white/70
                "
              >
                {menuItem.category}
              </span>
            </div>
          </div>
        </section>

        {/* MENU DETAILS */}

        <section
          className="
            relative
            mx-auto
            max-w-6xl
            px-6
            pb-32
            pt-10
            lg:px-10
          "
        >
          <div
            className="
              grid
              gap-14
              lg:grid-cols-[1fr_0.7fr]
              lg:gap-24
            "
          >
            {/* DESCRIPTION */}

            <div>
              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.24em]
                  text-[#B6533C]
                "
              >
                About The Dish
              </span>

              <h2
                className="
                  mt-5
                  font-serif
                  text-3xl
                  font-medium
                  tracking-[-0.035em]
                  text-[#241A15]
                  sm:text-4xl
                "
              >
                Crafted with intention.
              </h2>

              <p
                className="
                  mt-7
                  max-w-2xl
                  text-[15px]
                  leading-[2]
                  text-[#241A15]/55
                  sm:text-base
                "
              >
                {menuItem.longDescription}
              </p>

              {/* DISH INFO */}

              <div
                className="
                  mt-10
                  grid
                  grid-cols-2
                  gap-3
                  sm:grid-cols-3
                "
              >
                <div
                  className="
                    rounded-2xl
                    border
                    border-[#241A15]/10
                    bg-[#FFFDF9]
                    p-5
                  "
                >
                  <Utensils
                    className="
                      h-5
                      w-5
                      text-[#B6533C]
                    "
                  />

                  <span
                    className="
                      mt-4
                      block
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#241A15]/35
                    "
                  >
                    Category
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-sm
                      font-medium
                      text-[#241A15]
                    "
                  >
                    {menuItem.category}
                  </span>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-[#241A15]/10
                    bg-[#FFFDF9]
                    p-5
                  "
                >
                  <Leaf
                    className="
                      h-5
                      w-5
                      text-[#B6533C]
                    "
                  />

                  <span
                    className="
                      mt-4
                      block
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#241A15]/35
                    "
                  >
                    Ingredients
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-sm
                      font-medium
                      text-[#241A15]
                    "
                  >
                    Fresh Selection
                  </span>
                </div>

                <div
                  className="
                    col-span-2
                    rounded-2xl
                    border
                    border-[#241A15]/10
                    bg-[#FFFDF9]
                    p-5
                    sm:col-span-1
                  "
                >
                  <Clock
                    className="
                      h-5
                      w-5
                      text-[#B6533C]
                    "
                  />

                  <span
                    className="
                      mt-4
                      block
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#241A15]/35
                    "
                  >
                    Experience
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-sm
                      font-medium
                      text-[#241A15]
                    "
                  >
                    Chef&apos;s Selection
                  </span>
                </div>
              </div>
            </div>

            {/* MENU HIGHLIGHT */}

            <div>
              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.24em]
                  text-[#B6533C]
                "
              >
                Our Approach
              </span>

              <div
                className="
                  mt-6
                  border-y
                  border-[#241A15]/10
                "
              >
                <div
                  className="
                    flex
                    items-start
                    gap-4
                    border-b
                    border-[#241A15]/10
                    py-5
                  "
                >
                  <span
                    className="
                      mt-1
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#B6533C]/10
                      text-[9px]
                      font-bold
                      text-[#B6533C]
                    "
                  >
                    01
                  </span>

                  <div>
                    <span className="text-sm font-semibold text-[#241A15]">
                      Quality Ingredients
                    </span>

                    <p className="mt-1 text-xs leading-6 text-[#241A15]/45">
                      Carefully selected ingredients form the foundation of
                      every dish.
                    </p>
                  </div>
                </div>

                <div
                  className="
                    flex
                    items-start
                    gap-4
                    border-b
                    border-[#241A15]/10
                    py-5
                  "
                >
                  <span
                    className="
                      mt-1
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#B6533C]/10
                      text-[9px]
                      font-bold
                      text-[#B6533C]
                    "
                  >
                    02
                  </span>

                  <div>
                    <span className="text-sm font-semibold text-[#241A15]">
                      Thoughtful Preparation
                    </span>

                    <p className="mt-1 text-xs leading-6 text-[#241A15]/45">
                      Every element is prepared with attention to flavor,
                      texture, and presentation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 py-5">
                  <span
                    className="
                      mt-1
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#B6533C]/10
                      text-[9px]
                      font-bold
                      text-[#B6533C]
                    "
                  >
                    03
                  </span>

                  <div>
                    <span className="text-sm font-semibold text-[#241A15]">
                      Served for the Moment
                    </span>

                    <p className="mt-1 text-xs leading-6 text-[#241A15]/45">
                      Designed to be enjoyed slowly, comfortably, and with
                      good company.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RESERVATION CTA */}

          <div
            className="
              mt-20
              flex
              flex-col
              items-start
              justify-between
              gap-7
              rounded-3xl
              border
              border-[#B6533C]/20
              bg-[#241A15]
              p-7
              sm:p-9
              lg:flex-row
              lg:items-center
            "
          >
            <div>
              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#B6533C]
                "
              >
                Centa Restaurant
              </span>

              <h3
                className="
                  mt-3
                  font-serif
                  text-2xl
                  font-medium
                  tracking-[-0.025em]
                  text-[#FAF7F2]
                "
              >
                Make it part of your evening.
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  text-white/45
                "
              >
                Reserve your table and enjoy the full Centa dining
                experience.
              </p>
            </div>

            <Link
              to="/#reservation"
              className="
                group
                inline-flex
                shrink-0
                items-center
                gap-3
                rounded-xl
                bg-[#B6533C]
                px-6
                py-3.5
                text-xs
                font-bold
                uppercase
                tracking-[0.12em]
                text-white
                shadow-[0_10px_35px_rgba(182,83,60,0.12)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#FAF7F2]
                hover:text-[#241A15]
              "
            >
              Reserve a Table

              <ArrowRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>

          {/* BACK */}

          <div className="mt-10">
            <Link
              to="/menu"
              className="
                group
                inline-flex
                items-center
                gap-3
                text-xs
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#241A15]/40
                transition-colors
                duration-300
                hover:text-[#B6533C]
              "
            >
              <ArrowLeft
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:-translate-x-1
                "
              />

              Back to Menu
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
