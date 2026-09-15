import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

type FooterLink =
  | {
      name: string;
      type: "section";
      section: string;
    }
  | {
      name: string;
      type: "page";
      path: string;
    };

const restaurantConfig = {
  name: "Centa Restaurant",
  location: "Jakarta, Indonesia",
  address: "Jl. Sudirman No. 88, Jakarta",
  phone: "+62 21 1234 5678",
  email: "reservation@centarestaurant.com",
  whatsapp: "6281234567890",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
};

export default function FooterPublic() {
  const navigate = useNavigate();
  const location = useLocation();

  const footerLinks: FooterLink[] = [
    {
      name: "About Us",
      type: "page",
      path: "/about",
    },
    {
      name: "Menu",
      type: "page",
      path: "/menu",
    },
    
    {
      name: "Location",
      type: "page",
      path: "/location",
    },
    {
      name: "Karier & Mitra",
      type: "page",
      path: "/karir-mitra",
    },
    {
      name: "Gallery",
      type: "section",
      section: "gallery",
    },
    {
      name: "FAQ",
      type: "section",
      section: "faq",
    },
    {
      name: "Reservation",
      type: "section",
      section: "reservation",
    },
  ];

  const diningExperiences = [
    "Chef's Table",
    "Fine Wine Selection",
    "Fresh Ingredients",
    "Private Dining",
    "Open Kitchen",
    "Warm Hospitality",
  ];

  const handleSectionNavigation = (section: string) => {
    if (location.pathname === "/") {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return;
    }

    navigate(`/#${section}`);
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-[#B6533C]/15
        bg-[#0b0a08]
      "
    >
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_15%_20%,rgba(182,83,60,0.09),transparent_30%),radial-gradient(circle_at_85%_80%,rgba(182,83,60,0.06),transparent_30%)]
        "
      />

      {/* =========================================================
          SUBTLE GRID
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(to_right,rgba(182,83,60,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(182,83,60,0.018)_1px,transparent_1px)]
          bg-[size:64px_64px]
          opacity-40
        "
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1440px]
          px-6
          py-20
          lg:px-10
          xl:px-12
        "
      >
        {/* =======================================================
            TOP CTA
        ======================================================== */}

        <div
          className="
            mb-16
            flex
            flex-col
            gap-7
            border-b
            border-white/[0.07]
            pb-14
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.35em]
                text-[#B6533C]
              "
            >
              Reserve Your Table
            </span>

            <h2
              className="
                mt-4
                max-w-2xl
                font-serif
                text-3xl
                font-medium
                leading-tight
                tracking-[-0.03em]
                text-[#FAF7F2]
                sm:text-4xl
                lg:text-5xl
              "
            >
              Good food deserves
              <span className="text-[#B6533C]">
                {" "}great company.
              </span>
            </h2>

            <p
              className="
                mt-4
                max-w-xl
                text-sm
                leading-7
                text-white/40
              "
            >
              Join us for thoughtfully prepared dishes,
              warm hospitality, and memorable moments.
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              handleSectionNavigation("reservation")
            }
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-3
              rounded-lg
              border
              border-[#B6533C]/40
              bg-[#B6533C]
              px-6
              py-3.5
              text-xs
              font-bold
              tracking-[0.12em]
              text-[#FAF7F2]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#241A15]
              hover:shadow-[0_12px_40px_rgba(182,83,60,0.2)]
            "
          >
            RESERVE TABLE

            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </button>
        </div>

        {/* =======================================================
            MAIN GRID
        ======================================================== */}

        <div
          className="
            grid
            gap-14
            lg:grid-cols-[1.5fr_1fr_1fr]
          "
        >
          {/* =====================================================
              BRAND
          ====================================================== */}

          <div>
            <Link
              to="/"
              className="
                group
                inline-flex
                items-baseline
                gap-3
              "
            >
              <div className="flex flex-col leading-none">
                <span
                  className="
                    text-2xl
                    font-bold
                    tracking-[0.18em]
                    text-[#FAF7F2]
                    transition-colors
                    duration-300
                    group-hover:text-[#B6533C]
                    sm:text-[27px]
                  "
                >
                  CENTA
                </span>

                <span
                  className="
                    mt-1
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.32em]
                    text-[#B6533C]
                    sm:text-[10px]
                  "
                >
                  Restaurant
                </span>
              </div>

              <div className="h-8 w-px bg-[#B6533C]/30" />

              <span
                className="
                  hidden
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-white/50
                  transition-colors
                  duration-300
                  group-hover:text-white/75
                  sm:block
                "
              >
                Tastefully crafted
              </span>
            </Link>

            <p
              className="
                mt-7
                max-w-md
                text-sm
                leading-7
                text-white/40
              "
            >
              A modern dining destination where thoughtful
              ingredients, refined cooking, and warm
              hospitality come together.
            </p>

            {/* LOCATION */}

            <div
              className="
                mt-7
                text-xs
                leading-6
                text-white/40
              "
            >
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#B6533C]
                "
              >
                FIND US
              </p>

              <p className="mt-1 max-w-xs">
                {restaurantConfig.address}
                <br />
                {restaurantConfig.location}
              </p>
            </div>

            {/* SOCIAL */}

            <div
              className="
                mt-7
                flex
                flex-wrap
                gap-3
              "
            >
              {/* INSTAGRAM */}

              <a
                href={restaurantConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  group
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  text-white/40
                  transition-all
                  duration-300
                  hover:border-[#B6533C]/40
                  hover:bg-[#B6533C]/[0.08]
                  hover:text-[#B6533C]
                "
              >
                <FaInstagram
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </a>

              {/* FACEBOOK */}

              <a
                href={restaurantConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="
                  group
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  text-white/40
                  transition-all
                  duration-300
                  hover:border-[#B6533C]/40
                  hover:bg-[#B6533C]/[0.08]
                  hover:text-[#B6533C]
                "
              >
                <FaFacebookF
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </a>

              {/* WHATSAPP */}

              <a
                href={`https://wa.me/${restaurantConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="
                  group
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  text-white/40
                  transition-all
                  duration-300
                  hover:border-[#B6533C]/40
                  hover:bg-[#B6533C]/[0.08]
                  hover:text-[#B6533C]
                "
              >
                <FaWhatsapp
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </a>
            </div>
          </div>

          {/* =====================================================
              EXPLORE
          ====================================================== */}

          <div>
            <h4
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.35em]
                text-white/60
              "
            >
              EXPLORE
            </h4>

            <ul
              className="
                mt-7
                space-y-4
              "
            >
              {footerLinks.map((item) => (
                <li key={item.name}>
                  {item.type === "page" ? (
                    <Link
                      to={item.path}
                      className="
                        group
                        flex
                        items-center
                        gap-3
                        text-sm
                        text-white/45
                        transition-all
                        duration-300
                        hover:translate-x-1
                        hover:text-[#B6533C]
                      "
                    >
                      <span
                        className="
                          h-px
                          w-0
                          bg-[#B6533C]
                          transition-all
                          duration-300
                          group-hover:w-4
                        "
                      />

                      {item.name}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() =>
                        handleSectionNavigation(item.section)
                      }
                      className="
                        group
                        flex
                        items-center
                        gap-3
                        text-sm
                        text-white/45
                        transition-all
                        duration-300
                        hover:translate-x-1
                        hover:text-[#B6533C]
                      "
                    >
                      <span
                        className="
                          h-px
                          w-0
                          bg-[#B6533C]
                          transition-all
                          duration-300
                          group-hover:w-4
                        "
                      />

                      {item.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* =====================================================
              DINING
          ====================================================== */}

          <div>
            <h4
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.35em]
                text-white/60
              "
            >
              DINING
            </h4>

            <ul
              className="
                mt-7
                space-y-4
              "
            >
              {diningExperiences.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() =>
                      handleSectionNavigation("experience")
                    }
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      text-left
                      text-sm
                      text-white/45
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-[#B6533C]
                    "
                  >
                    <span
                      className="
                        h-1
                        w-1
                        rounded-full
                        bg-[#B6533C]/50
                        transition-all
                        duration-300
                        group-hover:scale-150
                        group-hover:bg-[#B6533C]
                      "
                    />

                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* =========================================================
            CONTACT STRIP
        ========================================================== */}

        <div
          className="
            mt-16
            grid
            gap-4
            border-y
            border-white/[0.07]
            py-7
            sm:grid-cols-3
          "
        >
          {/* PHONE */}

          <a
            href={`tel:${restaurantConfig.phone.replace(
              /\s/g,
              ""
            )}`}
            className="
              group
              text-sm
              text-white/45
              transition-colors
              hover:text-[#B6533C]
            "
          >
            <span
              className="
                block
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-white/30
              "
            >
              RESERVATIONS
            </span>

            <span className="mt-1 block">
              {restaurantConfig.phone}
            </span>
          </a>

          {/* EMAIL */}

          <a
            href={`mailto:${restaurantConfig.email}`}
            className="
              group
              text-sm
              text-white/45
              transition-colors
              hover:text-[#B6533C]
            "
          >
            <span
              className="
                block
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-white/30
              "
            >
              EMAIL
            </span>

            <span className="mt-1 block">
              {restaurantConfig.email}
            </span>
          </a>

          {/* HOURS */}

          <div
            className="
              text-sm
              text-white/45
            "
          >
            <span
              className="
                block
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-white/30
              "
            >
              OPENING HOURS
            </span>

            <span className="mt-1 block">
              Daily · 11:00–23:00
            </span>
          </div>
        </div>

        {/* =========================================================
            BOTTOM
        ========================================================== */}

        <div
          className="
            mt-7
            flex
            flex-col
            gap-4
            text-[11px]
            text-white/30
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>
            © 2026 {restaurantConfig.name}.
            All rights reserved.
          </p>

          <div
            className="
              flex
              flex-wrap
              gap-5
            "
          >
            <button
              type="button"
              className="
                transition-colors
                hover:text-white/60
              "
            >
              Privacy Policy
            </button>

            <button
              type="button"
              className="
                transition-colors
                hover:text-white/60
              "
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}