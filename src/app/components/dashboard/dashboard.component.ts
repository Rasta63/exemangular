import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/models/computer';
import { ComputerService } from 'src/app/services/computer.service';
import { ToastrService } from 'ngx-toastr';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  computers: Computer[];
  isLoading: boolean;
  faTrash = faTrash;
  faEdit = faEdit;
  faInfoCircle = faInfoCircle;
  constructor(private computeService: ComputerService, private toastr: ToastrService) { }

  ngOnInit() {
    this.isLoading = true;
    this.computeService.getAllComputer().subscribe((data: Computer[]) => {
      this.computers = data;
      this.isLoading = false;
    });
  }
  retirerComputer(computer: Computer) {
    this.isLoading = true;
    this.computeService.deleteComputer(computer.id).subscribe(then => {
      this.computeService.getAllComputer().subscribe((data: Computer[]) => {
        this.computers = data;
        this.isLoading = false;
        this.toastr.success(`L'ordinateur ${computer.id} a été bien enlevé du stock`);
      });
    });
  }
}
