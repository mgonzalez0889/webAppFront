import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryGradeService {

  constructor(protected http: HttpClient) { }

  getCategoryGrades() {
    return this.http.get('http://webappbackend.test/api/gradecategory');
  }

  getCategoryGrade(id) {

    return this.http.get(`http://webappbackend.test/api/gradecategory/${id}`);

  }

  postCategoryGrade(data) {
    return this.http.post('http://webappbackend.test/api/gradecategory', data);
  }

  putCategoryGrade(id, data) {
    return this.http.put(`http://webappbackend.test/api/gradecategory/${id}`, data);
  }

  deleteCategoryGrade(id) {
    return this.http.delete(`http://webappbackend.test/api/gradecategory/${id}`);
  }

}
