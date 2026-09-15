import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  MapPin,
  Phone,
  Mail,
  Clock,
  Utensils,
  Star,
  CalendarDays,
  Users,
  ChefHat,
  Wine,
  Leaf,
  Flame,
} from "lucide-react";
import toast from "react-hot-toast";
import SEO from "../components/SEO";
import { sendContactMessage } from "../services/contact.service";

/* =========================================================
   RESTAURANT CONFIGURATION
   Change these values when selling the template
========================================================= */

const restaurantConfig = {
  name: "Centa Restaurant",
  location: "Jakarta, Indonesia",
  address: "Jl. Sudirman No. 88, Jakarta",
  phone: "+62 21 1234 5678",
  email: "reservation@centarestaurant.com",
  tagline: "Good food. Great moments.",
  description:
    "A modern dining destination where thoughtful ingredients, refined cooking, and warm hospitality come together.",
  whatsapp: "6281234567890",
  instagram: "https://instagram.com/",
};

/* =========================================================
   RESTAURANT COLOR SYSTEM

   Cream      #FAF7F2
   Dark Brown #241A15
   Terracotta #B6533C
========================================================= */

const menuCategories = [
  "All",
  "Starters",
  "Main Course",
  "Pasta",
  "Desserts",
] as const;

type MenuCategory = (typeof menuCategories)[number];

type MenuItem = {
  name: string;
  category: Exclude<MenuCategory, "All">;
  price: number;
  image: string;
  popular: boolean;
  description: string;
};

const menuItems: MenuItem[] = [
  {
    name: "Truffle Mushroom Soup",
    category: "Starters",
    price: 85000,
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85",
    popular: true,
    description:
      "Velvety wild mushroom soup finished with aromatic truffle oil.",
  },
  {
    name: "Beef Carpaccio",
    category: "Starters",
    price: 125000,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85",
    popular: false,
    description:
      "Thinly sliced premium beef with parmesan, herbs, and delicate dressing.",
  },
  {
    name: "Grilled Ribeye",
    category: "Main Course",
    price: 295000,
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=85",
    popular: true,
    description:
      "Prime ribeye grilled to your preference and served with seasonal sides.",
  },
  {
    name: "Pan Seared Salmon",
    category: "Main Course",
    price: 225000,
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1000&q=85",
    popular: false,
    description:
      "Crispy-skinned salmon paired with vegetables and a light herb sauce.",
  },
  {
    name: "Truffle Tagliatelle",
    category: "Pasta",
    price: 185000,
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=85",
    popular: true,
    description:
      "Fresh tagliatelle tossed with creamy parmesan sauce and black truffle.",
  },
  {
    name: "Seafood Linguine",
    category: "Pasta",
    price: 175000,
    image:
      "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=1000&q=85",
    popular: false,
    description:
      "Linguine with fresh seafood, garlic, herbs, and a delicate tomato sauce.",
  },
  {
    name: "Classic Tiramisu",
    category: "Desserts",
    price: 75000,
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1000&q=85",
    popular: true,
    description:
      "Classic Italian tiramisu with espresso, mascarpone, and cocoa.",
  },
  {
    name: "Chocolate Fondant",
    category: "Desserts",
    price: 85000,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476a?auto=format&fit=crop&w=1000&q=85",
    popular: false,
    description:
      "Warm dark chocolate cake with a rich molten center.",
  },
];

const experiences = [
  {
    title: "Chef's Table",
    description:
      "Experience our signature dishes with an intimate view of the culinary process.",
    icon: ChefHat,
  },
  {
    title: "Fine Wine Selection",
    description:
      "A carefully curated collection of wines selected to complement our menu.",
    icon: Wine,
  },
  {
    title: "Fresh Ingredients",
    description:
      "Seasonal ingredients sourced with care for better flavor and quality.",
    icon: Leaf,
  },
  {
    title: "Private Dining",
    description:
      "An intimate setting for celebrations, business dinners, and special occasions.",
    icon: Utensils,
  },
  {
    title: "Open Kitchen",
    description:
      "Watch our chefs bring each dish to life with precision and passion.",
    icon: Flame,
  },
  {
    title: "Warm Hospitality",
    description:
      "Thoughtful service designed to make every visit comfortable and memorable.",
    icon: Star,
  },
];

const testimonials = [
  {
    name: "Daniel Morgan",
    role: "Food Enthusiast",
    text:
      "Beautiful atmosphere, excellent food, and genuinely thoughtful service. Every dish felt carefully prepared.",
  },
  {
    name: "Sofia Anderson",
    role: "Weekend Guest",
    text:
      "The food was exceptional and the atmosphere was elegant without feeling too formal. Definitely coming back.",
  },
  {
    name: "Michael Tan",
    role: "Business Dinner",
    text:
      "Perfect place for a business dinner. Great food, professional service, and a very comfortable atmosphere.",
  },
];

const faqs = [
  {
    question: "Do I need a reservation?",
    answer:
      "Reservations are recommended, especially for dinner, weekends, and special occasions. Walk-ins are welcome subject to table availability.",
  },
  {
    question: "What are your opening hours?",
    answer:
      "We are open daily from 11:00 to 23:00. Kitchen service may close slightly earlier.",
  },
  {
    question: "Do you offer vegetarian options?",
    answer:
      "Yes. We offer several vegetarian dishes and can accommodate dietary preferences when requested in advance.",
  },
  {
    question: "Can I book a private dining experience?",
    answer:
      "Yes. Private dining is available for selected events and group sizes. Please contact our reservation team for availability.",
  },
  {
    question: "Do you accept large groups?",
    answer:
      "Yes. We welcome group reservations and can arrange seating based on your party size and requirements.",
  },
];

/* =========================================================
   REVEAL ANIMATION
========================================================= */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export default function RestaurantLandingPage() {
  const menuReveal = useReveal<HTMLDivElement>();
  const experienceReveal = useReveal<HTMLDivElement>();
  const aboutReveal = useReveal<HTMLDivElement>();
  const offerReveal = useReveal<HTMLElement>();
  const galleryReveal = useReveal<HTMLDivElement>();
  const testimonialsReveal = useReveal<HTMLElement>();
  const contactReveal = useReveal<HTMLDivElement>();

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] =
    useState<MenuCategory>("All");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  });

  useEffect(() => {
    const id = window.location.hash.replace("#", "");

    if (!id) return;

    const target = document.getElementById(id);

    if (target) {
      setTimeout(() => {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await sendContactMessage({
        name: formData.name,
        email: formData.email,
        subject: `Restaurant Reservation - ${restaurantConfig.name}`,
        message: `
Phone: ${formData.phone}

Reservation Date:
${formData.date}

Reservation Time:
${formData.time}

Guests:
${formData.guests}

Message:
${formData.message}
        `.trim(),
      });

      toast.success(
        "Your reservation request has been sent. Our team will contact you shortly."
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "2",
        message: "",
      });
    } catch (error: any) {
      console.error("RESERVATION ERROR:", error);

      toast.error(
        error?.response?.data?.message ??
          "Unable to send your reservation request."
      );
    }
  };

  const filteredMenu =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <>
      <SEO
        title={`${restaurantConfig.name} — ${restaurantConfig.tagline}`}
        description={restaurantConfig.description}
        canonical="https://example.com/"
      />

      <div className="min-h-screen bg-[#FAF7F2] text-[#241A15] selection:bg-[#B6533C] selection:text-[#FAF7F2]">
        <main>
          {/* =================================================
              HERO
          ================================================= */}

          <section
            id="home"
            className="relative min-h-screen overflow-hidden scroll-mt-24"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
              backgroundImage:
  "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2200&q=90')",
              }}
            />

            <div className="absolute inset-0 bg-[#241A15]/60" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#241A15] via-[#241A15]/30 to-[#241A15]/10" />

            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-32 pt-36 sm:px-8 lg:px-10">
              <div className="max-w-4xl">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#B6533C]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#FAF7F2]/75">
                    Welcome to {restaurantConfig.name}
                  </span>
                </div>

                <h1 className="max-w-4xl font-serif text-5xl font-medium leading-[0.98] tracking-[-0.04em] text-[#FAF7F2] sm:text-7xl lg:text-[88px]">
                  Good food,
                  <br />
                  <span className="italic text-[#FAF7F2]">
                    great moments.
                  </span>
                </h1>

                <p className="mt-7 max-w-xl text-sm leading-7 text-[#FAF7F2]/75 sm:text-base">
                  {restaurantConfig.description}
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="#reservation"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#B6533C] px-6 py-3.5 text-sm font-bold text-[#FAF7F2] transition hover:-translate-y-0.5 hover:bg-[#241A15]"
                  >
                    Reserve a Table
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <a
                    href="#menu"
                    className="inline-flex items-center gap-2 rounded-lg border border-[#FAF7F2]/30 bg-[#FAF7F2]/10 px-6 py-3.5 text-sm font-semibold text-[#FAF7F2] backdrop-blur-md transition hover:bg-[#FAF7F2]/20"
                  >
                    Explore Menu
                  </a>
                </div>
              </div>
            </div>

            <div className="absolute bottom-36 right-8 z-10 hidden lg:block">
              <div className="flex items-center gap-8 text-[#FAF7F2]">
                <div>
                  <div className="font-serif text-2xl">4.9</div>

                  <div className="mt-1 flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-3 w-3 fill-[#B6533C] text-[#B6533C]"
                      />
                    ))}
                  </div>

                  <div className="mt-1 text-[9px] uppercase tracking-wider text-[#FAF7F2]/50">
                    Guest rating
                  </div>
                </div>

                <div className="h-12 w-px bg-[#FAF7F2]/25" />

                <div>
                  <div className="font-serif text-2xl">
                    11:00–23:00
                  </div>

                  <div className="mt-1 text-[9px] uppercase tracking-wider text-[#FAF7F2]/50">
                    Open daily
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =================================================
              QUICK INFO
          ================================================= */}

          <section
            id="info"
            className="relative z-20 -mt-20 scroll-mt-24 px-5 sm:px-8 lg:px-10"
          >
            <div className="mx-auto max-w-6xl">
              <div className="overflow-hidden rounded-2xl border border-[#241A15]/10 bg-[#FFFDF9] shadow-[0_25px_80px_rgba(36,26,21,0.15)]">
                <div className="grid md:grid-cols-4">
                  <div className="border-b border-[#241A15]/10 p-5 md:border-b-0 md:border-r">
                    <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-[#241A15]/45">
                      <Clock className="h-3.5 w-3.5" />
                      Opening Hours
                    </div>

                    <div className="mt-2 text-sm">
                      Daily · 11:00–23:00
                    </div>
                  </div>

                  <div className="border-b border-[#241A15]/10 p-5 md:border-b-0 md:border-r">
                    <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-[#241A15]/45">
                      <Utensils className="h-3.5 w-3.5" />
                      Cuisine
                    </div>

                    <div className="mt-2 text-sm">
                      Modern European
                    </div>
                  </div>

                  <div className="border-b border-[#241A15]/10 p-5 md:border-b-0 md:border-r">
                    <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-[#241A15]/45">
                      <Users className="h-3.5 w-3.5" />
                      Dining
                    </div>

                    <div className="mt-2 text-sm">
                      Casual Fine Dining
                    </div>
                  </div>

                  <a
                    href="#reservation"
                    className="flex min-h-[90px] items-center justify-center gap-2 bg-[#B6533C] text-sm font-bold text-[#FAF7F2] transition hover:bg-[#241A15]"
                  >
                    Book a Table
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* =================================================
              MENU
          ================================================= */}

          <section
            id="menu"
            className="scroll-mt-24 px-6 py-28 sm:px-8 lg:px-10 lg:py-36"
          >
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B6533C]">
                    Our Menu
                  </span>

                  <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#241A15] sm:text-5xl">
                    Crafted with care,
                    <br />
                    <span className="italic text-[#B6533C]">
                      served with purpose.
                    </span>
                  </h2>
                </div>

                <p className="max-w-md text-sm leading-7 text-[#241A15]/60 lg:ml-auto">
                  Explore a menu built around fresh ingredients,
                  refined techniques, and flavors designed to make
                  every visit memorable.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-2">
                {menuCategories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full border px-5 py-2.5 text-[10px] font-semibold uppercase tracking-wider transition ${
                      activeCategory === category
                        ? "border-[#B6533C] bg-[#B6533C] text-[#FAF7F2]"
                        : "border-[#241A15]/15 bg-[#FFFDF9] text-[#241A15]/60 hover:border-[#B6533C]/50 hover:text-[#B6533C]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div
                ref={menuReveal.ref}
                className="mt-10 grid gap-6 lg:grid-cols-2"
              >
                {filteredMenu.map((item, index) => (
                  <article
                    key={item.name}
                    style={{
                      transitionDelay: menuReveal.visible
                        ? `${index * 80}ms`
                        : "0ms",
                    }}
                    className={`group flex overflow-hidden rounded-2xl border border-[#241A15]/10 bg-[#FFFDF9] transition-all duration-700 hover:-translate-y-1 hover:border-[#B6533C]/40 hover:shadow-[0_20px_50px_rgba(36,26,21,0.10)] ${
                      menuReveal.visible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    <div className="hidden w-40 shrink-0 overflow-hidden sm:block">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full min-h-[190px] w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] uppercase tracking-[0.2em] text-[#B6533C]">
                              {item.category}
                            </span>

                            {item.popular && (
                              <span className="rounded-full bg-[#B6533C]/10 px-2 py-1 text-[8px] font-semibold uppercase tracking-wider text-[#B6533C]">
                                Popular
                              </span>
                            )}
                          </div>

                          <h3 className="mt-3 font-serif text-2xl text-[#241A15]">
                            {item.name}
                          </h3>

                          <p className="mt-2 text-xs leading-6 text-[#241A15]/55">
                            {item.description}
                          </p>
                        </div>

                        <div className="shrink-0 text-right">
                          <div className="font-serif text-xl text-[#B6533C]">
                            Rp{" "}
                            {item.price.toLocaleString("id-ID")}
                          </div>
                        </div>
                      </div>

                      <div className="mt-auto pt-6">
                        <a
                          href="#reservation"
                          className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-[#241A15]/50 transition hover:text-[#B6533C]"
                        >
                          Reserve a table
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* =================================================
              EXPERIENCE
          ================================================= */}

          <section
            id="experience"
            className="scroll-mt-24 border-y border-[#241A15]/10 bg-[#241A15] px-6 py-28 sm:px-8 lg:px-10 lg:py-36"
          >
            <div className="mx-auto max-w-7xl">
              <div className="max-w-2xl">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B6533C]">
                  Dining Experience
                </span>

                <h2 className="mt-5 font-serif text-4xl tracking-tight text-[#FAF7F2] sm:text-5xl">
                  More than a meal,
                  <br />
                  <span className="italic text-[#B6533C]">
                    it is an experience.
                  </span>
                </h2>
              </div>

              <div
                ref={experienceReveal.ref}
                className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[#FAF7F2]/10 bg-[#FAF7F2]/10 sm:grid-cols-2 lg:grid-cols-3"
              >
                {experiences.map((experience, index) => {
                  const Icon = experience.icon;

                  return (
                    <div
                      key={experience.title}
                      style={{
                        transitionDelay: experienceReveal.visible
                          ? `${index * 80}ms`
                          : "0ms",
                      }}
                      className={`group bg-[#241A15] p-7 transition-all duration-700 hover:bg-[#B6533C]/10 ${
                        experienceReveal.visible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-8 opacity-0"
                      }`}
                    >
                      <Icon className="h-7 w-7 text-[#B6533C] transition group-hover:scale-110" />

                      <h3 className="mt-6 font-serif text-xl text-[#FAF7F2]">
                        {experience.title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-[#FAF7F2]/55">
                        {experience.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* =================================================
              ABOUT
          ================================================= */}

          <section
            id="about"
            className="scroll-mt-24 px-6 py-28 sm:px-8 lg:px-10 lg:py-36"
          >
            <div
              ref={aboutReveal.ref}
              className={`mx-auto grid max-w-7xl gap-14 transition-all duration-1000 lg:grid-cols-2 lg:items-center ${
                aboutReveal.visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=85"
                  alt={`${restaurantConfig.name} interior`}
                  className="aspect-[4/5] w-full rounded-2xl object-cover"
                />

                <div className="absolute -bottom-7 -right-5 hidden w-52 rounded-xl border border-[#241A15]/10 bg-[#FFFDF9] p-5 shadow-2xl sm:block">
                  <div className="font-serif text-3xl text-[#B6533C]">
                    12+
                  </div>

                  <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#241A15]/50">
                    Years of culinary craft
                  </div>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B6533C]">
                  Our Story
                </span>

                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#241A15] sm:text-5xl">
                  Food made with
                  <br />
                  <span className="italic text-[#B6533C]">
                    intention.
                  </span>
                </h2>

                <p className="mt-7 text-sm leading-7 text-[#241A15]/60">
                  At {restaurantConfig.name}, we believe great food
                  is about more than ingredients. It is about the
                  people, the atmosphere, and the moments shared
                  around the table.
                </p>

                <p className="mt-5 text-sm leading-7 text-[#241A15]/60">
                  Our kitchen combines classic culinary techniques
                  with modern ideas, creating dishes that feel
                  familiar, refined, and distinctly our own.
                </p>

                <div className="mt-8 flex items-center gap-5">
                  <div>
                    <div className="font-serif text-2xl text-[#241A15]">
                      4.9/5
                    </div>

                    <div className="mt-1 text-[9px] uppercase tracking-wider text-[#241A15]/40">
                      Guest satisfaction
                    </div>
                  </div>

                  <div className="h-10 w-px bg-[#241A15]/15" />

                  <div>
                    <div className="font-serif text-2xl text-[#241A15]">
                      98%
                    </div>

                    <div className="mt-1 text-[9px] uppercase tracking-wider text-[#241A15]/40">
                      Returning guests
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =================================================
              SPECIAL OFFER
          ================================================= */}

          <section
            ref={offerReveal.ref}
            className="px-6 py-20 sm:px-8 lg:px-10"
          >
            <div
              className={`mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[#B6533C]/20 bg-[#241A15] transition-all duration-1000 ${
                offerReveal.visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="grid lg:grid-cols-2">
                <div className="p-8 sm:p-12 lg:p-16">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B6533C]">
                    Chef's Special
                  </span>

                  <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight text-[#FAF7F2] sm:text-5xl">
                    A table worth
                    <br />
                    <span className="italic text-[#B6533C]">
                      gathering around.
                    </span>
                  </h2>

                  <p className="mt-6 max-w-lg text-sm leading-7 text-[#FAF7F2]/65">
                    Join us for our seasonal tasting experience,
                    featuring carefully selected ingredients,
                    signature dishes, and a curated dessert course.
                  </p>

                  <a
                    href="#reservation"
                    className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#B6533C] px-6 py-3.5 text-sm font-bold text-[#FAF7F2] transition hover:bg-[#FAF7F2] hover:text-[#241A15]"
                  >
                    Reserve Your Table
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

<div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90')",
  }}
/>
              </div>
            </div>
          </section>

          {/* =================================================
              GALLERY
          ================================================= */}

          <section
            id="gallery"
            className="scroll-mt-24 px-6 py-28 sm:px-8 lg:px-10 lg:py-36"
          >
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B6533C]">
                    Gallery
                  </span>

                  <h2 className="mt-5 font-serif text-4xl text-[#241A15] sm:text-5xl">
                    A glimpse of
                    <br />
                    <span className="italic text-[#B6533C]">
                      the experience.
                    </span>
                  </h2>
                </div>

                <p className="max-w-sm text-sm leading-7 text-[#241A15]/55">
                  Discover our dishes, dining room, atmosphere,
                  and the details that make {restaurantConfig.name}
                  unique.
                </p>
              </div>

              <div
                ref={galleryReveal.ref}
                className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4"
              >
                {[
                  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85",
                  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=85",
                  "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85",
                  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85",
                  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=85",
                  "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=85",
                  "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1000&q=85",
                  "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=85",
                ].map((image, index) => (
                  <div
                    key={image}
                    style={{
                      transitionDelay: galleryReveal.visible
                        ? `${index * 70}ms`
                        : "0ms",
                    }}
                    className={`group overflow-hidden rounded-xl transition-all duration-700 ${
                      galleryReveal.visible
                        ? "scale-100 opacity-100"
                        : "scale-95 opacity-0"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Restaurant gallery ${index + 1}`}
                      className="aspect-square h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* =================================================
              TESTIMONIALS
          ================================================= */}

          <section
            ref={testimonialsReveal.ref}
            className="border-y border-[#FAF7F2]/10 bg-[#241A15] px-6 py-28 sm:px-8 lg:px-10 lg:py-36"
          >
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B6533C]">
                  Guest Reviews
                </span>

                <h2 className="mt-5 font-serif text-4xl text-[#FAF7F2] sm:text-5xl">
                  What our guests
                  <br />
                  <span className="italic text-[#B6533C]">
                    remember.
                  </span>
                </h2>
              </div>

              <div className="mt-14 grid gap-5 lg:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                  <article
                    key={testimonial.name}
                    style={{
                      transitionDelay:
                        testimonialsReveal.visible
                          ? `${index * 100}ms`
                          : "0ms",
                    }}
                    className={`rounded-2xl border border-[#FAF7F2]/10 bg-[#FAF7F2]/5 p-7 transition-all duration-700 hover:-translate-y-1 hover:bg-[#B6533C]/10 ${
                      testimonialsReveal.visible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-3.5 w-3.5 fill-[#B6533C] text-[#B6533C]"
                        />
                      ))}
                    </div>

                    <p className="mt-6 text-sm leading-7 text-[#FAF7F2]/65">
                      “{testimonial.text}”
                    </p>

                    <div className="mt-7 border-t border-[#FAF7F2]/10 pt-5">
                      <div className="text-sm font-semibold text-[#FAF7F2]">
                        {testimonial.name}
                      </div>

                      <div className="mt-1 text-[10px] uppercase tracking-wider text-[#FAF7F2]/40">
                        {testimonial.role}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* =================================================
              FAQ
          ================================================= */}

          <section className="px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
            <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B6533C]">
                  FAQ
                </span>

                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#241A15] sm:text-5xl">
                  Questions
                  <br />
                  <span className="italic text-[#B6533C]">
                    before dining.
                  </span>
                </h2>

                <p className="mt-6 max-w-md text-sm leading-7 text-[#241A15]/55">
                  Everything you need to know before making
                  your reservation.
                </p>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;

                  return (
                    <div
                      key={faq.question}
                      className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                        isOpen
                          ? "border-[#B6533C]/30 bg-[#B6533C]/5"
                          : "border-[#241A15]/10 bg-[#FFFDF9]"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenFaq(isOpen ? null : index)
                        }
                        className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-[10px] font-bold text-[#B6533C]">
                            0{index + 1}
                          </span>

                          <span className="text-sm font-semibold text-[#241A15]">
                            {faq.question}
                          </span>
                        </div>

                        <ChevronDown
                          className={`h-4 w-4 shrink-0 transition duration-300 ${
                            isOpen
                              ? "rotate-180 text-[#B6533C]"
                              : "text-[#241A15]/30"
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="border-t border-[#241A15]/10 px-6 pb-6 pt-4">
                          <p className="max-w-2xl text-sm leading-7 text-[#241A15]/60">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* =================================================
              RESERVATION
          ================================================= */}

          <section
            id="reservation"
            className="scroll-mt-24 border-t border-[#FAF7F2]/10 bg-[#241A15] px-6 py-28 sm:px-8 lg:px-10 lg:py-36"
          >
            <div className="mx-auto max-w-7xl">
              <div className="max-w-2xl">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B6533C]">
                  Reservations
                </span>

                <h2 className="mt-5 font-serif text-4xl text-[#FAF7F2] sm:text-5xl">
                  Save your
                  <br />
                  <span className="italic text-[#B6533C]">
                    table.
                  </span>
                </h2>

                <p className="mt-6 text-sm leading-7 text-[#FAF7F2]/60">
                  Tell us when you would like to dine and our
                  reservation team will confirm your table shortly.
                </p>
              </div>

              <div
                ref={contactReveal.ref}
                className="mt-12 grid overflow-hidden rounded-2xl border border-[#FAF7F2]/10 bg-[#FFFDF9] shadow-[0_20px_60px_rgba(0,0,0,0.20)] lg:grid-cols-[1.1fr_0.9fr]"
              >
                {/* FORM */}

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 p-7 sm:p-9 lg:p-10"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    {[
                      {
                        id: "name",
                        label: "Full Name",
                        type: "text",
                        placeholder: "John Smith",
                      },
                      {
                        id: "email",
                        label: "Email",
                        type: "email",
                        placeholder: "name@email.com",
                      },
                    ].map((field) => (
                      <div key={field.id}>
                        <label
                          htmlFor={field.id}
                          className="text-[10px] font-semibold uppercase tracking-wider text-[#241A15]/55"
                        >
                          {field.label}
                        </label>

                        <input
                          id={field.id}
                          name={field.id}
                          type={field.type}
                          required
                          value={
                            formData[
                              field.id as keyof typeof formData
                            ] as string
                          }
                          onChange={handleInputChange}
                          placeholder={field.placeholder}
                          className="mt-2 w-full rounded-lg border border-[#241A15]/15 bg-[#FAF7F2] px-4 py-3 text-sm text-[#241A15] outline-none transition placeholder:text-[#241A15]/30 focus:border-[#B6533C] focus:ring-2 focus:ring-[#B6533C]/10"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="text-[10px] font-semibold uppercase tracking-wider text-[#241A15]/55"
                      >
                        Phone
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+62 812..."
                        className="mt-2 w-full rounded-lg border border-[#241A15]/15 bg-[#FAF7F2] px-4 py-3 text-sm text-[#241A15] outline-none transition placeholder:text-[#241A15]/30 focus:border-[#B6533C] focus:ring-2 focus:ring-[#B6533C]/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="guests"
                        className="text-[10px] font-semibold uppercase tracking-wider text-[#241A15]/55"
                      >
                        Guests
                      </label>

                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="mt-2 w-full rounded-lg border border-[#241A15]/15 bg-[#FAF7F2] px-4 py-3 text-sm text-[#241A15] outline-none focus:border-[#B6533C] focus:ring-2 focus:ring-[#B6533C]/10"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5 Guests</option>
                        <option value="6+">6+ Guests</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="date"
                        className="text-[10px] font-semibold uppercase tracking-wider text-[#241A15]/55"
                      >
                        Date
                      </label>

                      <div className="relative">
                        <CalendarDays className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#B6533C]" />

                        <input
                          id="date"
                          name="date"
                          type="date"
                          required
                          value={formData.date}
                          onChange={handleInputChange}
                          className="mt-2 w-full rounded-lg border border-[#241A15]/15 bg-[#FAF7F2] px-4 py-3 pl-11 text-sm text-[#241A15] outline-none focus:border-[#B6533C]"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="time"
                        className="text-[10px] font-semibold uppercase tracking-wider text-[#241A15]/55"
                      >
                        Time
                      </label>

                      <div className="relative">
                        <Clock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#B6533C]" />

                        <input
                          id="time"
                          name="time"
                          type="time"
                          required
                          value={formData.time}
                          onChange={handleInputChange}
                          className="mt-2 w-full rounded-lg border border-[#241A15]/15 bg-[#FAF7F2] px-4 py-3 pl-11 text-sm text-[#241A15] outline-none focus:border-[#B6533C]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-[10px] font-semibold uppercase tracking-wider text-[#241A15]/55"
                    >
                      Special Request
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Birthday, anniversary, dietary requirements, seating preference..."
                      className="mt-2 w-full resize-y rounded-lg border border-[#241A15]/15 bg-[#FAF7F2] px-4 py-3 text-sm leading-6 text-[#241A15] outline-none placeholder:text-[#241A15]/30 focus:border-[#B6533C] focus:ring-2 focus:ring-[#B6533C]/10"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#B6533C] px-6 py-3.5 text-sm font-bold text-[#FAF7F2] transition hover:-translate-y-0.5 hover:bg-[#241A15] hover:shadow-lg"
                  >
                    Request Reservation
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>

                {/* CONTACT SIDE */}

                <div className="relative overflow-hidden bg-[#241A15]">
                  <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#B6533C]/20 blur-[90px]" />

                  <div className="relative flex h-full flex-col justify-between p-8 text-[#FAF7F2] sm:p-10">
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B6533C]">
                        Visit Us
                      </div>

                      <h3 className="mt-5 max-w-sm font-serif text-3xl">
                        Come hungry.
                        <br />
                        Leave with a memory.
                      </h3>
                    </div>

                    <div className="mt-12 space-y-5">
                      {/* PHONE */}

                      <a
                        href={`https://wa.me/${restaurantConfig.whatsapp}`}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-4"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#FAF7F2]/15 bg-[#FAF7F2]/5">
                          <Phone className="h-4 w-4 text-[#B6533C]" />
                        </div>

                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-[#FAF7F2]/40">
                            Reservations
                          </div>

                          <div className="mt-1 text-sm group-hover:text-[#B6533C]">
                            {restaurantConfig.phone}
                          </div>
                        </div>
                      </a>

                      {/* EMAIL */}

                      <a
                        href={`mailto:${restaurantConfig.email}`}
                        className="group flex items-center gap-4"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#FAF7F2]/15 bg-[#FAF7F2]/5">
                          <Mail className="h-4 w-4 text-[#B6533C]" />
                        </div>

                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-[#FAF7F2]/40">
                            Email
                          </div>

                          <div className="mt-1 text-sm group-hover:text-[#B6533C]">
                            {restaurantConfig.email}
                          </div>
                        </div>
                      </a>

                      {/* LOCATION */}

                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#FAF7F2]/15 bg-[#FAF7F2]/5">
                          <MapPin className="h-4 w-4 text-[#B6533C]" />
                        </div>

                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-[#FAF7F2]/40">
                            Location
                          </div>

                          <div className="mt-1 text-sm">
                            {restaurantConfig.address}
                          </div>
                        </div>
                      </div>

                      {/* INSTAGRAM */}

                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#FAF7F2]/15 bg-[#FAF7F2]/5">
                          <span className="text-xs font-semibold text-[#B6533C]">
                            IG
                          </span>
                        </div>

                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-[#FAF7F2]/40">
                            Instagram
                          </div>

                          <a
                            href={restaurantConfig.instagram}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-1 block text-sm hover:text-[#B6533C]"
                          >
                            Follow our dining journey
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="mt-12 border-t border-[#FAF7F2]/15 pt-6">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 fill-[#B6533C] text-[#B6533C]" />

                        <span className="text-sm font-semibold">
                          4.9 / 5
                        </span>

                        <span className="text-xs text-[#FAF7F2]/40">
                          from our guests
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
