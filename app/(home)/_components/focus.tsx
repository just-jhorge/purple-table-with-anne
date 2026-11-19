import Link from "next/link";

const areas = [
  {
    slug: "girls-education",
    title: "Girls' education",
    blurb: "Keeping girls in school and supporting their learning.",
  },
  {
    slug: "sexual-reproductive-health",
    title: "Sexual & reproductive health",
    blurb: "Accurate, age-appropriate information for adolescents.",
  },
  {
    slug: "menstrual-hygiene",
    title: "Menstrual hygiene",
    blurb: "Access to products, facilities and open conversation.",
  },
  {
    slug: "child-protection",
    title: "Child protection",
    blurb: "Safe communities and clear routes to help.",
  },
  {
    slug: "mentorship-leadership",
    title: "Mentorship & leadership",
    blurb: "Role models and skills for the next generation.",
  },
  {
    slug: "economic-empowerment",
    title: "Economic empowerment",
    blurb: "Livelihood skills and pathways to income.",
  },
  {
    slug: "community-health",
    title: "Community health",
    blurb: "Outreach that brings care closer to home.",
  },
  {
    slug: "disability-inclusion",
    title: "Disability inclusion",
    blurb: "Making every programme open to every girl.",
  },
];

export default function Focus() {
  return (
    <section className="bg-accent py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-purple-900 md:text-4xl">
            What we do
          </h2>
          <p className="mt-4 text-stone-700">
            Our work centres on the girl-child and extends to the wider
            communities she lives in.
          </p>
        </div>

        <ul className="mt-12 grid gap-3 lg:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/programmes/${a.slug}`}
                className="bg-background group flex h-full flex-col rounded-2xl border border-border p-6 transition hover:border-purple-900 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-900"
              >
                <h3 className="font-semibold mb-3 text-purple-900">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-stone-600">{a.blurb}</p>
                <span className="mt-auto pt-6 text-sm font-medium text-purple-900">
                  Learn more →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
