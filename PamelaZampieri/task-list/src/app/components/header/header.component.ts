import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  title: string = 'My Task List';
  showAddTask: boolean = true;
  suscription?: Subscription;

  constructor(
    private uiService: UiService,
    private router: Router
  ) {
    this.suscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {

  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
