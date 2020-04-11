import { Component, OnInit, Input} from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  counts: Object = {};
  @Input() satellites: Satellite[];
  
  constructor() {
   }

  ngOnInit(): void {
  }

  
  public getCounts () {
    this.counts["total"] = this.satellites.length;

    for(let s of this.satellites){

      if(s.type.toLocaleLowerCase().includes("Space Debris".toLocaleLowerCase())){
        this.counts["debris"] += 1;
      }

      if(s.type.toLocaleLowerCase().includes("Communication".toLocaleLowerCase())){
        this.counts["comms"] += 1;
      }

      if(s.type.toLocaleLowerCase().includes("Probe".toLocaleLowerCase())){
        this.counts["probe"] += 1;
      }

      if(s.type.toLocaleLowerCase().includes("Positioning".toLocaleLowerCase())){
        this.counts["pos"] += 1;
      }

      if(s.type.toLocaleLowerCase().includes("Space Station".toLocaleLowerCase())){
        this.counts["ss"] += 1;
      }

      if(s.type.toLocaleLowerCase().includes("Telescope".toLocaleLowerCase())){
        this.counts["tele"] += 1;
      }
    }
    return this.counts;
  }
}
