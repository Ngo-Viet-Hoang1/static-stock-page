import { ReactNode } from 'react';

export interface SectionProps {
  id?: string;
  className?: string;
  children?: ReactNode;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface TestimonialItem {
  name: string;
  role: string;
  content: string;
  avatar: string;
  profit: string;
}

export interface SubtitleCue {
  startTime: number;
  endTime: number;
  text: string;
}