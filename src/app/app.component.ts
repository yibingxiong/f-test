import { Component } from '@angular/core';
import { PlanService } from './service/plan.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private planService: PlanService) {

  }
  title = 'app';
}
