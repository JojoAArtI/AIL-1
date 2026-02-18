import React from 'react';
import { ServiceItem, Testimonial, Branch } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Trucking Services',
    description: 'We move your goods safely across India. We focus on getting your items delivered on time, every time.',
    imageUrl: '/images/truck 2.jpeg'
  },
  {
    id: '2',
    title: 'Storage & Warehousing',
    description: 'Safe and clean places to store your products. We help you manage your stock so you can focus on your business.',
    imageUrl: '/images/garage 2.jpeg'
  },
  {
    id: '3',
    title: 'Supply Chain Help',
    description: 'We help you plan the best way to move your materials from one place to another while saving you money.',
    imageUrl: '/images/truck 4.jpeg'
  },
  {
    id: '4',
    title: 'Factory Logistics',
    description: 'We help move materials inside your factory or plant to keep your production running smoothly.',
    imageUrl: '/images/truck sideway.jpeg'
  },
  {
    id: '5',
    title: 'Business Delivery',
    // Using double quotes to safely include single quote in "don't"
    description: "Daily delivery services for local businesses. We handle the small details so you don't have to.",
    imageUrl: '/images/truck 3.jpeg'
  },
  {
    id: '6',
    title: 'Packing & Moving',
    description: 'Extra help with packing, labeling, and loading your boxes to make sure they are safe for travel.',
    imageUrl: '/images/congrats.jpeg'
  }
];

export const FLEET_DETAILS = [
  { name: 'Big Cargo Trucks', capacity: '20-50 Tons', use: 'Heavy Goods', icon: '🚛' },
  { name: 'Delivery Vans', capacity: '2-10 Tons', use: 'Local Delivery', icon: '🚚' },
  { name: 'Cold Storage Trucks', capacity: '5-15 Tons', use: 'Food & Medicine', icon: '❄️' },
  { name: 'Small Pickups', capacity: '1-3 Tons', use: 'Quick Moves', icon: '📦' }
];

export const PROCESS_STEPS = [
  { step: '01', title: 'Booking', desc: 'Call us or send a message to tell us what you need to move.' },
  { step: '02', title: 'Route Planning', desc: 'We pick the best roads to get your goods there as fast as possible.' },
  { step: '03', title: 'Safe Loading', desc: 'Our team loads your items carefully into our clean trucks.' },
  { step: '04', title: 'On-Time Delivery', desc: 'We deliver your goods right to the door with a smile.' }
];

export const STATS = [
  { label: 'Happy Clients', value: '1703' },
  { label: 'Total Projects', value: '1703' },
  { label: 'Work Hours', value: '2043' },
  { label: 'Hard Workers', value: '1533' }
];

export const CORE_VALUES = [
  {
    title: "Reliability & Integrity",
    description: "We operate with the highest level of professionalism and transparency, ensuring trust and dependability in every service we provide."
  },
  {
    title: "Innovation & Excellence",
    description: "By leveraging advanced technology and industry expertise, we continuously refine our logistics solutions to meet the evolving demands of global trade."
  },
  {
    title: "Customer-Centric Approach",
    description: "Our clients are at the core of everything we do. We tailor solutions to fit their specific needs, ensuring efficiency, cost-effectiveness, and seamless execution."
  },
  {
    title: "Security & Compliance",
    description: "With strict adherence to international logistics standards and regulations, we prioritize the security of cargo at every stage of the supply chain."
  },
  {
    title: "Sustainability & Responsibility",
    description: "We are committed to reducing our environmental footprint by integrating sustainable practices in our operations, from energy-efficient transport to eco-friendly warehousing solutions."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Mohit Yadav',
    text: 'Great, personal service from the customer service team. Communication is great, all the way through. Incredibly pleased with the service our company receives. We are a small company and are treated like royalty. LOVE IT!',
  },
  {
    id: '2',
    name: 'Shekhar Soni',
    text: 'I was extremely excited to find a company that was able to ease such a stressful process. I was able to ship with ease and all of my questions were answered before I could ask. GREAT COMPANY AND SERVICE!',
  },
  {
    id: '3',
    name: 'Mr. Abhay Raj Singh',
    // Using double quotes to safely include single quote in "I've"
    text: "I've been using AIL for over 6 years now and they will always be my first choice. Excellent service, rates, and communication. Great staff from top to bottom.",
  }
];

export const BRANCHES: Branch[] = [
  {
    id: '1',
    location: 'Bangalore',
    type: 'Main Office',
    address: '1st Floor No.258/1 Basaveshwara Layout, Bidadi Ramanagara - 562109, Karnataka',
    email: 'info@AILargos.com',
    phone: '+91 78299 08500'
  },
  {
    id: '2',
    location: 'Bidadi',
    type: 'Warehouse',
    address: '99/3 & 99/4 Gollarpalya Village, Shanmangala Post, Bidadi Industrial Area, 562109',
    email: 'sales@AILargos.com',
    phone: '+91 95357 79215'
  },
  {
    id: '3',
    location: 'Kadi (Gujarat)',
    type: 'Warehouse',
    address: 'E-44 Mascot Industrial Park, Jadavpura Cross Kadi, Mehsana 382715',
    email: 'wh.ahm@AILargos.com',
    phone: '+91 96635 846162'
  },
  {
    id: '4',
    location: 'Pune',
    type: 'Warehouse',
    address: 'Plot No.128 Sec No.23 Transport Nagar, Nigdi Pune - 411044, Maharashtra',
    email: 'ops@AILargos.com',
    phone: '+91 93529 78852'
  },
  {
    id: '5',
    location: 'Gurgaon',
    type: 'Warehouse',
    address: 'KBS House Plot No. 15 Bhora Kalan, Gurgaon Haryana - 122413',
    email: 'ops@AILargos.com',
    phone: '+91 99824 29046'
  }
];

export const ICONS = {
  Truck: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
  ),
  MapPin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
  ),
  Phone: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
  ),
  ArrowRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
  ),
  Menu: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
  )
};
