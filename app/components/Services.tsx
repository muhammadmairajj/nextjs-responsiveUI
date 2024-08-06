import Image from 'next/image';

const services = [
  { title: "Virtual Staging + Decluttering", image: "/assets/feature-1.svg" },
  { title: "Decluttering", image: "/assets/feature-2.svg" },
  { title: "Virtual Staging", image: "/assets/feature-3.svg" },
  { title: "Virtual Renovation", image: "/assets/feature-4.svg" },
];

export default function PopularServices() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Most Popular Services</h2>
      <div className="grid grid-cols-3 gap-1">
        <div className="relative col-span-2 h-96">
          <Image
            src={services[0].image}
            alt={services[0].title}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h3 className="text-white text-xl font-semibold">{services[0].title}</h3>
          </div>
          <span className="absolute bottom-4 right-4 text-white font-semibold">BEFORE</span>
        </div>
        {services.slice(1).map((service, index) => (
          <div key={index} className="relative h-48">
            <Image
              src={service.image}
              alt={service.title}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold">{service.title}</h3>
            </div>
            <span className="absolute bottom-4 right-4 text-white font-semibold">BEFORE</span>
          </div>
        ))}
      </div>
    </div>
  );
}
