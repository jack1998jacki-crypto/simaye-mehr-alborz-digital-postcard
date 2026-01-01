import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: number;
  title: string;
  icon: LucideIcon;
  description?: string;
}

export interface ValueItem {
  id: number;
  text: string;
  icon: LucideIcon;
}

export interface CompanyInfo {
  name: string;
  slogan: string;
  proposalTitle: string;
  introduction: string;
  problem: string;
  goal: string;
  contact: {
    phone: string;
    email: string;
    manager: string;
    year: string;
  }
}