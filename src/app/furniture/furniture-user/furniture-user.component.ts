import { Component, OnInit } from '@angular/core';
import { FurnitureService } from 'src/app/furniture.service';
import { Observable } from 'rxjs';
import { Furniture } from 'src/app/Models/furniture';

@Component({
  selector: 'app-furniture-user',
  templateUrl: './furniture-user.component.html',
  styleUrls: ['./furniture-user.component.css']
})
export class FurnitureUserComponent implements OnInit {

  furniture$: Observable<Furniture[]>
  constructor(private furnitureService: FurnitureService) { }

  ngOnInit() {
    this.furniture$ = this.furnitureService.getMyFurniture();
  }

  deleteItem(id){
    this.furnitureService.deleteFurniture(id).subscribe(data => {
      this.furniture$ = this.furnitureService.getMyFurniture();
    });
  }
}
