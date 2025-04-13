import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { GearIcon } from "@/components/icons";
import { GradientOverlay } from "@/components/gradient-overlay";

export function Hero() {
  return (
    <section className="relative bg-nstu-blue text-white overflow-hidden hero-pattern">
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left column - Text content */}
          <div>
            <div className="flex items-center mb-6">
              <GearIcon className="w-8 h-8 mr-3 gear-spin text-nstu-red" />
              <h2 className="text-xl font-bold uppercase tracking-wider text-nstu-red">
                Физические кружки НГТУ
              </h2>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Познавай науку <br />
              <span className="text-nstu-red">в лабораториях университета</span>
            </h1>
            <p className="text-lg mb-8 text-white/80 max-w-lg">
              Школьные физические кружки НГТУ — это возможность погрузиться в мир
              современной физики под руководством ученых и преподавателей технического университета.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-nstu-red hover:bg-nstu-red/90 text-white">
                <Link href="/#registration">Записаться на кружок</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="/#clubs">Узнать подробнее</Link>
              </Button>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/nstu-campus.jpg"
              alt="Главный корпус НГТУ"
              fill
              className="object-cover"
              priority
            />
            <GradientOverlay />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 transform opacity-5">
        <GearIcon className="w-72 h-72 text-white gear-spin-reverse" />
      </div>
      <div className="absolute left-16 bottom-0 opacity-5">
        <GearIcon className="w-48 h-48 text-white gear-spin" />
      </div>
    </section>
  );
}
