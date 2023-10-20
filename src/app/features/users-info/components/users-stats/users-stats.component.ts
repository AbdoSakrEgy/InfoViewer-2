import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users-stats',
  templateUrl: './users-stats.component.html',
  styleUrls: ['./users-stats.component.css'],
})
export class UsersStatsComponent {
  range = new FormGroup({
    start: new FormControl<Date | null>(
      new Date(
        'Mon Oct 01 2023 00:00:00 GMT+0300 (Eastern European Summer Time)'
      )
    ),
    end: new FormControl<Date | null>(new Date()),
  });
  startValue = this.range.get('start')?.value;
  endValue = this.range.get('end')?.value;

  startDay = this.startValue?.getDate();
  startMonth = this.startValue?.getMonth();
  endDay = this.endValue?.getDate();
  endMonth = this.endValue?.getMonth();
  nameOfStartMonth = this.getMonthName(this.startMonth!);
  nameOfEndMonth = this.getMonthName(this.endMonth!);

  updateDateRange() {
    this.startValue = this.range.get('start')?.value;
    this.endValue = this.range.get('end')?.value;

    this.startDay = this.startValue?.getDate();
    this.startMonth = this.startValue?.getMonth();
    this.endDay = this.endValue?.getDate();
    this.endMonth = this.endValue?.getMonth();
    this.nameOfStartMonth = this.getMonthName(this.startMonth!);
    this.nameOfEndMonth = this.getMonthName(this.endMonth!);
  }
  getMonthName(month: number) {
    switch (month) {
      case 1:
        return 'يناير';
      case 2:
        return 'فبراير';
      case 3:
        return 'مارس';
      case 4:
        return 'أبريل';
      case 5:
        return 'مايو';
      case 6:
        return 'يونيو';
      case 7:
        return 'يوليو';
      case 8:
        return 'أغسطس';
      case 9:
        return 'سبتمبر';
      case 10:
        return 'أكتوبر';
      case 11:
        return 'نوفمبر';
      case 12:
        return 'ديسمبر';
      default:
        return '';
    }
  }
}
