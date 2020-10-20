import { Component, OnInit } from '@angular/core';
import { PlanService } from '../service/plan.service';
import { Plan } from '../bean/plan';
@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css']
})
export class PlanListComponent implements OnInit {
  plans: Plan[];

  constructor(private planService: PlanService) { }

  ngOnInit() {
    this.plans = this.planService.getPlans();
  }
  // 删除计划
  deletePlan (plan) {
    this.planService.deletePlan(plan.id);
    this.plans = this.planService.getPlans();
  }

}
