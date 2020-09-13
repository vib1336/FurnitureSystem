import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Furniture } from './Models/furniture';

const createFurniture = 'http://localhost:5000/furniture/create';
const getAllFurniture = 'http://localhost:5000/furniture/all';
const getFurniture = 'http://localhost:5000/furniture/details/';
const getMyFurniture = 'http://localhost:5000/furniture/user';
const deleteFurniture = 'http://localhost:5000/furniture/delete/';
const editFurniture = 'http://localhost:5000/furniture/edit/';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {

  constructor(private http: HttpClient) { }

  createFurniture(data) {
    return this.http.post(createFurniture, data);
  }

  getAllFurniture(): Observable<Furniture[]> {
    return this.http.get<Furniture[]>(getAllFurniture);
  }

  getFurniture(id) {
    return this.http.get<Furniture>(getFurniture + id);
  }

  getMyFurniture(): Observable<Furniture[]> {
    return this.http.get<Furniture[]>(getMyFurniture);
  }

  editFurniture(id, data){
    return this.http.put(editFurniture + id, data);
  }

  deleteFurniture(id) {
    return this.http.delete(deleteFurniture + id);
  }
}
