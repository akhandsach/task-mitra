import { 
  Home, Wrench, Sparkles, Package, Scissors, Zap, 
  Truck, TreePine, Tv, Search, Map, ShieldCheck, 
  Wind, BookOpen, Briefcase, Camera, Music, Heart, Calendar 
} from 'lucide-react';
import React from 'react';

export const CATEGORIES = [
  // TaskRabbit Core Everyday Tasks
  { id: 'furniture-assembly', name: 'Furniture Assembly', icon: <Wrench size={24}/>, desc: 'IKEA, Beds, Desks', group: 'Home Tasks' },
  { id: 'tv-mounting', name: 'TV Mounting', icon: <Tv size={24}/>, desc: 'Mount TVs & Art', group: 'Home Tasks' },
  { id: 'help-moving', name: 'Help Moving', icon: <Truck size={24}/>, desc: 'Heavy lifting, packing', group: 'Moving & Errands' },
  { id: 'yard-work', name: 'Yard Work', icon: <TreePine size={24}/>, desc: 'Gardening, cleanup', group: 'Home Tasks' },
  { id: 'cleaning', name: 'Home Cleaning', icon: <Sparkles size={24}/>, desc: 'Deep clean, standard', group: 'Home Tasks' },

  // UrbanCompany Core Home Services
  { id: 'plumbing', name: 'Plumbers', icon: <Wrench size={24}/>, desc: 'Leaks, installations', group: 'Repairs' },
  { id: 'electrical', name: 'Electricians', icon: <Zap size={24}/>, desc: 'Wiring, fixtures', group: 'Repairs' },
  { id: 'ac-repair', name: 'AC & Appliances', icon: <Wind size={24}/>, desc: 'Service & fix', group: 'Repairs' },
  { id: 'painting', name: 'Painters', icon: <Home size={24}/>, desc: 'Interior & Exterior', group: 'Home Tasks' },
  { id: 'beauty-spa', name: 'Beauty & Salon', icon: <Scissors size={24}/>, desc: 'At-home grooming', group: 'Personal Care' },

  // JustDial Core Local Businesses
  { id: 'tutors', name: 'Tutors & Teachers', icon: <BookOpen size={24}/>, desc: 'Math, Science, Arts', group: 'Professional Services' },
  { id: 'legal', name: 'Legal & Tax', icon: <Briefcase size={24}/>, desc: 'CA, Lawyers, Notary', group: 'Professional Services' },
  { id: 'events', name: 'Event Organisers', icon: <Calendar size={24}/>, desc: 'Weddings, Birthdays', group: 'Professional Services' },
  { id: 'photography', name: 'Photographers', icon: <Camera size={24}/>, desc: 'Portraits, Events', group: 'Professional Services' },

  // Swiggy Genie Instant Services
  { id: 'genie-logistics', name: 'Genie Drop & Fetch', icon: <Package size={24}/>, desc: 'Instant local delivery', group: 'Moving & Errands' }
];

export const GROUP_LIST = ['Home Tasks', 'Repairs', 'Moving & Errands', 'Personal Care', 'Professional Services'];
