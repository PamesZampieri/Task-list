export interface Task {
  id: number; //Cuando creamos una task viene con un id, que podría no venir.
  text: string;
  day: string;
  reminder: boolean;
}
