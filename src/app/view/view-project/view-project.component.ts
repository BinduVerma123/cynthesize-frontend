import { Component, OnInit, ElementRef } from '@angular/core';
import { ProjectService } from '@app/core/project/project.service';
import { finalize } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from '@app/shared/objects';
import { ErrorHandlerService } from '@app/core/error-handler.service';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.scss']
})
export class ViewProjectComponent implements OnInit {
  project: Observable<Project>;
  currentActiveBar = 'Home';

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService
  ) {}

  ngOnInit() {}

  getProject() {
    let projectIdByUrl = '';
    let projectNameByUrl = '';
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id').split('-');
      projectIdByUrl = id[0];
      id.shift();
      projectNameByUrl = id.join(' ');
    });
  }
  setBarActive(checkpointName: string) {
    this.currentActiveBar = checkpointName;
  }

  initCheckpoint(el: any) {
    this.currentActiveBar = el;
  }
}
