import { TEXTS } from '../data/projects';

export function formatProjectName(name: string) {
  return (name[0].toUpperCase() + name.slice(1, name.length)).split('-').join(' ');
}

export function getProjectData(projectId: string) {
  return TEXTS.find((txt) => txt.id === projectId);
}
