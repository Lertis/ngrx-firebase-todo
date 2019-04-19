/* export interface Todo {
    id: string;
    text: string;
    completed: boolean;
} */
 
 export class Todo {
  id: string;
  text: string;
  completed: boolean;
   constructor(
    id?: number,
    text?: string,
    completed?: boolean
   ) {}
 }