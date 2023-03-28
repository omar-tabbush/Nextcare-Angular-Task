import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApplicationService } from 'src/app/application.service';
import { Claim } from 'src/app/types/claim';

@Component({
  selector: 'app-claim-center',
  templateUrl: './claim-center.component.html',
  styleUrls: ['./claim-center.component.css'],
})
export class ClaimCenterComponent implements OnInit {
  claim!: FormGroup;
  isSubmitted = false;
  constructor(private app: ApplicationService) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.claim = new FormGroup({
      insured_card_number: new FormControl('', [
        Validators.required,
        Validators.minLength(16),
        Validators.pattern('^[a-zA-Z0-9]{16}$'),
      ]),
      insured_name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      dob: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      hospital: new FormControl('', [Validators.required]),
      admission_date: new FormControl('', [Validators.required]),
      medical_case: new FormControl('', [Validators.required]),
      estimated_cost: new FormControl('', [Validators.required]),
      treating_physician: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      remarks: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.claim);
    this.app.addClaim(this.claim.value as Claim).subscribe((data) => {
    }).add(() => {
      this.claim.reset();
      this.isSubmitted = true;
    })
  }
}
