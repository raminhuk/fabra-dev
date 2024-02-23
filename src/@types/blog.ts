type Author = {
    id: string;
    firstName: string;
    lastName: string;
    fullName: string;
    profilePhoto: string;
  }
  
type Image = {
    name: string;
    url: string;
    rawUrl: string;
}
  
export interface BlogPost {
    id: string;
    date: string;
    slug: string;
    authors: Author[];
    published: boolean;
    tags: string[];
    image: Image[];
    title: string;
    description: string;
  }