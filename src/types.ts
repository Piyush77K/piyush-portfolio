export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  image?: string;
  videoUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
  id?: string;
}

export interface Hobby {
  id: string;
  title: string;
  description: string;
}

export interface VisitorDrawing {
  id: string;
  userName: string;
  dataUrl: string;
  timestamp: string;
  brushColor: string;
}
