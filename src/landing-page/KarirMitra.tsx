import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChefHat,
  Handshake,
  Mail,
  MapPin,
  Users,
  Utensils,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const restaurantConfig = {
  name: "Centa Restaurant",
  location: "Jakarta, Indonesia",
  address: "Jl. Sudirman No. 88, Jakarta",
  email: "reservation@centarestaurant.com",
};

const careerOpportunities = [
  {
    icon: ChefHat,
    title: "Kitchen & Culinary",
    description:
      "Join our culinary team and help create thoughtful dishes using quality ingredients and refined techniques.",
    positions: ["Chef", "Sous Chef", "Kitchen Staff"],
  },
  {
    icon: Users,
    title: "Hospitality & Service",
    description:
      "Be part of the team that creates warm, attentive, and memorable experiences for every guest.",
    positions: ["Restaurant Supervisor", "Waiter / Waitress", "Host / Hostess"],
  },
  {
    icon: Building2,
    title: "Operations",
    description:
      "Support the daily operations behind the restaurant and help maintain a consistent standard of service.",
    positions: ["Operations Staff", "Purchasing", "Administration"],
  },
];

const careerValues = [
  {
    number: "01",
    title: "Grow Together",
    description:
      "We believe great restaurants are built by people who learn, support, and grow together.",
  },
  {
    number: "02",
    title: "Take Ownership",
    description:
      "We value people who care about their work, take responsibility, and always look for ways to improve.",
  },
  {
    number: "03",
    title: "Respect the Craft",
    description:
      "From preparing ingredients to welcoming guests, every role contributes to the experience.",
  },
  {
    number: "04",
    title: "Create With Purpose",
    description:
      "We encourage curiosity, thoughtful ideas, and a genuine desire to make every visit better.",
  },
];

const partnershipTypes = [
  {
    icon: Handshake,
    title: "Brand Partnership",
    description:
      "Collaborate with Centa Restaurant on campaigns, experiences, and initiatives that bring meaningful value to our guests.",
  },
  {
    icon: Utensils,
    title: "Food & Beverage",
    description:
      "We are open to working with quality food producers, beverage brands, and culinary partners.",
  },
  {
    icon: Building2,
    title: "Corporate & Events",
    description:
      "Create memorable dining experiences for corporate gatherings, private events, celebrations, and special occasions.",
  },
];

export default function KarirMitra() {
  return (
    <>
      <SEO
        title={`Karier & Mitra — ${restaurantConfig.name}`}
        description={`Explore career opportunities and partnership opportunities with ${restaurantConfig.name} in ${restaurantConfig.location}.`}
        canonical="https://centarestaurant.com/career-partner"
      />

      <main className="min-h-screen bg-[#FAF7F2] text-[#241A15]">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#241A15]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=2200&q=90')",
            }}
          />

          <div className="absolute inset-0 bg-[#241A15]/75" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#241A15] via-[#241A15]/50 to-[#241A15]/20" />

          <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl items-end px-6 pb-20 pt-36 sm:px-8 lg:px-10 lg:pb-28">
            <div className="max-w-4xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#B6533C]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#FAF7F2]/70">
                  Careers & Partnerships
                </span>
              </div>

              <h1 className="font-serif text-5xl font-medium leading-[0.98] tracking-[-0.04em] text-[#FAF7F2] sm:text-7xl lg:text-[82px]">
                Be part of
                <br />
                <span className="italic text-[#B6533C]">
                  something meaningful.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-[#FAF7F2]/70 sm:text-base">
                At {restaurantConfig.name}, we believe a great dining
                experience starts with great people and meaningful
                relationships.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#careers"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#B6533C] px-6 py-3.5 text-sm font-bold text-[#FAF7F2] transition hover:-translate-y-0.5 hover:bg-[#FAF7F2] hover:text-[#241A15]"
                >
                  Explore Careers
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#partnership"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#FAF7F2]/30 bg-[#FAF7F2]/10 px-6 py-3.5 text-sm font-semibold text-[#FAF7F2] transition hover:bg-[#FAF7F2]/20"
                >
                  Become a Partner
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-6 py-24 sm:px-8 lg:px-10 lg:py-36">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B6533C]">
                Work With Us
              </span>

              <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.03em] text-[#241A15] sm:text-5xl lg:text-6xl">
                Good food starts
                <br />
                with <span className="italic text-[#B6533C]">good people.</span>
              </h2>
            </div>

            <div>
              <p className="text-sm leading-8 text-[#241A15]/65 sm:text-base">
                We are building a team of people who care about
                hospitality, food, craftsmanship, and the small details
                that make a dining experience memorable.
              </p>

              <p className="mt-6 text-sm leading-8 text-[#241A15]/65 sm:text-base">
                Whether you work in the kitchen, service, operations,
                or behind the scenes, your contribution matters. We
                want Centa Restaurant to be a place where talented
                people can learn, contribute, and grow.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-12 bg-[#B6533C]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#241A15]/45">
                  Join the team
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CAREERS */}
        <section
          id="careers"
          className="scroll-mt-24 border-y border-[#241A15]/10 bg-[#FFFDF9] px-6 py-24 sm:px-8 lg:px-10 lg:py-36"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B6533C]">
                  Career Opportunities
                </span>

                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#241A15] sm:text-5xl">
                  Find your place
                  <br />
                  <span className="italic text-[#B6533C]">
                    at the table.
                  </span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-[#241A15]/55">
                We are always interested in meeting passionate people
                who want to build meaningful experiences through food
                and hospitality.
              </p>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {careerOpportunities.map((career) => {
                const Icon = career.icon;

                return (
                  <article
                    key={career.title}
                    className="group rounded-2xl border border-[#241A15]/10 bg-[#FAF7F2] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#B6533C]/35 hover:shadow-xl hover:shadow-[#241A15]/5 sm:p-9"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#B6533C]/10">
                      <Icon className="h-5 w-5 text-[#B6533C]" />
                    </div>

                    <h3 className="mt-7 font-serif text-2xl text-[#241A15]">
                      {career.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#241A15]/55">
                      {career.description}
                    </p>

                    <div className="mt-7 border-t border-[#241A15]/10 pt-6">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#B6533C]">
                        Current Roles
                      </span>

                      <div className="mt-4 space-y-3">
                        {career.positions.map((position) => (
                          <div
                            key={position}
                            className="flex items-center gap-3 text-sm text-[#241A15]/70"
                          >
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-[#B6533C]" />
                            {position}
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CAREER VALUES */}
        <section className="bg-[#241A15] px-6 py-24 sm:px-8 lg:px-10 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B6533C]">
                  Our Culture
                </span>

                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#FAF7F2] sm:text-5xl">
                  A place to
                  <br />
                  <span className="italic text-[#B6533C]">
                    grow.
                  </span>
                </h2>

                <p className="mt-6 max-w-md text-sm leading-7 text-[#FAF7F2]/55">
                  We want people to feel trusted, supported, and
                  encouraged to become better at what they do.
                </p>
              </div>

              <div className="grid gap-px overflow-hidden rounded-2xl border border-[#FAF7F2]/10 bg-[#FAF7F2]/10 sm:grid-cols-2">
                {careerValues.map((value) => (
                  <article
                    key={value.number}
                    className="bg-[#241A15] p-7 transition duration-500 hover:bg-[#2c211b] sm:p-9"
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-serif text-3xl text-[#B6533C]">
                        {value.number}
                      </span>

                      <BriefcaseBusiness className="h-4 w-4 text-[#FAF7F2]/20" />
                    </div>

                    <h3 className="mt-8 font-serif text-2xl text-[#FAF7F2]">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#FAF7F2]/50">
                      {value.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* APPLICATION CTA */}
        <section className="px-6 py-24 sm:px-8 lg:px-10 lg:py-36">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-3xl bg-[#B6533C] p-8 sm:p-12 lg:p-16">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#FAF7F2]/70">
                Send Your Application
              </span>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#FAF7F2] sm:text-5xl">
                Don't see your
                <br />
                <span className="italic">perfect role?</span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[#FAF7F2]/75">
                We are always open to meeting talented people. Send us
                your CV and a short introduction about yourself, and
                tell us how you would like to contribute to Centa
                Restaurant.
              </p>

              <a
                href={`mailto:${restaurantConfig.email}?subject=Career Application - ${restaurantConfig.name}`}
                className="mt-9 inline-flex items-center gap-2 rounded-lg bg-[#241A15] px-6 py-3.5 text-sm font-bold text-[#FAF7F2] transition hover:bg-[#FAF7F2] hover:text-[#241A15]"
              >
                Apply via Email
                <Mail className="h-4 w-4" />
              </a>
            </div>

            <div className="rounded-3xl border border-[#241A15]/10 bg-[#FFFDF9] p-8 sm:p-12 lg:p-16">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B6533C]">
                What to Include
              </span>

              <h3 className="mt-5 font-serif text-3xl text-[#241A15]">
                Make your application
                <br />
                <span className="italic text-[#B6533C]">
                  personal.
                </span>
              </h3>

              <div className="mt-8 space-y-5">
                {[
                  "Your latest CV or resume",
                  "The position you are interested in",
                  "A short introduction about yourself",
                  "Why you would like to join Centa",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-[#241A15]/65"
                  >
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#B6533C]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERSHIP */}
        <section
          id="partnership"
          className="scroll-mt-24 border-y border-[#241A15]/10 bg-[#FFFDF9] px-6 py-24 sm:px-8 lg:px-10 lg:py-36"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B6533C]">
                  Partnerships
                </span>

                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#241A15] sm:text-5xl lg:text-6xl">
                  Let's create
                  <br />
                  <span className="italic text-[#B6533C]">
                    something together.
                  </span>
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-8 text-[#241A15]/60 sm:text-base">
                We welcome collaborations with brands, suppliers,
                creators, organizations, and businesses that share our
                passion for quality, hospitality, and meaningful
                experiences.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {partnershipTypes.map((partnership) => {
                const Icon = partnership.icon;

                return (
                  <article
                    key={partnership.title}
                    className="rounded-2xl border border-[#241A15]/10 bg-[#FAF7F2] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#B6533C]/35 sm:p-9"
                  >
                    <Icon className="h-7 w-7 text-[#B6533C]" />

                    <h3 className="mt-7 font-serif text-2xl text-[#241A15]">
                      {partnership.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#241A15]/55">
                      {partnership.description}
                    </p>

                    <div className="mt-7 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#B6533C]">
                      Let's collaborate
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* PARTNERSHIP CTA */}
        <section className="px-6 py-24 sm:px-8 lg:px-10 lg:py-36">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#241A15]">
            <div className="relative px-8 py-16 sm:px-12 lg:px-16 lg:py-20">
              <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#B6533C]/20 blur-3xl" />

              <div className="relative max-w-3xl">
                <div className="flex items-center gap-3">
                  <Handshake className="h-5 w-5 text-[#B6533C]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B6533C]">
                    Partnership Inquiry
                  </span>
                </div>

                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#FAF7F2] sm:text-5xl">
                  Have an idea?
                  <br />
                  <span className="italic text-[#B6533C]">
                    Let's talk.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-[#FAF7F2]/55">
                  Tell us about your brand, proposal, or collaboration
                  idea. Our team will get back to you to explore the
                  possibilities.
                </p>

                <a
                  href={`mailto:${restaurantConfig.email}?subject=Partnership Inquiry - ${restaurantConfig.name}`}
                  className="mt-9 inline-flex items-center gap-2 rounded-lg bg-[#B6533C] px-6 py-3.5 text-sm font-bold text-[#FAF7F2] transition hover:bg-[#FAF7F2] hover:text-[#241A15]"
                >
                  Contact Our Team
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT INFO */}
        <section className="border-t border-[#241A15]/10 px-6 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-3">
            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#241A15]/40">
                Location
              </span>

              <div className="mt-2 flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#B6533C]" />

                <div>
                  <p className="text-sm text-[#241A15]">
                    {restaurantConfig.address}
                  </p>

                  <p className="mt-1 text-xs text-[#241A15]/50">
                    {restaurantConfig.location}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#241A15]/40">
                Careers
              </span>

              <div className="mt-2 flex items-start gap-3">
                <BriefcaseBusiness className="mt-0.5 h-4 w-4 shrink-0 text-[#B6533C]" />

                <div>
                  <p className="text-sm text-[#241A15]">
                    Career Applications
                  </p>

                  <p className="mt-1 text-xs text-[#241A15]/50">
                    {restaurantConfig.email}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#241A15]/40">
                Partnerships
              </span>

              <div className="mt-2 flex items-start gap-3">
                <Handshake className="mt-0.5 h-4 w-4 shrink-0 text-[#B6533C]" />

                <div>
                  <p className="text-sm text-[#241A15]">
                    Business & Collaboration
                  </p>

                  <p className="mt-1 text-xs text-[#241A15]/50">
                    {restaurantConfig.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL NAVIGATION */}
        <section className="bg-[#FAF7F2] px-6 pb-20 sm:px-8 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 border-t border-[#241A15]/10 pt-10 sm:flex-row sm:items-center">
            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#B6533C]">
                {restaurantConfig.name}
              </span>

              <p className="mt-2 font-serif text-2xl text-[#241A15]">
                Good people. Great experiences.
              </p>
            </div>

            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#241A15] transition hover:text-[#B6533C]"
            >
              Back to Restaurant
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
