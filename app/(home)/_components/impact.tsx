const stats = [
  { value: "200+", label: "Girls reached through education programmes" },
  { value: "02", label: "Communities engaged" },
  { value: "350+", label: "Young people trained in SRH and menstrual health" },
  { value: "00", label: "Partner institutions" },
];

export default function Impact() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container mx-auto lg:px-0 px-4">
        <div className="flex flex-col items-center gap-14">
          <div className="max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-purple-900 md:text-4xl">
              Our Impact
            </h2>
            <p className="text-stone-700">
              What we have been able to achieve since the inception of this
              foundation.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-semibold text-purple-950 md:text-6xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm lg:text-lg text-stone-600">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
