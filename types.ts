
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  image?: string;
}

export interface Branch {
  id: string;
  location: string;
  type: string;
  address: string;
  email: string;
  phone: string;
}
