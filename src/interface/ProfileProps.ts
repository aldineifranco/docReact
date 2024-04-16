export interface ProfileProps {
  id: number;
  title: string;
  url: string;
  link?: () => void;
}