import Image from "next/image";
import { Button } from "@/components/ui/button";

export function PartnersSection() {
  const partners = [
    {
      id: "roscosmos",
      name: "Роскосмос",
      description: "Государственная корпорация по космической деятельности. Сотрудничество в области образовательных программ и научных исследований.",
      logo: "/images/roscosmos-logo.png",
      website: "https://www.roscosmos.ru"
    },
    {
      id: "inp",
      name: "Институт ядерной физики СО РАН",
      description: "Всемирно известный научный центр и один из ведущих институтов Сибирского отделения Российской академии наук.",
      logo: "/images/inpsom-logo.png",
      website: "https://www.inp.nsk.su"
    }
  ];

  return (
    <section id="partners" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-sm uppercase tracking-wider text-nstu-red font-bold mb-2">
            Наши партнеры
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-nstu-blue mb-4">
            Сотрудничество с ведущими организациями
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Кружки НГТУ тесно сотрудничают с ведущими научными
            и промышленными организациями России.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 flex flex-col md:flex-row items-center gap-6"
            >
              <div className="w-32 h-32 relative flex-shrink-0">
                <Image
                  src={partner.logo}
                  alt={`Логотип ${partner.name}`}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold text-nstu-blue mb-2">{partner.name}</h4>
                <p className="text-gray-600 text-sm mb-4">{partner.description}</p>
                <Button asChild variant="outline" size="sm" className="text-nstu-blue border-nstu-blue hover:bg-nstu-blue/10">
                  <a href={partner.website} target="_blank" rel="noopener noreferrer">
                    Посетить сайт
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 italic text-sm">
            * Возможно участие в совместных мероприятиях с организациями-партнерами
          </p>
        </div>
      </div>
    </section>
  );
}
