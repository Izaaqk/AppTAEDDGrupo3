import { Injectable } from '@angular/core';
import { Image } from '../model/image';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {
  private url = "http://localhost:8080/api/";

  constructor(private http: HttpClient) { }

  insert(image: Image) {
    return this.http.post(this.url + 'image', image);
  }
  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.url + "images");
  }
}
