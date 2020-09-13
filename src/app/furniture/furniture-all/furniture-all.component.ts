import { Component, OnInit } from '@angular/core';
import { Furniture } from 'src/app/Models/furniture';
import { FurnitureService } from 'src/app/furniture.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-furniture-all',
  templateUrl: './furniture-all.component.html',
  styleUrls: ['./furniture-all.component.css']
})
export class FurnitureAllComponent implements OnInit {

  allFurniture$: Observable<Furniture[]>;
  isAdmin: Boolean; 

  constructor(private furnitureService: FurnitureService, private authService: AuthService) { }

  ngOnInit() {
    this.allFurniture$ = this.furnitureService.getAllFurniture();
    this.isAdmin = this.authService.isAdmin();
  }

  deleteItem(id){
    this.furnitureService.deleteFurniture(id).subscribe((_) => {
      this.allFurniture$ = this.furnitureService.getAllFurniture();
    });
  }

}
