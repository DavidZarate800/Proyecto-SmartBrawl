import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public colSize = 4;
  public isMobile = false;

  constructor(public breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      this.isMobile = result.matches;
      if (this.isMobile){
        this.colSize = 2;
      }else{
        this.colSize = 4;
      }
    });
  }

  displayedColumns: string[] = ['position', 'brand', 'name', 'os', 'resolution', 'cpu'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface TopTable {
  position: number;
  brand: string;
  name: string;
  os: string;
  resolution: string;
  cpu: string;
}

const ELEMENT_DATA: TopTable[] = [
  { position: 1, brand: 'Samsung', name: 'Galaxy S20 / S20 Plus', os: 'Android 10', resolution: '3200 x 1440', cpu: 'Snapdragon 865' },
  { position: 2, brand: 'Apple', name: 'iPhone 11', os: 'iOS 13', resolution: '828 x 1792', cpu: 'A13 Bionic' },
  { position: 3, brand: 'Samsung', name: 'Galaxy Note 10 Plus', os: 'Android 9', resolution: '2280 x 1080', cpu: 'Snapdragon 855' },
  { position: 4, brand: 'Apple', name: 'iPhone 11 Pro / 11 Pro Max', os: 'iOS 13', resolution: '1242 x 2688', cpu: 'A13 Bionic' },
  { position: 5, brand: 'OnePlus', name: 'OnePlus 8 Pro', os: 'Android 10', resolution: '3168 x 1440', cpu: 'Snapdragon 865' },
  { position: 6, brand: 'Apple', name: 'iPhone SE (2020)', os: 'iOS 13', resolution: '1134 x 750', cpu: 'A13 Bionic' },
  { position: 7, brand: 'Samsung', name: 'Galaxy S20 Ultra', os: 'Android 10', resolution: '3200 x 1440', cpu: 'Snapdragon 865' },
  { position: 8, brand: 'Samsung', name: 'Galaxy S10/S10 Plus', os: 'Android Pie', resolution: '3040×1440', cpu: 'Snapdragon 855' },
  { position: 9, brand: 'OnePlus', name: 'OnePlus 7 Pro', os: 'Android Pie', resolution: 'Quad HD+', cpu: 'Snapdragon 855' },
  { position: 10, brand: 'Google', name: 'Pixel 4 XL', os: 'Android 10', resolution: '1440 x 3040', cpu: 'Snapdragon 855' }
];
