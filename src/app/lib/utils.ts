export function formatProjectName(name: string) {
  return (name[0].toUpperCase() + name.slice(1, name.length)).split('-').join(' ');
}
