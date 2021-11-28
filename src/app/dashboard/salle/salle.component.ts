import { Component, OnInit } from '@angular/core';
import {SallesService} from '../../service/salles.service';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {

  constructor( private salleService: SallesService) { }


  salles;
  ngOnInit(): void {
    this.salleService.getAllSalles().subscribe(data =>{
      this.salles=data;
    },err => {
      console.log(err);
    })
  }



}
