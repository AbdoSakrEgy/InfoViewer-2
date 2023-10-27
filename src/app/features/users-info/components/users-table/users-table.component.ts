import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
})
export class UsersTableComponent implements AfterViewInit {
  innerWidth: any = screen.width;
  displayedColumns = displayedColumnsData;
  dataSource = dataSourceData;
  dataSourceForPagination = new MatTableDataSource<any>(this.dataSource);
  @ViewChild(MatPaginator) paginator: any;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }
  ngAfterViewInit() {
    this.dataSourceForPagination.paginator = this.paginator;
  }
  isColumnHidden(column: string) {
    for (let i = 0; i < this.displayedColumns.length; i++) {
      if (this.displayedColumns[i] === column) {
        return false;
      }
    }
    return true;
  }
  hideShowColumn(column: string) {
    if (this.isColumnHidden(column)) {
      let defaultColumns = [
        'setting',
        'fileName',
        'workDays',
        'email',
        'fullName',
        'id',
      ];
      let hiddenColumns: any = [];
      for (let i = 0; i < defaultColumns.length; i++) {
        if (defaultColumns[i] != column) {
          hiddenColumns.push(defaultColumns[i]);
          for (let j = 0; j < this.displayedColumns.length; j++) {
            if (defaultColumns[i] === this.displayedColumns[j]) {
              hiddenColumns.pop();
              break;
            }
          }
        }
      }
      let newDisplayedColumns = defaultColumns;
      for (let j = 0; j < hiddenColumns.length; j++) {
        newDisplayedColumns = newDisplayedColumns.filter(
          (item) => item != hiddenColumns[j]
        );
      }
      this.displayedColumns = newDisplayedColumns;
    } else {
      let columnIndex;
      for (let i = 0; i < this.displayedColumns.length; i++) {
        if (this.displayedColumns[i] === column) {
          columnIndex = i;
          break;
        }
      }
      this.displayedColumns.splice(columnIndex!, 1);
    }
  }
}

// data
let displayedColumnsData: string[] = [
  'setting',
  'fileName',
  'workDays',
  'email',
  'fullName',
  'id',
];
let dataSourceData = [
  {
    id: 'ID-1',
    fullName: 'محمد بن عبدالله بن عبدالمطلب بن هاشم بن عبدمناف',
    email: 'abdo@email.com',
    workDays: [true, true, false, true, true, true, false],
    fileName: 'png.واجهة المستخدم',
  },
  {
    id: 'ID-2',
    fullName: 'عبدالرحيم',
    email: 'tarek@email.com',
    workDays: [true, true, false, true, true, true, false],
    fileName: 'png.واجهة المستخدم',
  },
  {
    id: 'ID-2',
    fullName: 'عبدالرحيم السيد صقر',
    email: 'tarek@email.com',
    workDays: [true, true, false, true, true, true, false],
    fileName: 'png.واجهة المستخدم',
  },
  {
    id: 'ID-4',
    fullName: 'طارق',
    email: 'tarek@email.com',
    workDays: [true, true, false, true, true, true, false],
    fileName: 'png.واجهة المستخدم',
  },
  {
    id: 'ID-5',
    fullName: 'عبدالرحيم السيد صقر',
    email: 'tarek@email.com',
    workDays: [true, true, false, true, true, true, false],
    fileName: 'png.واجهة المستخدم',
  },
];
