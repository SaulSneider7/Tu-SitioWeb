import projects from '../../../public/data/projects.json';
import posts from '../../../public/data/blog.json';
export { projects, posts };
export const siteUrl = 'https://tu-sitioweb.com';
export const whatsapp = (message: string) => 'https://wa.me/51917794918?text=' + encodeURIComponent(message);
