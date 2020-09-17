import { Component, OnInit } from '@angular/core';
import { FurnitureService } from 'src/app/furniture.service';
import { ActivatedRoute, Router } from '@angular/router';
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
    private formBuilder: FormBuilder,
    private router: Router) 
    {
      this.form = this.formBuilder.group({
        make: [''],
        model: [''],
        year: [''],
        description: [''],
        price: [''],
        image: [''],
        material: ['']
      });
    }

  ngOnInit() {
    let id = this.route.snapshot.params['_id'];
    this.furnitureService.getFurniture(id).subscribe(data => {
      this.furniture = data

      this.form = this.formBuilder.group({
        make: [this.furniture.make],
        model: [this.furniture.model],
        year: [this.furniture.year],
        description: [this.furniture.description],
        price: [this.furniture.description],
        image: [this.furniture.image],
        material: ['', Validators.nullValidator]
      });
    });
    
  }

  editItem(){
    let id = this.route.snapshot.params['_id'];
    this.furnitureService.editFurniture(id, this.form.value).subscribe(_ => {
      
      this.router.navigate(['/furniture/details/' + id]);
    });
    
    
  }

}
