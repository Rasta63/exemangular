import { Component, OnInit } from '@angular/core';
import { ComputerService } from 'src/app/services/computer.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Computer } from 'src/app/models/computer';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  computer : Computer;
  types : string[];
  marques : string[];
  categorys : String[];
  isLoading : boolean;

  constructor(private computerService : ComputerService, private toastr : ToastrService,private router : Router, private route : ActivatedRoute) { }

  ngOnInit() {
     
    this.types = this.computerService.types;
    this.marques = this.computerService.marques;
    this.categorys = this.computerService.categorys;
    this.isLoading=true;
    this.computerService.getComputerById(+this.route.snapshot.paramMap.get('id')).subscribe((data : Computer)=>{
      this.computer= data;
      this.isLoading = false;
    });
  }
  onSubmit(){
    this.computerService.editComputer(this.computer).subscribe(data => {
      this.toastr.success("Les element de l'ordinateur ont été mis à jour avec succés");
      this.router.navigate(['/dashboard']);
      }); 
  }

}
