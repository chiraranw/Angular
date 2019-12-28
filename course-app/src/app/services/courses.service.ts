import { Injectable, Optional } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(@Optional() private _courses?: string[]) { }
  public get courses(): string[] { return ["BI", "GU", "HY"]; }
}
