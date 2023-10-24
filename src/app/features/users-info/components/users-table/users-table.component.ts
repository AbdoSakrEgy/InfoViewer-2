import { Component } from '@angular/core';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
})
export class UsersTableComponent {
  displayedColumns: string[] = [
    'setting',
    'fileName',
    'workDays',
    'email',
    'fullName',
    'id',
  ];

  dataSource = [
    {
      id: 'ID-1',
      fullName: 'عبدالرحيم السيد عبدالرحيم صقر',
      email: 'abdo@email.com',
      workDays: [true, true, false, true, true, true, false],
      fileName: 'png.واجهة المستخدم',
    },
    {
      id: 'ID-2',
      fullName: 'طارق',
      email: 'tarek@email.com',
      workDays: [true, true, false, true, true, true, false],
      fileName: 'png.واجهة المستخدم',
    },
  ];
}
