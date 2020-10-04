import { Time } from '@angular/common';
import { Employee} from './Employee';

export class Tache {
    id: number;
    title: string;
    content: string;
    day: Date;
    hour: Time;
    employee: Employee;
  }