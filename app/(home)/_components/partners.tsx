import Image from "next/image";
import Link from "next/link";

type Partner = { name: string; logo: string };

const partners: Partner[] = [];

export default function Partners() {
  if (partners.length === 0) {
    return <PartnerCallToAction />;
  }

  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-stone-600">
          Working with
        </p>
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {partners.map((p) => (
            <li
              key={p.name}
              className="relative h-12 w-32 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={p.logo}
                alt={p.name}
                fill
                sizes="128px"
                className="object-contain"
              />
            </li>
          ))}
        </ul>
        <Link
          href="/partners"
          className="mt-10 inline-block text-sm font-medium text-purple-900 underline-offset-4 hover:underline"
        >
          View all partners
        </Link>
      </div>
    </section>
  );
}

function PartnerCallToAction() {
  const offers = [
    {
      title: "Sponsor a girl's education",
      text: "Fund school fees, uniforms, books or a full year of learning for a girl who would otherwise drop out.",
    },
    {
      title: "Support menstrual health",
      text: "Provide sanitary products and fund the washrooms and water access that keep girls in class.",
    },
    {
      title: "Fund community outreach",
      text: "Back health days, mentorship sessions and awareness campaigns in the communities.",
    },
    {
      title: "Build your brand purpose",
      text: "Show your team and customers your commitment to girls, with recognition across our platforms.",
    },
  ];

  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-purple-900">
            Partner with us
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-purple-900 md:text-4xl">
            Invest in the futures of girls across Ghana
          </h2>
          <p className="mt-4 text-stone-700">
            We are building partnerships with companies, schools, health
            facilities and development partners. Your support can be practical,
            measurable and visible.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((o) => (
            <li
              key={o.title}
              className="rounded-2xl bg-card border border-border p-6 shadow-sm"
            >
              <h3 className="font-semibold text-stone-900 dark:text-stone-300">
                {o.title}
              </h3>
              <p className="mt-2 text-sm text-stone-600 dark:text-stone-500">
                {o.text}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="#"
            className="rounded-full bg-purple-900 px-8 py-3 font-medium text-white hover:bg-purple-800"
          >
            Become a partner
          </Link>
          <a
            href="#"
            className="rounded-full border border-purple-900 px-8 py-3 font-medium text-purple-900 hover:bg-purple-900/5"
          >
            Download partnership brochure
          </a>
        </div>
      </div>
    </section>
  );
}
