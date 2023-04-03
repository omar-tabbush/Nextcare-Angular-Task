import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditClaimComponent } from './edit-claim/edit-claim.component';
import { SearchCenterComponent } from './search-center/search-center.component';
import { ClaimCenterComponent } from './claim-center/claim-center.component';
import { ApplicationService } from 'src/app/application.service';
import { CsvModule } from '@ctrl/ngx-csv';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { StringifyPipe } from 'src/app/pipes/stringify.pipe';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'create',
        component: ClaimCenterComponent,
      },
      {
        path: 'search',
        component: SearchCenterComponent,
      },
      {
        path: 'edit/:id',
        component: EditClaimComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [
    ClaimCenterComponent,
    SearchCenterComponent,
    EditClaimComponent,
    StringifyPipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CsvModule,
  ],
  providers: [ApplicationService],
  exports: [],
})
export class LazyModule {}
