import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/models/computer';
import { ComputerService } from 'src/app/services/computer.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  computer : Computer;
  types : string[];
  marques : string[];
  categorys : String[];


  constructor(private computerService : ComputerService,private router : Router,private toastr: ToastrService) { }

  ngOnInit() {
    this.computer = new Computer;
    this.types = this.computerService.types;
    this.marques = this.computerService.marques;
    this.categorys = this.computerService.categorys;
  }
  onSubmit(){
    this.computerService.addComputer(this.computer).subscribe(data => {
      this.toastr.success("L'ordinateur a été bien ajouté!!");
      this.router.navigate(['/dashboard']);
      });
  }

}
