import Link from "next/link";
import Image from "next/image";
import { GearIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="bg-nstu-blue text-white pt-12 pb-6 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo and description */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/images/nstu-logo.png"
                  alt="НГТУ логотип"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="font-bold text-lg">
                Физические кружки НГТУ
              </div>
            </div>
            <p className="text-sm text-white/80 mb-4">
              Официальный сайт физических кружков Новосибирского государственного технического университета
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#clubs" className="hover:text-white/80 transition">
                  Кружки
                </Link>
              </li>
              <li>
                <Link href="/#advantages" className="hover:text-white/80 transition">
                  Преимущества
                </Link>
              </li>
              <li>
                <Link href="/#schedule" className="hover:text-white/80 transition">
                  Расписание
                </Link>
              </li>
              <li>
                <Link href="/#teachers" className="hover:text-white/80 transition">
                  Преподаватели
                </Link>
              </li>
              <li>
                <Link href="/#partners" className="hover:text-white/80 transition">
                  Партнеры
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contacts */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <address className="not-italic text-sm space-y-2">
              <p>Новосибирск, пр. К. Маркса, 20</p>
              <p>
                <span className="block font-medium">Телефон приемной комиссии:</span>
                <a href="tel:+73833195999" className="hover:text-white/80 transition">
                  +7 (383) 319-59-99
                </a>
              </p>
              <p>
                <span className="block font-medium">Email:</span>
                <a href="mailto:pk@nstu.ru" className="hover:text-white/80 transition">
                  pk@nstu.ru
                </a>
              </p>
            </address>
          </div>

          {/* Column 4: Additional Info */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Дополнительно</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.nstu.ru/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition">
                  Официальный сайт НГТУ
                </a>
              </li>
              <li>
                <a href="https://library.nstu.ru/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition">
                  Научная библиотека НГТУ
                </a>
              </li>
              <li>
                <a href="https://nstu.ru/university/info/sveden" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition">
                  Сведения об организации
                </a>
              </li>
              <li>
                <a href="https://www.nstu.ru/entrance/committee" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition">
                  Приемная комиссия
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} Новосибирский государственный технический университет. Все права защищены.</p>
        </div>
      </div>

      {/* Decorative gear elements */}
      <div className="absolute -left-16 -bottom-16 opacity-5 pointer-events-none">
        <GearIcon className="w-32 h-32 gear-spin-reverse text-white" />
      </div>
      <div className="absolute right-16 -bottom-36 opacity-5 pointer-events-none">
        <GearIcon className="w-64 h-64 gear-spin text-white" />
      </div>
    </footer>
  );
}
