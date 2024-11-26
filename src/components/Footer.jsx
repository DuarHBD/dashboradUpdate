import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-item">
            <MapPin className="footer-icon" />
            <p className="footer-text">
              128/888 Soi Thaiprakan Soi 1/6, Bang Sao Thong, Samut Prakan 10540
            </p>
          </div>

          <div className="footer-item">
            <Clock className="footer-icon" />
            <div className="business-hours">
              <span className="hours-text">Mon-Sat: 8 AM–5 PM</span>
              <span className="hours-closed">Sun: Closed</span>
            </div>
          </div>

          <div className="footer-item contact-info">
            <Phone className="footer-icon" />
            <div className="contact-details">
              <span className="phone-number">02 763 8961</span>
              <span className="copyright">© 2024 4M B2</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: white;
          border-top: 1px solid #e2e8f0;
          padding: 1.5rem 0;
          font-size: 0.875rem;
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .footer-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .footer-icon {
          color: #3182CE;
          flex-shrink: 0;
          width: 18px;
          height: 18px;
        }

        .footer-text {
          color: #4A5568;
          line-height: 1.5;
          margin: 0;
        }

        .business-hours {
          display: flex;
          gap: 1.5rem;
        }

        .hours-text {
          color: #4A5568;
        }

        .hours-closed {
          color: #E53E3E;
        }

        .contact-info {
          justify-content: flex-end;
        }

        .contact-details {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .phone-number {
          color: #4A5568;
        }

        .copyright {
          color: #718096;
        }

        /* Dark theme support */
        :root[data-theme="dark"] .footer {
          background: #1A202C;
          border-top-color: #2D3748;
        }

        :root[data-theme="dark"] .footer-text,
        :root[data-theme="dark"] .hours-text,
        :root[data-theme="dark"] .phone-number {
          color: #A0AEC0;
        }

        :root[data-theme="dark"] .copyright {
          color: #718096;
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .contact-info {
            justify-content: flex-start;
          }

          .contact-details {
            flex-direction: column;
            gap: 0.5rem;
            align-items: flex-start;
          }

          .business-hours {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;