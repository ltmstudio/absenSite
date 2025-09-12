// "use client";

// import { StaticDataSource } from '../../../data/datasources/StaticDataSource';

// export function WhyAbsenBlock() {
//   const companyInfo = StaticDataSource.getCompanyInfo();

//   return (
//     <section className="why-absen-section py-20">
//       <div className="max-w-[80%] mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Почему выбирают Absen
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Надежность, качество и инновации — вот что делает Absen лидером в области LED-технологий
//           </p>
//         </div>

//         {/* Статистика */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//           {companyInfo.stats.map((stat, index) => (
//             <div key={index} className="text-center">
//               <div className="text-4xl font-bold text-orange-500 mb-2">
//                 {stat.number}
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 {stat.label}
//               </h3>
//               <p className="text-gray-600">
//                 {stat.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Услуги */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {companyInfo.services.map((service, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//               <h3 className="text-lg font-semibold text-gray-900 mb-3">
//                 {service.title}
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
