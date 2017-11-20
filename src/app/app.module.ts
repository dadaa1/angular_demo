import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
// import {LoggleService} from './loggle.service'
import { AppComponent } from './app.component';
import { TwoComponent } from './two/two.component';
import { ApplightDirective } from './applight.directive';

@NgModule({
  declarations: [// 声明本模块中拥有的视图类。Angular 有三种视图类：组件、指令和管道。
    AppComponent, TwoComponent, ApplightDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],//服务的创建者，并加入到全局服务列表中，可用于应用任何部分
  bootstrap: [AppComponent]//指定应用的主视图
})
export class AppModule { }
