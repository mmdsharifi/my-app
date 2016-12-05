import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baboon',
  templateUrl: './baboon.component.html',
  styleUrls: ['./baboon.component.scss']
})
export class BaboonComponent implements OnInit {

  constructor() { }

  private authors: Array<string>

  ngOnInit() {
    this.authors = ["Patrick", "Hossen", "Mohammad"]
  }

}
