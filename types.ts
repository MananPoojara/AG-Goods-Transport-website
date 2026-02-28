import React from 'react';

export interface Truck {
  id: string;
  name: string;
  tagline: string;
  image: string;
  payload: string;
  routeType: string;
  dimensions: string;
  fuelType: string;
  idealFor: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Testimonial {
  quote: string;
  author: string;
}