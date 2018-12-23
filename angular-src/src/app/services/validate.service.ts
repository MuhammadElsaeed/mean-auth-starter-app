import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateDate(minAge) {
    return (dateControl: FormControl) => {
      let date = moment(dateControl.value, "YYYY-MM-DD");

      if (!date.isValid()) {
        return { invalidformat: true };
      } else {
        let now = moment();
        let age = moment.duration(now.diff(date)).as('year');
        return age < minAge ? { minage: true } : null;
      }
    };
  }


  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
