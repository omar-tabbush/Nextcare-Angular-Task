import { Component, OnInit,  } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import jsPDF from 'jspdf';
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
  claims!: Array<Claim> ;
  total: any;
  statuses: any;
  loading = false;
  table_loading = false;
  constructor(private app: ApplicationService) {}

  ngOnInit(): void {
    this.table_loading = true;
    this.app
      .getClaims()
      .subscribe((data) => {
        this.claims = data as Claim[];
      })
      .add(() => {
        this.total = this.getTotals();
        this.statuses = this.getStatusString();
        this.table_loading = false;
      });

    
  }

  onSearch() {
    this.loading = true;
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
        this.loading = false;
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

  public downloadPDF() {
    const doc = new jsPDF('landscape');

    const claimsAsStrings: { [key: string]: string }[] = this.claims.map(
      (claim) => {
        return {
          insured_card_number: claim.insured_card_number || ' ',
          insured_name: claim.insured_name || ' ',
          dob: claim.dob || ' ',
          gender: claim.gender || ' ',
          hospital: claim.hospital || ' ',
          admission_date: claim.admission_date || ' ',
          medical_case: claim.medical_case || ' ',
          estimated_cost: claim.estimated_cost || ' ',
          treating_physician: claim.treating_physician || ' ',
          status: claim.status || ' ',
          remarks: claim.remarks || ' ',
        };
      }
    );
    console.log(claimsAsStrings);
    console.log(Object.keys(claimsAsStrings[0]));

    doc.table(2, 2, claimsAsStrings, [...Object.keys(claimsAsStrings[0])], {
      autoSize: true,
      fontSize: 7,
    });
    doc.save('table.pdf');
  }
  stringify(obj:any){
    return JSON.stringify(obj || " claims not found");
  }
}
