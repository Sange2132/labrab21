import { ClubCard } from "@/components/club-card";
import { AtomIcon, MechanicsIcon, TelescopeIcon } from "@/components/icons";
import { GearIcon } from "@/components/icons";

export function ClubsSection() {
  const clubs = [
    {
      id: "quantum",
      title: "Квантовые технологии",
      description: "Изучение основ квантовой механики, знакомство с принципами квантовых вычислений и современными квантовыми технологиями. Практические эксперименты в специализированных лабораториях НГТУ.",
      icon: <AtomIcon />,
      link: "#quantum"
    },
    {
      id: "mechanics",
      title: "Прикладная механика",
      description: "Изучение законов классической механики и их практическое применение. Проектирование и создание механических устройств, робототехника, инженерное моделирование.",
      icon: <MechanicsIcon />,
      link: "#mechanics"
    },
    {
      id: "astrophysics",
      title: "Астрофизика",
      description: "Изучение звезд, планет и космических объектов. Работа с телескопами, моделирование космических процессов, основы астрономических наблюдений.",
      icon: <TelescopeIcon />,
      link: "#astrophysics"
    }
  ];

  return (
    <section id="clubs" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <GearIcon className="w-6 h-6 text-nstu-red mr-2 gear-spin" />
            <h2 className="text-nstu-red font-bold uppercase tracking-wider text-sm">
              Наши направления
            </h2>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-nstu-blue mb-4">
            Физические кружки для школьников
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Выберите направление, которое вам интересно, и начните свой путь в мир
            современной физики под руководством преподавателей НГТУ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clubs.map((club) => (
            <ClubCard
              key={club.id}
              title={club.title}
              description={club.description}
              icon={club.icon}
              link={club.link}
            />
          ))}
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute -left-20 bottom-0 opacity-5">
        <GearIcon className="w-40 h-40 text-nstu-blue gear-spin" />
      </div>
    </section>
  );
}
