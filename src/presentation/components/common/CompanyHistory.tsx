"use client";

export function CompanyHistory() {
  const milestones = [
    {
      year: "2001",
      title: "Основание компании",
      description: "Absen была основана с миссией создания инновационных LED-решений"
    },
    {
      year: "2008",
      title: "Первый международный проект",
      description: "Запуск первых крупных проектов за пределами Китая"
    },
    {
      year: "2015",
      title: "Технологический прорыв",
      description: "Разработка передовых технологий LED-дисплеев"
    },
    {
      year: "2020",
      title: "Глобальное признание",
      description: "Становление одним из лидеров мирового рынка LED-технологий"
    },
    {
      year: "2024",
      title: "Инновации будущего",
      description: "Внедрение AI и IoT в LED-решения"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-orange-400/10 to-red-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            История компании
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 mb-6 leading-tight">
            Наш путь к успеху
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Более 20 лет инноваций, развития и достижений в мире LED-технологий
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Линия времени */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-blue-500 rounded-full"></div>
          
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Контент */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 hover:-translate-y-2 overflow-hidden">
                    {/* Декоративный элемент */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400/10 to-red-500/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
                    
                    <div className="relative z-10">
                      <div className="text-3xl font-black text-orange-500 mb-3 group-hover:scale-110 transition-transform duration-300">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Центральная точка */}
                <div className="relative z-10 w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                </div>

                {/* Пустое место */}
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
