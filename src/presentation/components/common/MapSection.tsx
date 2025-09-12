"use client";

export function MapSection() {
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Как нас найти
          </h2>
          <p className="text-lg text-gray-600">
            Мы находимся на Ул. Г. Кулиева здание Gokje 31
          </p>
        </div>
        
        {/* Google Maps iframe */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.3713650365254!2d37.6173!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0KHRgtC10L_QtdC90YLRiw!5e0!3m2!1sru!2sru!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Карта расположения офиса Absen"
            className="w-full h-96 md:h-[450px]"
          />
        </div>
        
        
        
      </div>
    </div>
  );
}
