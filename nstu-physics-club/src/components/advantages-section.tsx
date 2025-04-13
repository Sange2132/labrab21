import { LabIcon, CertificateIcon, ScienceIcon } from "@/components/icons";

export function AdvantagesSection() {
  const advantages = [
    {
      id: "labs",
      title: "Занятия в лабораториях НГТУ",
      description: "Практические занятия проходят в современных научных лабораториях университета с использованием профессионального оборудования.",
      icon: <LabIcon className="w-12 h-12 text-nstu-blue" />
    },
    {
      id: "science-slam",
      title: "Участие в Science Slam",
      description: "Возможность представить свои проекты на научных мероприятиях и конференциях, включая популярный формат Science Slam.",
      icon: <ScienceIcon className="w-12 h-12 text-nstu-blue" />
    },
    {
      id: "certificates",
      title: "Сертификаты университета",
      description: "По окончании курса выдаются официальные сертификаты НГТУ, которые учитываются при поступлении в университет.",
      icon: <CertificateIcon className="w-12 h-12 text-nstu-blue" />
    }
  ];

  return (
    <section id="advantages" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-sm uppercase tracking-wider text-nstu-red font-bold mb-2">
            Почему стоит выбрать нас
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-nstu-blue mb-4">
            Преимущества кружков НГТУ
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Наши физические кружки предоставляют уникальные возможности для школьников,
            интересующихся физикой, техникой и современной наукой.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage) => (
            <div
              key={advantage.id}
              className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100
                        transition-transform hover:translate-y-[-5px] hover:shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">{advantage.icon}</div>
                <h4 className="text-xl font-bold text-nstu-blue">{advantage.title}</h4>
              </div>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-nstu-gray italic">
            * Все занятия проводятся под руководством опытных преподавателей и ученых НГТУ
          </p>
        </div>
      </div>
    </section>
  );
}
