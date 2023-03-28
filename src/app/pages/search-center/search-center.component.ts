import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationService } from 'src/app/application.service';
import { Claim } from 'src/app/types/claim';

@Component({
  selector: 'app-search-center',
  templateUrl: './search-center.component.html',
  styleUrls: ['./search-center.component.css'],
})
export class SearchCenterComponent implements OnInit {
  searchForm = new FormGroup({
    insured_card_number: new FormControl(''),
    hospital: new FormControl(''),
    fromDate: new FormControl(''),
    toDate: new FormControl(''),
  });
  claims!: Array<Claim>;
  total: any;
  statuses: any;

  constructor(private app: ApplicationService) {}

  ngOnInit(): void {
    this.app
      .getClaims()
      .subscribe((data) => {
        this.claims = data as Claim[];
      })
      .add(() => {
        this.total = this.getTotals();
        this.statuses = this.getStatusString();
      });
  }

  onSearch() {
    console.log(this.searchForm.value);

    this.app
      .searchClaims(
        this.searchForm.value.fromDate as string,
        this.searchForm.value.toDate as string,
        this.searchForm.value.insured_card_number as string,
        this.searchForm.value.hospital as string
      )
      .subscribe((data: any) => {
        this.claims = data as Claim[];
        console.log(data);
      })
      .add(() => {
        this.total = this.getTotals();
        this.statuses = this.getStatusString();
      });
  }

  getTotals() {
    let total = 0;
    this.claims.forEach((claim) => {
      total += +claim.estimated_cost;
    });
    return total;
  }

  getStatusString() {
    const covered = this.claims.filter(
      (obj) => obj.status == 'Approved'
    ).length;
    const notCovered = this.claims.filter(
      (obj) => obj.status == 'Rejected'
    ).length;
    const pending = this.claims.filter((obj) => obj.status == 'Pending').length;
    return `${this.claims.length} (${covered} Covered, ${notCovered} Not Covered, ${pending} Pending)`;
  }
}
