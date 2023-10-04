import { Photo } from "./photo";

export class Project {
    
    id:number;
    name:string;
    description:string;
    userId:number;
    photos:Photo[];
    photoUrl:Project;    

}
