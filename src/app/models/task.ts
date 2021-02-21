import { Project } from './project';
import { Sprint } from './sprint';

export class Task {
  id: number;
  taskId: number;
  taskDescription: string;
  plannedDuration: number;
  project: Project;
  sprint: Sprint;
}
