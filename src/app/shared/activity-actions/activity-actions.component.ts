import { Component, OnInit, Input } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { ShareSheetComponent } from '../share-sheet/share-sheet.component';

@Component({
  selector: 'app-activity-actions',
  templateUrl: './activity-actions.component.html',
  styleUrls: ['./activity-actions.component.scss']
})
export class ActivityActionsComponent implements OnInit {
  @Input() likes: any;
  @Input() type: any;
  @Input() id: any;
  @Input() url: any;

  constructor(private bottomSheet: MatBottomSheet) {}

  ngOnInit() {}

  openShareSheet(): void {
    this.bottomSheet.open(ShareSheetComponent, {
      data: {
        facebookUrl: 'https://www.facebook.com/sharer/sharer.php?u=',
        twitterUrl: 'https://twitter.com/home?status=',
        linkedInUrl: 'https://www.linkedin.com/shareArticle?mini=true&url=&title=&summary=&source='
      }
    });
  }
}
