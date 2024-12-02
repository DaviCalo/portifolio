import { TagModel } from "./tag.model";

export interface ProjectModel { 
    imageUrl: string; 
    imageDescription: string;
    title: string;
    subtitle: string;
    tags: TagModel[];
    gitUrl: string;
    deployUrl: string;
    type: string;
}