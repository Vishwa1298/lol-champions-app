import { Component, ChangeDetectorRef } from '@angular/core';
import { ChampionService } from '../services/champion';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-champion-list',
  standalone: true,
  imports: [CommonModule, AgGridAngular],
  templateUrl: './champion-list.html'
})
export class ChampionListComponent {

  rowData: any[] = [];

  columnDefs = [
    { field: 'id' },
    { field: 'key' },
    { field: 'name' },
    { field: 'title' }
  ];

  defaultColDef = {
    flex: 1,
    sortable: true,
    filter: true
  };

  constructor(
    private championService: ChampionService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {

    this.championService.getChampions().subscribe((data: any[]) => {

      console.log("FINAL DATA:", data);

      this.rowData = data;

      // FORCE Angular to refresh view
      this.cdr.detectChanges();

    });

  }

}






