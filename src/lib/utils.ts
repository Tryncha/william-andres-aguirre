import { PROJECTS_DATA } from '../data/projects';

export function getProjectData(projectId: string) {
  return PROJECTS_DATA.find((txt) => txt.id === projectId);
}
