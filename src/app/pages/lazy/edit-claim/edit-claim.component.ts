import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from 'src/app/application.service';
import { Claim } from 'src/app/types/claim';

@Component({
  selector: 'app-edit-claim',
  templateUrl: './edit-claim.component.html',
  styleUrls: ['./edit-claim.component.css'],
})
export class EditClaimComponent {
  claim!: FormGroup;
  loading = false;
  constructor(private app: ApplicationService, private route: ActivatedRoute , private router: Router) {}

  ngOnInit() {
    this.initializeForm();
    const objectId = this.route.snapshot.paramMap.get('id');
    objectId
      ? this.app.getClaim(objectId as string).subscribe((data) => {
        console.log(data );
        
          this.claim.patchValue(data as Claim);
        })
      : '';
  }

  initializeForm() {
    this.claim = new FormGroup({
      objectId: new FormControl('', [Validators.required]),
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
    this.loading = true;
    this.app
      .updateClaim(this.claim.value as Claim, this.claim.value.objectId)
      .subscribe((data) => {
        console.log(data);
      }).add(() => {
        this.loading = false;
        this.router.navigate([`/claim/search`]);
      });

  }
}
