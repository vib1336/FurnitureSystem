import { Component, OnInit } from '@angular/core';
import { FurnitureService } from 'src/app/furniture.service';
import { ActivatedRoute } from '@angular/router';
import { Furniture } from 'src/app/Models/furniture';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-furniture-edit',
  templateUrl: './furniture-edit.component.html',
  styleUrls: ['./furniture-edit.component.css']
})
export class FurnitureEditComponent implements OnInit {

  furniture: Furniture;
  form: FormGroup;

  constructor(private furnitureService: FurnitureService, 
    private route: ActivatedRoute, 
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    let id = this.route.snapshot.params['_id'];
    this.furnitureService.getFurniture(id).subscribe(data => this.furniture = data);
    this.form = this.formBuilder.group({
      make: ['', [Validators.required, Validators.minLength(4)]],
      model: ['', [Validators.required, Validators.minLength(4)]],
      year: ['', [Validators.required, Validators.min(1950), Validators.max(2050)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: ['', [Validators.required, Validators.min(1)]],
      image: ['', Validators.required],
      material: ['', Validators.nullValidator]
    });
  }

  editItem(){
    let id = this.route.snapshot.params['_id'];
    this.furnitureService.editFurniture(id, this.form.value).subscribe(data => console.log(data));
  }

}
