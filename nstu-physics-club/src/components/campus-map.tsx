"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { GearIcon } from "@/components/icons";

export function CampusMap() {
  const [open, setOpen] = useState(false);

  const labs = [
    {
      id: "lab1",
      name: "Лаборатория квантовых технологий",
      location: "1 корпус, 425 аудитория",
      description: "Современная лаборатория, оснащенная оборудованием для проведения экспериментов в области квантовой физики."
    },
    {
      id: "lab2",
      name: "Лаборатория прикладной механики",
      location: "2 корпус, 112 аудитория",
      description: "Лаборатория для изучения механических систем и процессов, робототехники и инженерного моделирования."
    },
    {
      id: "lab3",
      name: "Астрофизическая лаборатория",
      location: "6 корпус, 304 аудитория",
      description: "Специализированная лаборатория с телескопами и оборудованием для моделирования космических процессов."
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="bg-nstu-blue hover:bg-nstu-blue/90 text-white rounded-full shadow-lg flex items-center gap-2 pl-4 pr-5"
          >
            <GearIcon className="w-5 h-5 gear-spin" />
            Карта кампуса
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-nstu-blue flex items-center">
              <GearIcon className="w-6 h-6 mr-2 text-nstu-red" />
              Карта кампуса НГТУ
            </DialogTitle>
          </DialogHeader>

          <div className="mt-4">
            <div className="bg-gray-100 aspect-video rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-nstu-blue/5">
                <p className="text-gray-500">
                  Интерактивная карта кампуса
                  {/* This would be replaced with an actual map component */}
                </p>
              </div>
            </div>

            <h3 className="text-lg font-bold text-nstu-blue mb-2">Расположение лабораторий</h3>
            <ul className="space-y-3 mt-2">
              {labs.map((lab) => (
                <li key={lab.id} className="bg-gray-50 p-3 rounded-md border border-gray-200">
                  <h4 className="font-bold text-nstu-blue">{lab.name}</h4>
                  <p className="text-nstu-red font-medium text-sm">{lab.location}</p>
                  <p className="text-gray-600 text-sm mt-1">{lab.description}</p>
                </li>
              ))}
            </ul>

            <div className="text-center mt-4">
              <Button
                variant="outline"
                onClick={() => setOpen(false)}
                className="mx-auto"
              >
                Закрыть карту
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
