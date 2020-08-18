import { Component, OnInit } from '@angular/core';
import { Player } from '@app/shared/models/player.model';
import players from '@assets/json/players.json';

@Component({
  selector: 'app-draft-home',
  templateUrl: './draft-home.component.html',
  styleUrls: ['./draft-home.component.scss']
})
export class DraftHomeComponent implements OnInit {
  playerList: Player[] = players;
  constructor() {}

  ngOnInit(): void {}
}
