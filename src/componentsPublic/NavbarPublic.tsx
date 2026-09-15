import { useEffect, useState } from "react";
import {
  ArrowRight,
  Menu as MenuIcon,
  X,
} from "lucide-react";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  /*
   * =====================================================
   * SECTION NAVIGATION
   * =====================================================
   */

  const handleSectionClick = (section: string) => {
    setMobileMenuOpen(false);

    if (location.pathname === "/") {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return;
    }

    navigate(`/#${section}`);
  };

  /*
   * =====================================================
   * NAV LINK CLASS
   * =====================================================
   */

  const navLinkClass = (path: string) => `
    relative
    flex
    items-center
    h-full
    text-[14px]
    font-medium
    tracking-[-0.01em]
    transition-all
    duration-200

    ${
      isActive(path)
        ? "text-[#f5efe3]"
        : "text-[#aaa39a] hover:text-[#f5efe3]"
    }
  `;

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        transition-all
        duration-500

        ${
          isScrolled
            ? `
              border-b
              border-[#2b2925]
              bg-[#0b0a08]/90
              shadow-[0_12px_45px_rgba(0,0,0,0.35)]
              backdrop-blur-2xl
            `
            : `
              bg-transparent
            `
        }
      `}
    >
      {/* =====================================================
          AMBIENT NAVBAR GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-24
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            left-[18%]
            top-[-5rem]
            h-32
            w-64
            rounded-full
            bg-[#B6533C]/[0.05]
            blur-3xl
          "
        />

        <div
          className="
            absolute
            right-[20%]
            top-[-6rem]
            h-36
            w-72
            rounded-full
            bg-[#B6533C]/[0.035]
            blur-3xl
          "
        />
      </div>

      {/* =====================================================
          MAIN NAVBAR CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          flex
          h-[82px]
          max-w-[1440px]
          items-center
          px-6
          lg:px-10
          xl:px-12
        "
      >
        {/* =====================================================
            BRAND
        ====================================================== */}

        <Link
          to="/"
          className="
            group
            flex
            shrink-0
            items-baseline
            gap-3
          "
        >
          <div className="group flex items-center gap-3">
            <div className="flex flex-col leading-none">
              <span
                className="
                  text-xl
                  font-bold
                  tracking-[0.18em]
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-[#B6533C]
                  sm:text-2xl
                  lg:text-[25px]
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
                  transition-colors
                  duration-300
                  group-hover:text-[#FAF7F2]
                  sm:text-[10px]
                  lg:text-[11px]
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
                text-white/70
                transition-colors
                duration-300
                group-hover:text-white/90
                sm:block
              "
            >
              Tastefully crafted
            </span>
          </div>
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}

        <nav
          className="
            absolute
            left-1/2
            top-1/2
            hidden
            h-full
            -translate-x-1/2
            -translate-y-1/2
            items-center
            gap-7
            lg:flex
          "
        >
          {/* HOME */}

          <Link
            to="/"
            className={navLinkClass("/")}
          >
            Home

            {isActive("/") && (
              <span
                className="
                  absolute
                  bottom-[17px]
                  left-1/2
                  h-[2px]
                  w-5
                  -translate-x-1/2
                  rounded-full
                  bg-[#B6533C]
                  shadow-[0_0_12px_rgba(182,83,60,0.5)]
                "
              />
            )}
          </Link>

          {/* ABOUT */}

          <Link
            to="/about"
            className={navLinkClass("/about")}
          >
            About

            {isActive("/about") && (
              <span
                className="
                  absolute
                  bottom-[17px]
                  left-1/2
                  h-[2px]
                  w-5
                  -translate-x-1/2
                  rounded-full
                  bg-[#B6533C]
                  shadow-[0_0_12px_rgba(182,83,60,0.5)]
                "
              />
            )}
          </Link>

          {/* MENU */}

          <Link
            to="/menu"
            className={navLinkClass("/menu")}
          >
            Menu

            {isActive("/menu") && (
              <span
                className="
                  absolute
                  bottom-[17px]
                  left-1/2
                  h-[2px]
                  w-5
                  -translate-x-1/2
                  rounded-full
                  bg-[#B6533C]
                  shadow-[0_0_12px_rgba(182,83,60,0.5)]
                "
              />
            )}
          </Link>

        

         

          {/* GALLERY */}

          <button
            type="button"
            onClick={() => handleSectionClick("gallery")}
            className="
              flex
              h-full
              items-center
              border-0
              bg-transparent
              p-0
              text-[14px]
              font-medium
              tracking-[-0.01em]
              text-[#aaa39a]
              transition-colors
              duration-200
              hover:text-[#f5efe3]
            "
          >
            Gallery
          </button>

          {/* LOCATION */}

          <Link
            to="/location"
            className={navLinkClass("/location")}
          >
            Location

            {isActive("/location") && (
              <span
                className="
                  absolute
                  bottom-[17px]
                  left-1/2
                  h-[2px]
                  w-5
                  -translate-x-1/2
                  rounded-full
                  bg-[#B6533C]
                  shadow-[0_0_12px_rgba(182,83,60,0.5)]
                "
              />
            )}
          </Link>

          {/* KARIER & MITRA */}

          <Link
            to="/karir-mitra"
            className={navLinkClass("/karir-mitra")}
          >
            Karier & Mitra

            {isActive("/karir-mitra") && (
              <span
                className="
                  absolute
                  bottom-[17px]
                  left-1/2
                  h-[2px]
                  w-5
                  -translate-x-1/2
                  rounded-full
                  bg-[#B6533C]
                  shadow-[0_0_12px_rgba(182,83,60,0.5)]
                "
              />
            )}
          </Link>

         
        </nav>

        {/* =====================================================
            DESKTOP CTA
        ====================================================== */}

        <div
          className="
            ml-auto
            hidden
            lg:flex
            lg:items-center
          "
        >
          <button
            type="button"
            onClick={() => handleSectionClick("reservation")}
            className="
              group
              flex
              items-center
              gap-2
              rounded-lg
              border
              border-[#B6533C]/40
              bg-[#B6533C]
              px-5
              py-3
              text-[12px]
              font-bold
              tracking-[0.08em]
              text-[#FAF7F2]
              shadow-[0_8px_30px_rgba(182,83,60,0.12)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#241A15]
              hover:shadow-[0_12px_40px_rgba(182,83,60,0.22)]
            "
          >
            RESERVE TABLE

            <ArrowRight
              className="
                h-3.5
                w-3.5
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </button>
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}

        <button
          type="button"
          aria-label={
            mobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          onClick={() =>
            setMobileMenuOpen((open) => !open)
          }
          className="
            ml-auto
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            border
            border-[#2b2925]
            bg-[#11100d]
            text-[#aaa39a]
            shadow-[0_8px_25px_rgba(0,0,0,0.25)]
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-[#B6533C]/40
            hover:bg-[#B6533C]/[0.06]
            hover:text-[#f5efe3]
            lg:hidden
          "
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <div
        className={`
          overflow-hidden
          border-t
          border-[#2b2925]
          bg-[#0b0a08]/95
          shadow-[0_20px_60px_rgba(0,0,0,0.4)]
          backdrop-blur-2xl
          transition-all
          duration-300
          lg:hidden

          ${
            mobileMenuOpen
              ? "max-h-[calc(100vh-82px)] opacity-100"
              : "max-h-0 border-t-transparent opacity-0"
          }
        `}
      >
        <nav
          className="
            mx-auto
            flex
            max-w-[1440px]
            flex-col
            gap-1.5
            px-6
            py-5
          "
        >
          {/* HOME */}

          <Link
            to="/"
            className="
              rounded-2xl
              px-4
              py-3.5
              text-[15px]
              font-medium
              text-[#aaa39a]
              transition-all
              hover:bg-[#15130f]
              hover:text-[#f5efe3]
            "
          >
            Home
          </Link>

          {/* ABOUT */}

          <Link
            to="/about"
            className="
              block
              w-full
              rounded-2xl
              px-4
              py-3.5
              text-[15px]
              font-medium
              text-[#aaa39a]
              transition-all
              hover:bg-[#15130f]
              hover:text-[#f5efe3]
            "
          >
            About
          </Link>

          {/* MENU */}

          <Link
            to="/menu"
            className="
              block
              w-full
              rounded-2xl
              px-4
              py-3.5
              text-[15px]
              font-medium
              text-[#aaa39a]
              transition-all
              hover:bg-[#15130f]
              hover:text-[#f5efe3]
            "
          >
            Menu
          </Link>



          {/* GALLERY */}

          <button
            type="button"
            onClick={() => handleSectionClick("gallery")}
            className="
              w-full
              rounded-2xl
              px-4
              py-3.5
              text-left
              text-[15px]
              font-medium
              text-[#aaa39a]
              transition-all
              hover:bg-[#15130f]
              hover:text-[#f5efe3]
            "
          >
            Gallery
          </button>

          {/* LOCATION */}

          <Link
            to="/location"
            className="
              block
              w-full
              rounded-2xl
              px-4
              py-3.5
              text-[15px]
              font-medium
              text-[#aaa39a]
              transition-all
              hover:bg-[#15130f]
              hover:text-[#f5efe3]
            "
          >
            Location
          </Link>

          {/* KARIER & MITRA */}

          <Link
            to="/karir-mitra"
            className="
              block
              w-full
              rounded-2xl
              px-4
              py-3.5
              text-[15px]
              font-medium
              text-[#aaa39a]
              transition-all
              hover:bg-[#15130f]
              hover:text-[#f5efe3]
            "
          >
            Karier & Mitra
          </Link>


          {/* MOBILE CTA */}

          <div className="mt-3 flex justify-end">
            <button
              type="button"
              onClick={() => handleSectionClick("reservation")}
              className="
                group
                flex
                items-center
                justify-center
                gap-2
                rounded-lg
                border
                border-[#B6533C]/40
                bg-[#B6533C]
                px-5
                py-3
                text-[14px]
                font-bold
                tracking-[0.08em]
                text-[#FAF7F2]
                shadow-[0_10px_35px_rgba(182,83,60,0.12)]
                transition-all
                duration-300
                hover:bg-[#241A15]
                hover:shadow-[0_12px_40px_rgba(182,83,60,0.2)]
              "
            >
              RESERVE TABLE

              <ArrowRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
