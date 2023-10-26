// report-image.component.ts
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Image } from 'src/app/model/image';
import { ImageServiceService } from 'src/app/service/image-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-image',
  templateUrl: './report-image.component.html',
  styleUrls: ['./report-image.component.css']
})
export class ReportImageComponent implements OnInit {
  id: number = 0;
  form: FormGroup = new FormGroup({});
  image: Image = new Image();
  mensaje: string = '';
  imageUrl: string = ''; // Variable para almacenar la URL de la imagen a mostrar

  constructor(private imageService: ImageServiceService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      nameImage: new FormControl('', [Validators.required]),
      urlImage: new FormControl('', [Validators.required]),
    });

    // Escuchar cambios en el campo 'urlImage' del formulario y actualizar la variable 'imageUrl'
    this.form.get('urlImage')?.valueChanges.subscribe((value) => {
      this.imageUrl = value;
    });
  }

  aceptar() {
    this.image.id = this.form.value['id'];
    this.image.nameImage = this.form.value['nameImage'];
    this.image.urlImage = this.form.value['urlImage'];

    if (this.form.valid) {
      this.imageService.insert(this.image).subscribe((data) => {
        // Manejar respuesta después de la inserción, si es necesario
        this.router.navigate(['images']);
      });
    } else {
      this.mensaje = "Agregue campos omitidos";
    }
  }
}
