import { RegistrationForm } from "@/components/registration-form";
import { GearIcon } from "@/components/icons";

export function RegistrationSection() {
  return (
    <section id="registration" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div>
              <div className="inline-flex items-center justify-start mb-4">
                <GearIcon className="w-6 h-6 text-nstu-red mr-2 gear-spin" />
                <h2 className="text-nstu-red font-bold uppercase tracking-wider text-sm">
                  Запись на кружки
                </h2>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-nstu-blue mb-6">
                Присоединяйтесь к нашим кружкам
              </h2>
              <p className="text-gray-600 mb-6">
                Заполните форму для записи на выбранный кружок.
                После получения заявки мы свяжемся с вами для подтверждения записи
                и предоставления дополнительной информации.
              </p>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-lg font-bold text-nstu-blue mb-2">Важная информация</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-nstu-red mr-2">•</span>
                    <span>Занятия проводятся в течение учебного года с сентября по май</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nstu-red mr-2">•</span>
                    <span>Необходимо подписать согласие на обработку персональных данных</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nstu-red mr-2">•</span>
                    <span>На первое занятие нужно прийти с родителем или законным представителем</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nstu-red mr-2">•</span>
                    <span>Для входа в корпуса НГТУ потребуется временный пропуск</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-500 text-sm">
                Для вопросов и уточнений: <a href="tel:+73833195999" className="text-nstu-blue hover:underline">+7 (383) 319-59-99</a> или <a href="mailto:pk@nstu.ru" className="text-nstu-blue hover:underline">pk@nstu.ru</a>
              </p>
            </div>

            {/* Right Column - Form */}
            <div>
              <RegistrationForm />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
        <GearIcon className="w-40 h-40 text-nstu-blue gear-spin" />
      </div>
    </section>
  );
}
