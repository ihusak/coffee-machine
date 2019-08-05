import { Component, OnInit } from '@angular/core';
import {PanelService} from './panel.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  public dataResources;
  constructor(public panelService: PanelService) { }

  ngOnInit() {}
  public getCoffee () {
    this.panelService.getCoffeeResources().subscribe((data) => {
      this.dataResources = data;
    });
  }
  public saveResources() {
    this.panelService.saveCoffeeResources(this.dataResources).subscribe((data) => {
      console.log(data);
    });
  }
}
