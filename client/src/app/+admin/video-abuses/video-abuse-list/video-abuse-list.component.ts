import { Component, OnInit } from '@angular/core';

import { NotificationsService } from 'angular2-notifications';

import { VideoAbuseService, VideoAbuse} from '../../../shared';

@Component({
	selector: 'my-video-abuse-list',
	templateUrl: './video-abuse-list.component.html',
  styleUrls: [ './video-abuse-list.component.scss' ]
})
export class VideoAbuseListComponent implements OnInit {
  videoAbuses: VideoAbuse[];

  constructor(
    private notificationsService: NotificationsService,
    private videoAbuseService: VideoAbuseService
  ) {  }

  ngOnInit() {
    this.getVideoAbuses();
  }

  buildVideoLink(videoAbuse: VideoAbuse) {
    return `/videos/${videoAbuse.videoId}`;
  }

  private getVideoAbuses() {
    this.videoAbuseService.getVideoAbuses().subscribe(
      res => this.videoAbuses = res.videoAbuses,

      err => this.notificationsService.error('Error', err.text)
    );
  }
}