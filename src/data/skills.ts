import { FaCamera, FaHandshake, FaHeart, FaHome } from 'react-icons/fa';
import type { IconType } from 'react-icons';

type Engagement = {
  title: string;
  description: string;
  icon: IconType;
};

export const engagements: Engagement[] = [
  {
    title: 'Confiance',
    description: 'Sérieux, fiabilité et discrétion. Votre logement et votre animal sont entre de bonnes mains.',
    icon: FaHandshake,
  },
  {
    title: 'Respect',
    description: 'Repas, sorties et habitudes respectés à la lettre pour préserver ses repères.',
    icon: FaHeart,
  },
  {
    title: 'Maison surveillée',
    description: 'Courrier, plantes et volets gérés gratuitement pendant votre absence.',
    icon: FaHome,
  },
  {
    title: 'Des nouvelles',
    description: 'Photos et messages réguliers : vous suivez votre compagnon où que vous soyez.',
    icon: FaCamera,
  },
];
