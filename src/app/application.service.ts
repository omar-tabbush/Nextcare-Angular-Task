import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Claim } from './types/claim';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  constructor(private http: HttpClient) {}

  getClaims() {
    return this.http.get(
      'https://api.backendless.com/115C1BE2-C249-0CB1-FF9D-0979E5366300/BE7A57A5-8B95-4D32-B2FD-4C5DA14122C8/data/claims'
    );
  }
  getClaim(id: string) {
    return this.http.get(
      'https://api.backendless.com/115C1BE2-C249-0CB1-FF9D-0979E5366300/BE7A57A5-8B95-4D32-B2FD-4C5DA14122C8/data/claims/' +
        id
    );
  }
  addClaim(claim: Claim) {
    return this.http.post(
      'https://api.backendless.com/115C1BE2-C249-0CB1-FF9D-0979E5366300/BE7A57A5-8B95-4D32-B2FD-4C5DA14122C8/data/claims',
      claim
    );
  }
  updateClaim(claim: Claim, id: string) {
    return this.http.put(
      'https://api.backendless.com/115C1BE2-C249-0CB1-FF9D-0979E5366300/BE7A57A5-8B95-4D32-B2FD-4C5DA14122C8/data/claims/' +
        id,
      claim
    );
  }
  deleteClaim(claim: Claim) {
    return this.http.delete(
      'https://api.backendless.com/115C1BE2-C249-0CB1-FF9D-0979E5366300/BE7A57A5-8B95-4D32-B2FD-4C5DA14122C8/data/claims'
    );
  }
  //https://api.backendless.com/115C1BE2-C249-0CB1-FF9D-0979E5366300/BE7A57A5-8B95-4D32-B2FD-4C5DA14122C8/data/claims?where=admission_date%20%3E%3D%20'2023-03-26'%20AND%20admission_date%20%3C%3D%20'2023-03-28'
  searchClaims(
    startDate?: string,
    endDate?: string,
    insured_card_number?: string,
    hospital?: string
  ) {
    hospital?.replace(' ', '-');
    return this.http.get(
      'https://api.backendless.com/115C1BE2-C249-0CB1-FF9D-0979E5366300/BE7A57A5-8B95-4D32-B2FD-4C5DA14122C8/data/claims?where=' +
        `(admission_date >= '${startDate}' AND admission_date <=  '${endDate}' OR '${startDate}' = '' OR '${endDate}' = '') AND (insured_card_number LIKE '%${insured_card_number}%' OR '${insured_card_number}' = '') AND (hospital LIKE '%${hospital}%' OR '${hospital}' = '')`
      //(admission_date <= '2023-03-07' AND admission_date >=  '2023-03-07' OR '2023-03-07' = '' OR '2023-03-07' = '') AND (insured_card_number = '1gjklsdfghjasdhf' OR '1gjklsdfghjasdhf' = '') AND (hospital = 'asdasdasd' OR 'asdasdasd' = '')
    );
    //search by start date only

    //search by end date only

    //search by insured card number only

    //search by hospital only

    //search by start date and end date

    //search by start date and insured card number

    //search by start date and hospital

    //search by end date and insured card number

    //search by end date and hospital

    //search by insured card number and hospital

    //search by start date, end date and insured card number

    //search by start date, end date and hospital

    //search by start date, insured card number and hospital

    //search by end date, insured card number and hospital
  }
}
/*return this.http.get(
      'https://api.backendless.com/115C1BE2-C249-0CB1-FF9D-0979E5366300/BE7A57A5-8B95-4D32-B2FD-4C5DA14122C8/data/claims?where= ' +
        (startDate ? 'admission_date%20%3E%3D%20' + startDate + '%20' : '') +
        (endDate ? 'AND%20admission_date%20%3C%3D%20' + endDate + '%20' : '') +
        (insured_card_number
          ? 'AND%20insured_card_number%20%3D%20' + insured_card_number + '%20'
          : '') +
        (hospital?'AND%20hospital%20%3D%20' +
        hospital:'')
    );*/
