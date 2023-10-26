import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from '../../../service/image-service.service';
import { Image } from '../../../model/image';

@Component({
  selector: 'app-listado-image',
  templateUrl: './listado-image.component.html',
  styleUrls: ['./listado-image.component.css']
})
export class ListadoImageComponent implements OnInit {
  images: Image[] = [];

  constructor(private imageService: ImageServiceService) { }

  ngOnInit(): void {
    this.loadImages(); // Llama a esta función para cargar las imágenes al inicio

    // Puedes llamar a esta función cada vez que una nueva imagen se registre
  }

  loadImages() {
    this.imageService.getImages().subscribe(data => {
      this.images = data;
    });
  }
}
