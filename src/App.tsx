import React, { useEffect, useState } from 'react';

import QHeader from './components/QHeader';
import QInput from './components/QInput';
import QButton from './components/QButton';
import QCardOffer from './components/QCardOffer';
import QFooter from './components/QFooter';
import QLayout from './components/QLayout';
import QListCard from './components/QListCard';
import QSectionForm from './components/QSectionForm';
import QFormOrderByOffer from './components/QFormOrderByOffer';
import QFormFilterOffer from './components/QFormFilterOffer';

// Definindo o tipo de "Offer" para garantir a tipagem
interface Offer {
  id: string;
  courseName: string;
  rating: number;
  fullPrice: number;
  offeredPrice: number;
  discount: number;
  kind: string;
  level: string;
  iesLogo: string;
  iesName: string;
}

const App: React.FC = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  
  // Fetch para obter as ofertas quando o componente monta
  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch('http://localhost:3000/offers');
        if (!response.ok) {
          throw new Error('Failed to fetch offers');
        }
        const data: Offer[] = await response.json();
        setOffers(data);
      } catch (error) {
        console.error('There was an error fetching the offers!', error);
      }
    };
    
    fetchOffers();
  }, []);
  
  return (
    <QLayout>
      <QHeader>
        <QInput
          type="search"
          id="site-search"
          name="q"
          placeholder="Busque o curso ideal para você"
          aria-label="Buscar cursos e bolsas"
        />
        <QButton type="submit">Buscar</QButton>
      </QHeader>
      
      <QSectionForm title="Veja as opções que encontramos">
        <div slot="filter">
          <QFormFilterOffer />
        </div>
        <div slot="order-by">
          <QFormOrderByOffer />
        </div>
      </QSectionForm>
      
      <QListCard cards={offers} className="mt-6">
        {offers.map((card) => (
          <QCardOffer
            key={card.id}
            courseName={card.courseName}
            rating={card.rating}
            fullPrice={card.fullPrice}
            offeredPrice={card.offeredPrice}
            discount={card.discount}
            kind={card.kind}
            level={card.level}
            iesLogo={card.iesLogo}
            iesName={card.iesName}
          />
        ))}
      </QListCard>
      
      <QFooter />
    </QLayout>
  );
};

export default App;