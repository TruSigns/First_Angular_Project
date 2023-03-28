export interface Task {
  // ? can make it optional to use number or not
  id?: number;
  text: string;
  day: string;
  reminder: boolean;
}
