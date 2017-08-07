# ng-plan

> 本项目是angular4.0的一个Demo，可以实现对个人计划的管理。目的是分享一下个人做一个angular项目的一般做法，希望能为一些朋友提供参考。项目参考了[vue-tutorial](https://github.com/MeCKodo/vue-tutorial)，在此对原作者表示感谢。

*****

> git地址：https://github.com/yibingxiong/ng-plan
> 博客地址：http://www.cnblogs.com/floor/


## 项目架构
![Markdown](http://i4.bvimg.com/595273/7116a47c178ff593.png)
*****

## 开发过程详解

> 本开发过程不对angular4.0的使用进行详细讲解，一些基本概念和一些工具的安装使用请参考[官网](https://angular.cn/)

 ### 1. 初始化项目
- 使用angular-cli搭建项目
`ng new ng-plan`
- 启动项目
  - `cd ng-plan`
  - `ng serve`
  ![Markdown](http://i4.bvimg.com/595273/6944e1aa94b0eae8.png)
- 访问localhost:4200/查看效果
![Markdown](http://i2.bvimg.com/595273/9c590419f52e7b82.png)
如果能够看到这个效果证明你完成了天才第一步（不是雀式纸尿裤哦）
### 2. 做一个首页
- 引入bootstrap样式库
为了简化样式编写，直接用个第三方库bootstrap，在/src/index.html的heade引入，如下
`<link href="http://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">`
- 修改/src/app/app.component.html

```
<nav class="navbar navbar-default">
  <div class="container">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          计划板
        </a>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">首页</a></li>
        <li><a href="#">计划列表</a></li>
      </ul>
    </div>
  </div>
</nav>
<div class="container">
  <div class="col-sm-3">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h1 class="text-center">已有时长</h1>
      </div>
      <div class="panel-body">
        <h1 class="text-center">1 小时</h1>
      </div>
    </div>
  </div>
  <div class="col-sm-9">
    <div class="jumbotron">
      <h1>任务追踪</h1>
      <p>
        <strong>
          <a href="#">创建一个任务</a>
        </strong>
      </p>
    </div>
  </div>
</div>
```
效果如下
![Markdown](http://i1.bvimg.com/595273/b4c9d16034f8b74f.png)

### 3. 自己动手做一个组件
- 使用angular-cli创建组件 ng g component navigation
![Markdown](http://i2.bvimg.com/595273/b1f2626b74184d50.png)
- 将/src/app/app.component.html中的导航部分移到/src/app/navigation/navigation.component.html
![Markdown](http://i1.bvimg.com/595273/3451b29074fccf5c.png)
- 使用我们的navigation组件
![Markdown](http://i1.bvimg.com/595273/ffc9728b2a415025.png)
从上图可以看见使用命令行创建组件，组件会被自动注册到根模块中，所以直接使用就可以了
直接在/src/app/app.component.html最上边加上
```
<app-navigation></app-navigation>
```
如果不出现意外的话，你看到的效果应该和2中效果一样，那为什么要这样做呢？方便维护，便于复用。在这个小项目你可能并不能看出他的好处，而且本项目将导航做成独立组件没有太大意义。

### 4. 做个路由
- 在app.module.ts中导入路由模块
```
import { RouterModule }   from '@angular/router';
```
- 配置我们的路由
现在我们的/src/app/module.ts应该是下边这个样子

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home',  component: HomeComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
  可以看到imports中做了路由配置，此时运行会出错，因为还没有Home组件
- 指定路由出口
将/src/app/app.component.html改为如下

```
<app-navigation></app-navigation>
<div class="container">
  <div class="col-sm-3">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h1 class="text-center">已有时长</h1>
      </div>
      <div class="panel-body">
        <h1 class="text-center">1 小时</h1>
      </div>
    </div>
  </div>
  <div class="col-sm-9">
    <router-outlet></router-outlet>
  </div>
</div>
```
可以发现一部分内容被替换为`<router-outlet></router-outlet>`这样，路由匹配的内容将会在这里显示。
- 创建Home组件
上边发现我们home找不到，现在创建这个组件，与上边创建navigation是类似的
直接运行

```
ng g component home
```
angular-cli会帮我们做好一切
运行效果如下
![Markdown](http://i1.bvimg.com/595273/48064a854af324b4.png)

下面修改我们的Home组件，更改他的html文件如下
```
<div class="jumbotron">
  <h1>任务追踪</h1>
  <p>
    <strong>
      <a>创建一个任务</a>
    </strong>
  </p>
</div>
```
效果如下
![Markdown](http://i2.bvimg.com/595273/97e36f3c06dfcacf.png)
发现和前面的效果基本一样了，不过不要着急，我们慢慢来！

### 5. 创建计划列表页

这其实还是创建一个组件，所以我们还是用命令行来搞！
- 第一步
```
ng g component plan-list
```

- 第二步 加到路由（修改app.module.ts）

```
{ path: 'planlist', component: PlanListComponent },

```
- 第三步 测试一下（访问：http://localhost:4200/planlist）
![Markdown](http://i1.bvimg.com/595273/079691336f9362df.png)
没毛病！

- 第四步 完善计划列表
  - 修改/src/app/plan-list/plan-list.component.html
```
  <div class="time-entries">
  <div class="list-group">
    <a class="list-group-item">
      <div class="row">
        <div class="col-sm-2 user-details">
          <img src="http://pic.dfhon.com/pictures/20100401/141048.jpg" class="avatar img-circle img-responsive" />
          <p class="text-center">
            <strong>
              大熊
            </strong>
          </p>
        </div>
        <div class="col-sm-2 text-center time-block">
          <h3 class="list-group-item-text total-time">
            <i class="glyphicon glyphicon-time"></i>
            1
          </h3>
          <p class="label label-primary text-center">
            <i class="glyphicon glyphicon-calendar"></i>
            2017-08-04
          </p>
        </div>
        <div class="col-sm-7 comment-section">
          一定要完成
        </div>
        <div class="col-sm-1">
          <button class="btn btn-xs btn-danger delete-button">
          X
          </button>
        </div>
      </div>
    </a>
    <a class="list-group-item">
      <div class="row">
        <div class="col-sm-2 user-details">
          <img src="http://pic.dfhon.com/pictures/20100401/141048.jpg" class="avatar img-circle img-responsive" />
          <p class="text-center">
            <strong>
              大熊
            </strong>
          </p>
        </div>
        <div class="col-sm-2 text-center time-block">
          <h3 class="list-group-item-text total-time">
            <i class="glyphicon glyphicon-time"></i>
            1
          </h3>
          <p class="label label-primary text-center">
            <i class="glyphicon glyphicon-calendar"></i>
            2017-08-04
          </p>
        </div>
        <div class="col-sm-7 comment-section">
          一定要完成
        </div>
        <div class="col-sm-1">
          <button class="btn btn-xs btn-danger delete-button">
          X
          </button>
        </div>
      </div>
    </a>
  </div>
</div>
  ```
  - 修改/src/app/plan-list/plan-list.component.css
  ```
  .avatar {
      height: 75px;
      margin: 0 auto;
      margin-top: 10px;
      margin-bottom: 10px;
}
.user-details {
      background-color: #f5f5f5;
      border-right: 1px solid #ddd;
      margin: -10px 0;
}
.time-block {
  	padding: 10px;
}
.comment-section {
  	padding: 20px;
}
  ```
  - 查看效果

  ![Markdown](http://i4.bvimg.com/595273/f01a27ae7da5974a.png)

### 5. 让导航可点
目前我们的导航还不能点击，下面解决这个问题，修改/src/app/navigation/navigation.component.html

```
<nav class="navbar navbar-default">
  <div class="container">
    <div class="navbar-header">
      <a class="navbar-brand" routerLink="/" routerLinkActive="active">
          <i class="glyphicon glyphicon-time"></i>
          计划板
        </a>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li routerLinkActive="active"><a routerLink="/home">首页</a></li>
        <li routerLinkActive="active"><a routerLink="/planlist" >计划列表</a></li>
      </ul>
    </div>
  </div>
</nav>
```
这样你就可以在首页和计划列表点来点去了。

### 6. 用假数据渲染planlist
- 修改/src/app/plan-list/plan-list.component.ts提供数据

```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css']
})
export class PlanListComponent implements OnInit {
  plans = [
    {
      name: '大熊',
      date: '2017-8-8',
      totalTime: 1,
      comment: '学习到天亮'
    },
    {
      name: '大熊',
      date: '2017-8-8',
      totalTime: 1,
      comment: '学习到天亮'
    },
    {
      name: '大熊',
      date: '2017-8-8',
      totalTime: 1,
      comment: '学习到天亮'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
```

- 使用ngFor渲染列表，修改/src/app/plan-list/plan-list.component.html

```
<div class="time-entries">
  <div class="list-group">
    <a class="list-group-item" *ngFor="let plan of plans">
      <div class="row">
        <div class="col-sm-2 user-details">
          <img src="http://pic.dfhon.com/pictures/20100401/141048.jpg" class="avatar img-circle img-responsive" />
          <p class="text-center">
            <strong>
             {{plan.name}}
            </strong>
          </p>
        </div>
        <div class="col-sm-2 text-center time-block">
          <h3 class="list-group-item-text total-time">
            <i class="glyphicon glyphicon-time"></i>
            {{plan.totalTime}}
          </h3>
          <p class="label label-primary text-center">
            <i class="glyphicon glyphicon-calendar"></i>
            {{plan.date}}
          </p>
        </div>
        <div class="col-sm-7 comment-section">
          {{plan.comment}}
        </div>
        <div class="col-sm-1">
          <button class="btn btn-xs btn-danger delete-button">
          X
          </button>
        </div>
      </div>
    </a>
  </div>
</div>
```

### 7. 用服务管理我们的数据
- 建立计划类
 - 在app下建立bean目录，作为我们存放基本数据类的地方，然后建立plan.js,如下所示
 ![Markdown](http://i2.bvimg.com/595273/80c6919ee684ca08.png)
- 在app下新建service目录，用于存放我们的服务，然后进入该目录运行ng g service plan创建服务，如下所示：
 ![Markdown](http://i2.bvimg.com/595273/083bfbf6a2dd821a.png)
- 修改刚刚创建的服务的ts文件如下：
 ```
 import { Injectable } from '@angular/core';
import { Plan } from '../bean/plan';
@Injectable()
export class PlanService {
  plans: Plan[];
  constructor() {
    this.plans = [
    {
      id: 11,
      name: '大熊',
      date: 100000,
      totalTime: 1,
      comment: '学习到天亮'
    },
    {
      id: 22,
      name: '大熊',
      date: 100000,
      totalTime: 1,
      comment: '学习到天亮'
    },
    {
      id: 33,
      name: '大熊',
      date: 100000,
      totalTime: 1,
      comment: '学习到天亮'
    }];
   }
   getPlans() {
    return this.plans;
   }
  addPlan(newplan: Plan) {
    this.plans.push(newplan);
  }
  deletePlan(id: number) {
    let index = 0;
    for (let i = 0; i < this.plans.length; i++) {
      if (this.plans[i].id === id) {
        index = i;
        break;
      }
    }
    this.plans.splice(index, 1);
  }
  getPlan(id: number) {
    for (let i = 0; i < this.plans.length; i++) {
      if (this.plans[i].id === id) {
        return this.plans[i];
      }
    }
  }
}
```
- 在app.module.ts中加入服务依赖
 import进创建的服务，并加入到providers中，如下：
 ```
 import { PlanService } from './service/plan.service';
 ```
 ```
 providers: [PlanService],
 ```
- 在plan-list中注入服务并使用

```
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

}
```

可以看到，我将原来写死在这个组件的plans去掉了，而是去调用了一个服务获取我所需要的数据。至此，你所看到的效果与原来的无异，但是我们的项目又向前买进了一大步。

### 8. 删除计划

下面看一下如何删除一个计划，这里主要用到的是事件的绑定。
- 首先定义删除事件处理函数。在/src/app/plan-list/plan-list.component.ts添加如下事件处理函数

```
  // 删除计划
  deletePlan (plan) {
    this.planService.deletePlan(plan.id);
    this.plans = this.planService.getPlans();
  }
```

- 在模板中绑定这个事件处理函数
![Markdown](http://i2.bvimg.com/595273/960f1448ffb315b1.png)
- 这样你可以点击叉叉删除计划了
![Markdown](http://i1.bvimg.com/595273/4acfd063a1263d5c.png)

### 9. 创建一个管道来格式化我们的日期
同样的数据在前端的显示可能要求不同，这时需要我们对数据进行一些格式化，管道这种东西是你的首选。
- 按如下操作创建初始化管道
![Markdown](http://i1.bvimg.com/595273/4938dfe76b932f8e.png)
观察文件变化和app.module的变化
![Markdown](http://i2.bvimg.com/595273/96e10023a10a3023.png)
- 修改我们的/home/yibingxiong/ng-plan/src/app/pipe/data-format.pipe.ts如下

```
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFormat'
})
export class DataFormatPipe implements PipeTransform {

  transform(value: number): String {
    const d = new Date();
    d.setTime(value);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    return (year + '-' + (month < 10 ? ('0' + month) : month) + '-' +
    (date < 10 ? ('0' + date) : date) + ' ' + (h < 10 ? ('0' + h) : h) +
    ':' + (m < 10 ? ('0' + m) : m) + ':' +
    (s < 10 ? ('0' + s) : s));
  }

}
````

- 使用我们的管道，如图所示
![Markdown](http://i1.bvimg.com/595273/d9e08cc2e984cf86.png)

### 10. 为我们的planservice添加一个计算总是长的方法
![Markdown](http://i2.bvimg.com/595273/68c9660d1d6905fe.png)
在app.component中使用
![Markdown](http://i2.bvimg.com/595273/cb638d40d7337c72.png)
![Markdown](http://i2.bvimg.com/595273/2a68dada5395ec10.png)
但是会法现一个问题，当删除计划时总时长没有响应变化，下面设法解决这个问题。

### 11. 用service做一个共享的数据状态
经过一番艰苦卓绝的寻找，我终于在https://scotch.io/tutorials/get-angular-1-features-in-angular-2#toc-global-communication-with-services 找到了一个比较简单的解决方法，虽然我也不是太理解这个方法，不过能用。下面将我做的修改的文件列出来供你参考。此问题的解决还可以用一个些数据状态库。
```
// /home/yibingxiong/ng-plan/src/app/service/plan.service.ts
import { Injectable } from '@angular/core';
import { Plan } from '../bean/plan';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class PlanService {
  plans: Plan[];
  totalTime = 0;
  totalTime$ = new BehaviorSubject<number>(this.totalTime);
  constructor() {
    this.plans = [
    {
      id: 11,
      name: '大熊',
      date: 100000,
      totalTime: 1,
      comment: '学习到天亮'
    },
    {
      id: 22,
      name: '大熊',
      date: 100000,
      totalTime: 1,
      comment: '学习到天亮'
    },
    {
      id: 33,
      name: '大熊',
      date: 100000,
      totalTime: 1,
      comment: '学习到天亮'
    }];
    this.totalTime = this.getTotalTime2();
   }
  getPlans() {
   return this.plans;
  }
  // 添加计划
  addPlan(newplan: Plan) {
    this.totalTime = this.getTotalTime2();
    this.updateTotalTimeSbj(this.totalTime);
    this.plans.push(newplan);
  }
  // 删除计划
  deletePlan(id: number) {
    let index = 0;
    for (let i = 0; i < this.plans.length; i++) {
      if (this.plans[i].id === id) {
        index = i;
        break;
      }
    }
    this.plans.splice(index, 1);
    this.totalTime = this.getTotalTime2();
    this.updateTotalTimeSbj(this.totalTime);
  }
  // 获得一个计划
  getPlan(id: number) {
    for (let i = 0; i < this.plans.length; i++) {
      if (this.plans[i].id === id) {
        return this.plans[i];
      }
    }
  }
  // 计算计划总时间
  getTotalTime2() {
    let t = 0;
    for (const p of this.plans) {
      t += p.totalTime;
    }
    return t;
  }
  get getTotalTime(): number {
    return this.totalTime;
  }
  private updateTotalTimeSbj(value) {
    this.totalTime$.next(value);
  }
}
```

```
// /home/yibingxiong/ng-plan/src/app/app.component.ts
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
```

```
// /home/yibingxiong/ng-plan/src/app/app.component.html
<app-navigation></app-navigation>
<div class="container">
  <div class="col-sm-3">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h1 class="text-center">已有时长</h1>
      </div>
      <div class="panel-body">
        <h1 class="text-center">{{planService.getTotalTime}} 小时</h1>
      </div>
    </div>
  </div>
  <div class="col-sm-9">
    <router-outlet></router-outlet>
  </div>
</div>
```

### 12. 添加计划
- 老规矩，先创建页面组件
![Markdown](http://i2.bvimg.com/595273/c4f20940989b6cad.png)
- 添加到路由
  - 在/home/yibingxiong/ng-plan/src/app/app.module.ts的路由添加
  ```
  { path: 'create', component: CreateComponent },
  ```
  - 修改/home/yibingxiong/ng-plan/src/app/home/home.component.html
  ```
  <a routerLink="/create">创建一个任务</a>
  ```
  
- 完善添加计划页面
修改/home/yibingxiong/ng-plan/src/app/create/create.component.html
```
<div class="form-horizontal">
  <div class="form-group">
    <div class="col-sm-6">
      <label>日期</label>
      <input
        type="date"
        class="form-control"
        placeholder="Date"
      />
    </div>
    <div class="col-sm-6">
      <label>时间</label>
      <input
        type="number"
        class="form-control"
        placeholder="Hours"
      />
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-12">
      <label>备注</label>
      <input
        type="text"
        class="form-control"
        placeholder="Comment"
      />
    </div>
  </div>
  <button class="btn btn-primary">保存</button>
  <a class="btn btn-danger">取消</a>
  <hr>
</div>
```

- 做添加计划事件处理
  - 创建事件处理函数
  ```
  <div class="form-horizontal">
  <div class="form-group">
    <div class="col-sm-6">
      <label>日期</label>
      <input
        type="date"
        class="form-control"
        placeholder="Date"
        [(ngModel)]="newplan.date"
      />
    </div>
    <div class="col-sm-6">
      <label>时间</label>
      <input
        type="number"
        class="form-control"
        placeholder="Hours"
        [(ngModel)]="newplan.totalTime"
      />
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-12">
      <label>备注</label>
      <input
        type="text"
        class="form-control"
        placeholder="Comment"
        [(ngModel)]="newplan.comment"
      />
    </div>
  </div>
  <button class="btn btn-primary" (click)="addPlan(newplan)">保存</button>
  <a class="btn btn-danger">取消</a>
  <hr>
</div>
```

 - 更新模板
 ```
 <div class="form-horizontal">
  <div class="form-group">
    <div class="col-sm-6">
      <label>日期</label>
      <input
        type="date"
        class="form-control"
        placeholder="Date"
        [(ngModel)]="newplan.date"
      />
    </div>
    <div class="col-sm-6">
      <label>时间</label>
      <input
        type="number"
        class="form-control"
        placeholder="Hours"
        [(ngModel)]="newplan.totalTime"
      />
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-12">
      <label>备注</label>
      <input
        type="text"
        class="form-control"
        placeholder="Comment"
        [(ngModel)]="newplan.comment"
      />
    </div>
  </div>
  <button class="btn btn-primary" (click)="addPlan(newplan)">保存</button>
  <a class="btn btn-danger">取消</a>
  <hr>
</div>
```

- 取消返回处理
添加location依赖
![Markdown](http://i4.bvimg.com/595273/3011b9c967a7be27.png)
在create组件注入并使用
![Markdown](http://i2.bvimg.com/595273/b5d6df72683539ad.png)
在模板添加事件
```
<a class="btn btn-danger" (click)="cancel()">取消</a>
```

### 13. 去掉假数据，并添加无数据支持
修改planService，移除假数据
![Markdown](http://i4.bvimg.com/595273/67f5a3aae7cfeaaf.png)
在planlist中加入无数据判断
![Markdown](http://i1.bvimg.com/595273/9a6481285afed1b6.png)

****

## 总结一下

 本文是我学习angular4两个晚上做的一个小Demo，我是一边做项目一边写的这个文档，所以按照我的文档操作一般可以顺利完成项目，但是难免有一些疏漏，请自行查找问题所在。
 本项目虽小，但是他将angular的一些和性要点都用到了。
 - 数据单向绑定
 - 数据双向绑定
 - 事件
 - 依赖注入
 - 组件
 - 服务
 - 管道
 - 路由
 - 模板指令
 - 命令行用法

本项目的结构仅供参考，你可以搭建更加清晰的项目结构。例如将页面组件都放到page目录，将一些碎片化的组件放到components目录，这都是可以的，你可以灵活运用。非常感谢你能如此耐性的看到这里，希望本文能对你有所帮助。
最后，要是你觉得这篇文章还不错，请在我的博客http://www.cnblogs.com/floor/ 点个关注，或者点个推荐。或者帮忙点一下star，github地址：https://github.com/yibingxiong/ng-plan