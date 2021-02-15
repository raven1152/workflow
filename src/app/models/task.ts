import { Project } from './project';

export class Task {
  id: number;
  taskId: number;
  taskDescription: string;
  plannedDuration: number;
  project: Project;
}
