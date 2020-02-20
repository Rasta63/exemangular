import { Component, OnInit } from '@angular/core';
import { ComputerService } from 'src/app/services/computer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Computer } from 'src/app/models/computer';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-computer',
  templateUrl: './detail-computer.component.html',
  styleUrls: ['./detail-computer.component.css']
})
export class DetailComputerComponent implements OnInit {
  computer : Computer;
  computers : Computer[];
  isLoading : boolean;

  constructor(private computerService : ComputerService, private router : Router,private toastr : ToastrService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.isLoading=true;
    this.computerService.getComputerById(+this.route.snapshot.paramMap.get('id')).subscribe((data : Computer)=>{
      this.computer= data;
      this.isLoading = false;
    });
  }
  retirerComputer(computer : Computer){
    this.isLoading = true;
    this.computerService.deleteComputer(computer.id).subscribe(then =>{
       this.computerService.getAllComputer().subscribe((data : Computer[])=> {
         this.computers = data;
         this.isLoading = false;
         this.toastr.success(`L'ordinateur ${computer.id} a été bien enlevé du stock`);
       });
      });
    }

}
