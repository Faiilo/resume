export interface Activity {
  id: number;
  title: string;
  description: string;
  type: 'conference' | 'social' | 'note';
  imageUrl?: string;
  link?: string;
  date?: string; // Добавили date как опциональное
  location?: string; // Добавили location
}