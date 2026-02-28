import { Truck, Service, Testimonial } from './types';
import { Truck as TruckIcon, MapPin, ShieldCheck, Box, Globe, Clock } from 'lucide-react';

export const TRUCKS: Truck[] = [
  {
    id: 't1',
    name: 'The City Scout',
    tagline: 'Urban Delivery',
    image: 'https://images.unsplash.com/photo-1616432043562-3671ea2e5242?auto=format&fit=crop&q=80&w=800',
    payload: '4.5 Tons',
    routeType: 'Intra-city',
    dimensions: '14ft x 6ft x 6ft',
    fuelType: 'Diesel / CNG',
    idealFor: 'Small Moves, FMCG',
    description: 'Optimized for narrow city lanes and last-mile connectivity within metropolitan areas.',
  },
  {
    id: 't2',
    name: 'The Highway King',
    tagline: 'Regional Haul',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800',
    payload: '18 Tons',
    routeType: 'Inter-state',
    dimensions: '22ft x 7.5ft x 8ft',
    fuelType: 'Diesel',
    idealFor: 'Industrial Goods',
    description: 'Designed for inter-state highway transport with high efficiency for industrial goods.',
  },
  {
    id: 't3',
    name: 'The Bharat Titan',
    tagline: 'Heavy Duty',
    image: 'https://images.unsplash.com/photo-1586191582114-e279313271cc?auto=format&fit=crop&q=80&w=800',
    payload: '40 Tons',
    routeType: 'Pan-India',
    dimensions: '40ft x 8ft x 8.5ft',
    fuelType: 'Diesel',
    idealFor: 'Oversized Goods',
    description: 'Maximum articulation for pan-India industrial logistics and oversized shipments.',
  },
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Full Truck Load (FTL)',
    description: 'Dedicated vehicles for large shipments across long-haul routes with specialized door-to-door transit times.',
    icon: Box,
  },
  {
    id: 's2',
    title: 'Real-time GPS Tracking',
    description: 'Track your cargo across the subcontinent with our proprietary live monitoring dashboard.',
    icon: MapPin,
  },
  {
    id: 's3',
    title: 'Secure Warehousing',
    description: 'Strategically located transit hubs in major industrial corridors for safe storage and management.',
    icon: ShieldCheck,
  },
];
