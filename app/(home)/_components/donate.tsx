import Link from "next/link";

export default function Donate() {
  return (
    <section className="bg-primary py-20 text-white">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">
          Your support keeps girls in school and safe
        </h2>
        <p className="max-w-2xl text-white/85">
          Give once or monthly. Pay by mobile money, bank transfer or card.
          Every contribution is recorded and reported.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/donate"
            className="rounded-full bg-white px-8 py-3 font-medium text-purple-900 hover:bg-white/90"
          >
            Donate now
          </Link>
          <Link
            href="/get-involved/volunteer"
            className="rounded-full border border-white px-8 py-3 font-medium hover:bg-white/10"
          >
            Volunteer your time
          </Link>
        </div>
      </div>
    </section>
  );
}
