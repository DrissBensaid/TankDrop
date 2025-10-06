import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FUEL_PRICES = { essence: 15.50, diesel: 13.80 };
const SERVICE_PRICES = { tire: 20.00, battery: 0.00 };
const DELIVERY_FEE = 25.00;

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [fuelType, setFuelType] = useState<'essence' | 'diesel'>('essence');
  const [quantity, setQuantity] = useState<number>(5);
  const [customQuantity, setCustomQuantity] = useState<string>('5');
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [services, setServices] = useState({ tire: false, battery: false });

  const [fuelCost, setFuelCost] = useState(0);
  const [servicesCost, setServicesCost] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      // Reset form on close
      setTimeout(() => {
        setFuelType('essence');
        setQuantity(5);
        setCustomQuantity('5');
        setIsCustom(false);
        setServices({ tire: false, battery: false });
      }, 300);
    }
  }, [isOpen]);
  
  useEffect(() => {
    const newFuelCost = FUEL_PRICES[fuelType] * quantity;
    setFuelCost(newFuelCost);

    let newServicesCost = 0;
    if (services.tire) newServicesCost += SERVICE_PRICES.tire;
    if (services.battery) newServicesCost += SERVICE_PRICES.battery;
    setServicesCost(newServicesCost);
    
    setTotal(newFuelCost + newServicesCost + DELIVERY_FEE);
  }, [fuelType, quantity, services]);

  const handleQuantityPreset = (amount: number) => {
    setIsCustom(false);
    setQuantity(amount);
    setCustomQuantity(String(amount));
  };
  
  const handleCustomQuantityChange = (value: string) => {
    setIsCustom(true);
    const numValue = parseInt(value, 10);
    setCustomQuantity(value);
    if (!isNaN(numValue) && numValue > 0) {
      setQuantity(numValue);
    } else if (value === '') {
        setQuantity(0);
    }
  };
  
  const incrementQuantity = () => handleCustomQuantityChange(String(quantity + 1));
  const decrementQuantity = () => handleCustomQuantityChange(String(Math.max(1, quantity - 1)));

  const handleServiceToggle = (service: 'tire' | 'battery') => {
    setServices(prev => ({...prev, [service]: !prev[service]}));
  }
  
  const handleConfirm = () => {
    // In a real app, this would send data to a backend.
    // Here, we can simulate it with a mailto link like the contact form.
    const summary = `
      --- TANKDROP ORDER ---
      Fuel Type: ${t(fuelType === 'essence' ? 'modalEssence' : 'modalDiesel')}
      Quantity: ${quantity} Litres
      Services: ${services.tire ? 'Tire Pressure, ' : ''}${services.battery ? 'Battery Check' : ''}
      ----------------------
      Fuel Cost: ${fuelCost.toFixed(2)} DH
      Delivery Fee: ${DELIVERY_FEE.toFixed(2)} DH
      Services Cost: ${servicesCost.toFixed(2)} DH
      TOTAL: ${total.toFixed(2)} DH
    `;
    const mailtoLink = `mailto:info@tankdrop.store?subject=${encodeURIComponent('New Fuel Order Confirmation')}&body=${encodeURIComponent(summary)}`;
    window.location.href = mailtoLink;
    onClose();
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-[100] flex justify-center items-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 md:p-8 relative">
          <button onClick={onClose} className="absolute top-4 end-4 text-gray-400 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <h2 className="text-2xl md:text-3xl font-bold text-dark-gray mb-6 text-center">{t('modalTitle')}</h2>
          
          <div className="space-y-6">
            {/* Step 1: Fuel Type */}
            <div>
              <h3 className="text-lg font-semibold text-dark-gray mb-3">1. {t('modalStep1')}</h3>
              <div className="grid grid-cols-2 gap-4">
                <button onClick={() => setFuelType('essence')} className={`p-4 border-2 rounded-lg text-center transition-all ${fuelType === 'essence' ? 'border-primary bg-primary/10' : 'border-gray-200'}`}>
                  <span className="font-bold text-dark-gray">{t('modalEssence')}</span>
                  <p className="text-sm text-slate-500">{FUEL_PRICES.essence.toFixed(2)} DH{t('modalPerLitre')}</p>
                </button>
                <button onClick={() => setFuelType('diesel')} className={`p-4 border-2 rounded-lg text-center transition-all ${fuelType === 'diesel' ? 'border-primary bg-primary/10' : 'border-gray-200'}`}>
                  <span className="font-bold text-dark-gray">{t('modalDiesel')}</span>
                  <p className="text-sm text-slate-500">{FUEL_PRICES.diesel.toFixed(2)} DH{t('modalPerLitre')}</p>
                </button>
              </div>
            </div>
            
            {/* Step 2: Quantity */}
            <div>
                <h3 className="text-lg font-semibold text-dark-gray mb-3">2. {t('modalStep2')}</h3>
                <div className="flex flex-wrap gap-2 items-center">
                    {[5, 10, 15, 20].map(q => (
                        <button key={q} onClick={() => handleQuantityPreset(q)} className={`px-4 py-2 border rounded-full transition-all ${!isCustom && quantity === q ? 'bg-primary text-white border-primary' : 'bg-gray-100'}`}>{q}L</button>
                    ))}
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{t('modalOther')}</span>
                        <div className="flex items-center border rounded-full">
                            <button onClick={decrementQuantity} className="px-3 py-1 text-lg">-</button>
                            <input type="number" value={customQuantity} onChange={(e) => handleCustomQuantityChange(e.target.value)} onFocus={()=>setIsCustom(true)} className="w-16 text-center border-x outline-none"/>
                            <button onClick={incrementQuantity} className="px-3 py-1 text-lg">+</button>
                        </div>
                        <span className="text-sm font-medium">{t('modalLitres')}</span>
                    </div>
                </div>
            </div>

            {/* Step 3: Additional Services */}
            <div>
              <h3 className="text-lg font-semibold text-dark-gray mb-3">3. {t('modalStep3')}</h3>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-3 border rounded-lg cursor-pointer has-[:checked]:bg-primary/10 has-[:checked]:border-primary">
                  <div>
                    <span className="font-semibold">{t('modalTire')}</span>
                  </div>
                  <div className="flex items-center gap-4">
                     <span className="text-slate-600">+ {SERVICE_PRICES.tire.toFixed(2)} DH</span>
                     <input type="checkbox" checked={services.tire} onChange={()=>handleServiceToggle('tire')} className="form-checkbox h-5 w-5 text-primary rounded focus:ring-primary/50" />
                  </div>
                </label>
                <label className="flex items-center justify-between p-3 border rounded-lg cursor-pointer has-[:checked]:bg-primary/10 has-[:checked]:border-primary">
                  <div>
                    <span className="font-semibold">{t('modalBattery')}</span>
                  </div>
                  <div className="flex items-center gap-4">
                     <span className="text-green-600 font-semibold">{t('modalFree')}</span>
                     <input type="checkbox" checked={services.battery} onChange={()=>handleServiceToggle('battery')} className="form-checkbox h-5 w-5 text-primary rounded focus:ring-primary/50" />
                  </div>
                </label>
              </div>
            </div>

            {/* Step 4: Location */}
            <div>
              <h3 className="text-lg font-semibold text-dark-gray mb-3">4. {t('modalStep4')}</h3>
              <button className="w-full flex items-center justify-center gap-2 p-3 border border-dashed rounded-lg text-primary mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                {t('modalGPS')}
              </button>
              <input type="text" placeholder={t('modalAddress')} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:outline-none"/>
              <p className="text-xs text-slate-500 mt-2">{t('modalCoverage')} {t('modalCity1')}, {t('modalCity2')}, {t('modalCity3')}, {t('modalCity4')}, {t('modalCity5')}</p>
            </div>
          </div>
          
          {/* Summary */}
          <div className="mt-8 pt-6 border-t">
              <h3 className="text-xl font-bold text-dark-gray mb-4 text-center">{t('modalSummary')}</h3>
              <div className="space-y-2 text-slate-600">
                <div className="flex justify-between"><span>{t('modalFuel', {quantity})}</span> <span>{fuelCost.toFixed(2)} DH</span></div>
                <div className="flex justify-between"><span>{t('modalDeliveryFee')}</span> <span>{DELIVERY_FEE.toFixed(2)} DH</span></div>
                <div className="flex justify-between"><span>{t('modalAddServices')}</span> <span>{servicesCost.toFixed(2)} DH</span></div>
                <div className="flex justify-between text-lg font-bold text-dark-gray pt-2 border-t mt-2"><span>{t('modalTotal')}</span> <span>{total.toFixed(2)} DH</span></div>
                <p className="text-xs text-slate-500 text-center">{t('modalVAT')}</p>
              </div>
          </div>

          <div className="mt-8">
            <button onClick={handleConfirm} className="w-full px-6 py-4 font-semibold text-lg text-white bg-gradient-to-r from-primary to-accent rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300">
              {t('modalConfirm')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
