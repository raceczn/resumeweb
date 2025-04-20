export interface Position {
  title: string;
  description: string[];
}

export interface Experience {
  company: string;
  period: string;
  positions: Position[];
}

export interface TrainingData {
  experiences: Experience[];
  avatarUrl: string;
}
