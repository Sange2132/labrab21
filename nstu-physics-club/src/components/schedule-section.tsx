import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function ScheduleSection() {
  const scheduleData = [
    {
      id: "quantum",
      club: "Квантовые технологии",
      dayOfWeek: "Вторник, Пятница",
      time: "16:00 - 17:30",
      location: "1 корпус, ауд. 425",
      ageGroup: "8-11 класс"
    },
    {
      id: "mechanics",
      club: "Прикладная механика",
      dayOfWeek: "Понедельник, Четверг",
      time: "15:30 - 17:00",
      location: "2 корпус, ауд. 112",
      ageGroup: "7-11 класс"
    },
    {
      id: "astrophysics",
      club: "Астрофизика",
      dayOfWeek: "Среда, Суббота",
      time: "16:30 - 18:00",
      location: "6 корпус, ауд. 304",
      ageGroup: "9-11 класс"
    }
  ];

  return (
    <section id="schedule" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-sm uppercase tracking-wider text-nstu-red font-bold mb-2">
            Когда и где
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-nstu-blue mb-4">
            Расписание занятий
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Занятия проходят в корпусах НГТУ два раза в неделю.
            Продолжительность одного занятия составляет 1.5 часа.
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <Table className="schedule-table border border-gray-200 rounded-lg shadow-sm">
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold w-1/5">Кружок</TableHead>
                <TableHead className="font-bold w-1/5">Дни недели</TableHead>
                <TableHead className="font-bold w-1/5">Время</TableHead>
                <TableHead className="font-bold w-1/5">Место</TableHead>
                <TableHead className="font-bold w-1/5">Возраст</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scheduleData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.club}</TableCell>
                  <TableCell>{item.dayOfWeek}</TableCell>
                  <TableCell>{item.time}</TableCell>
                  <TableCell>{item.location}</TableCell>
                  <TableCell>{item.ageGroup}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            * Возможны изменения в расписании. Актуальное расписание уточняйте у администратора.
          </p>
          <p className="mt-2">
            Для посещения занятий необходима предварительная запись.
          </p>
        </div>
      </div>
    </section>
  );
}
