"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { GearIcon } from "@/components/icons";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-nstu-blue text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and title */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/images/nstu-logo.png"
                alt="НГТУ логотип"
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg leading-tight">
                Физические кружки
              </div>
              <div className="text-xs">
                Новосибирский государственный технический университет
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Button asChild variant="ghost" className="text-white hover:bg-nstu-blue/20">
              <Link href="/#clubs">Кружки</Link>
            </Button>
            <Button asChild variant="ghost" className="text-white hover:bg-nstu-blue/20">
              <Link href="/#advantages">Преимущества</Link>
            </Button>
            <Button asChild variant="ghost" className="text-white hover:bg-nstu-blue/20">
              <Link href="/#schedule">Расписание</Link>
            </Button>
            <Button asChild variant="ghost" className="text-white hover:bg-nstu-blue/20">
              <Link href="/#teachers">Преподаватели</Link>
            </Button>
            <Button asChild variant="ghost" className="text-white hover:bg-nstu-blue/20">
              <Link href="/#partners">Партнеры</Link>
            </Button>
            <Button asChild variant="ghost" className="text-white hover:bg-nstu-blue/20">
              <Link href="/#contacts">Контакты</Link>
            </Button>
            <Button asChild variant="outline" className="bg-nstu-red hover:bg-nstu-red/90 text-white border-none ml-2">
              <Link href="/#registration">Записаться</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-nstu-blue border-t border-white/10 p-4">
          <div className="flex flex-col space-y-3">
            <Link
              href="/#clubs"
              className="text-white py-2 px-3 rounded hover:bg-nstu-blue/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Кружки
            </Link>
            <Link
              href="/#advantages"
              className="text-white py-2 px-3 rounded hover:bg-nstu-blue/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Преимущества
            </Link>
            <Link
              href="/#schedule"
              className="text-white py-2 px-3 rounded hover:bg-nstu-blue/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Расписание
            </Link>
            <Link
              href="/#teachers"
              className="text-white py-2 px-3 rounded hover:bg-nstu-blue/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Преподаватели
            </Link>
            <Link
              href="/#partners"
              className="text-white py-2 px-3 rounded hover:bg-nstu-blue/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Партнеры
            </Link>
            <Link
              href="/#contacts"
              className="text-white py-2 px-3 rounded hover:bg-nstu-blue/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
            <Link
              href="/#registration"
              className="bg-nstu-red hover:bg-nstu-red/90 text-white py-2 px-3 rounded text-center font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Записаться
            </Link>
          </div>
        </nav>
      )}

      {/* Decorative gear element */}
      <div className="absolute -right-16 -top-16 opacity-5 pointer-events-none">
        <GearIcon className="w-32 h-32 gear-spin text-white" />
      </div>
    </header>
  );
}
