import React from 'react';
import HeroSlider from '../components/maintenance/HeroSlider';
import ServiceCard from '../components/maintenance/ServiceCard';
import mold_shop from '../img/mold_shop.jpg';
import slide3 from '../img/slide3.jpg';
import slide4 from '../img/slide4.jpg';

const Maintenance = () => {
  const services = [
    {
      image: mold_shop,
      title: "Mold Shop",
      description: "บริการงานแม่พิมพ์ครบวงจร ด้วยเครื่องมือที่ทันสมัยและทีมงานมืออาชีพ",
      path: "/maintenance/mold-shop"
    },
    {
      image: slide3,
      title: "Production Support",
      description: "สนับสนุนการผลิตด้วยเทคโนโลยีและนวัตกรรมที่ทันสมัย",
      path: "/maintenance/production-support"
    },
    {
      image: slide4,
      title: "Quality Control",
      description: "ควบคุมคุณภาพทุกขั้นตอนการผลิต เพื่อความพึงพอใจสูงสุดของลูกค้า",
      path: "/maintenance/quality-control"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background-color)' }}>
      <HeroSlider />
      
      <div className="py-20" style={{ backgroundColor: 'var(--surface-color)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 
            className="text-5xl font-bold text-center mb-16"
            style={{ color: 'var(--text-color)' }}
          >
            Our Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;