import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Player } from '@app/shared/models/player.model';
import players from '@assets/json/players.json';

const PLAYER_DATA: Player[] = players;

@Component({
  selector: 'app-rankings-home',
  templateUrl: './rankings-home.component.html',
  styleUrls: ['./rankings-home.component.scss']
})
export class RankingsHomeComponent implements OnInit {
  displayedColumns: string[] = ['Player', 'Position', 'Rank', 'Tier'];
  dataSource = new MatTableDataSource<Player>(PLAYER_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
