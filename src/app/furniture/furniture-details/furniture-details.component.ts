import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FurnitureService } from 'src/app/furniture.service';
import { Furniture } from 'src/app/Models/furniture';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html',
  styleUrls: ['./furniture-details.component.css']
})
export class FurnitureDetailsComponent implements OnInit {
  furniture: Furniture;

  constructor(private route: ActivatedRoute, private furnitureService: FurnitureService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['_id'];
    
    this.furnitureService.getFurniture(id).subscribe(data => {
      this.furniture = data;
    });
  }

}
