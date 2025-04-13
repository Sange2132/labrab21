import Image from "next/image";

interface Teacher {
  id: string;
  name: string;
  position: string;
  description: string;
  image: string;
}

export function TeachersSection() {
  const teachers: Teacher[] = [
    {
      id: "teacher1",
      name: "Иванов Александр Петрович",
      position: "Доцент кафедры прикладной физики",
      description: "Специалист в области квантовой механики и технологий. Кандидат физико-математических наук, автор более 30 научных публикаций.",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=500&h=500&fit=crop"
    },
    {
      id: "teacher2",
      name: "Сидорова Елена Викторовна",
      position: "Профессор кафедры технической физики",
      description: "Доктор физико-математических наук, специалист в области механики твердого тела и инженерных систем, руководитель научной лаборатории.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=500&fit=crop"
    },
    {
      id: "teacher3",
      name: "Петров Михаил Андреевич",
      position: "Старший преподаватель кафедры астрофизики",
      description: "Специалист в области астрономии и космических исследований, участник международных научных проектов, популяризатор науки.",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&h=500&fit=crop"
    }
  ];

  return (
    <section id="teachers" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-sm uppercase tracking-wider text-nstu-red font-bold mb-2">
            Наши эксперты
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-nstu-blue mb-4">
            Преподаватели кружков
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Занятия проводят опытные преподаватели и научные сотрудники НГТУ,
            специалисты в своих областях с богатым практическим опытом.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-nstu-blue mb-1">{teacher.name}</h4>
                <p className="text-nstu-red font-medium mb-3">{teacher.position}</p>
                <p className="text-gray-600 text-sm">{teacher.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
