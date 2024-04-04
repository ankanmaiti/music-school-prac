/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0IOVeXrJciv
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

interface HeroSectionProps {
  src: `/${string}`;
  title: string;
  description: string;
  redirectTo: `/${string}`;
}

export default function HeroSection({
  title,
  description,
  src,
  redirectTo,
}: HeroSectionProps) {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container space-y-10 xl:space-y-16">
        <div className="grid gap-4 md:gap-16">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                {title}
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                {description}
              </p>
            </div>
            <div className="grid gap-4 md:gap-16">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href={redirectTo}
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
        <img
          alt="Hero"
          className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
          height="400"
          src={src}
          width="1270"
        />
      </div>
    </section>
  );
}
