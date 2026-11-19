import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden flex items-center justify-center h-[75svh] lg:h-[85svh]">
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-xs" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center text-white">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest">
          Purple Table Foundation
        </p>
        <h1 className="text-4xl font-semibold font-heading leading-tight md:text-6xl">
          Every girl-child educated, empowered and protected
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-white/90">
          We work across Ghana to advance education, health and opportunity for
          girls and vulnerable communities.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/donate"
            className="rounded-full bg-white px-8 py-3 font-medium text-purple-900 hover:bg-white/90"
          >
            Donate
          </Link>
          <Link
            href="/get-involved"
            className="rounded-full border border-white px-8 py-3 font-medium text-white hover:bg-white/10"
          >
            Get involved
          </Link>
        </div>
      </div>
    </section>
  );
}
