import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ image, title, description, path }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="relative overflow-hidden rounded-xl group shadow-lg cursor-pointer"
      style={{ 
        backgroundColor: 'var(--card-color)',
        height: '400px'
      }}
      onClick={() => path && navigate(path)}
    >
      <div className="h-full w-full relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          style={{ 
            transition: 'transform var(--transition-speed) ease',
            transform: 'scale(1.0)'
          }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1.0)'}
        />
        <div 
          className="absolute inset-0 flex items-end"
          style={{ 
            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)'
          }}
        >
          <div className="p-8 w-full">
            <h3 
              className="text-3xl font-bold mb-3"
              style={{ color: 'var(--text-color)' }}
            >
              {title}
            </h3>
            <p
              className="text-lg opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
              style={{ color: 'var(--text-color)' }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;