import { live } from './../../../shared/model/live.model';
import { LiveService } from './../../../shared/service/live.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  livesPrevious: live[];
  livesNext: live[];

  constructor(
    public LiveService: LiveService
  ) { }

  ngOnInit(): void {
    this.getLives();
  }

  getLives(){
    this.LiveService.getLivesWithFlag('previous').subscribe(data => {
      this.livesPrevious = data.content;
      console.log(this.livesPrevious);
      });

    this.LiveService.getLivesWithFlag('next').subscribe(data => {
      this.livesPrevious = data.content;
      console.log(this.livesNext);
      });

  }
}
