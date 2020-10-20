import { Component, OnInit } from '@angular/core';
import { PlanService } from '../service/plan.service';
import { Plan } from '../bean/plan';
import { Location } from '@angular/common';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor(
    private planService: PlanService,
    private location: Location
  ) { }
  newplan = {
    id: 0,
    name: '大熊',
    comment: '',
    date: '111',
    totalTime: 0
  };
  ngOnInit() {
  }
  // 添加计划
  addPlan(newplan: any) {
    const d = new Date();
    const s = newplan.date.split('-');
    d.setFullYear(Number.parseInt(s[0]));
    d.setMonth(Number.parseInt(s[1]) - 1);
    d.setDate(Number.parseInt(s[2]));
    const plan: Plan = {
      id: new Date().getTime(),
      name: newplan.name,
      comment: newplan.comment,
      date: d.getTime(),
      totalTime: newplan.totalTime
    };
    this.planService.addPlan(plan);
  }
  // 取消添加
  cancel() {
    this.location.back();
  }
}
