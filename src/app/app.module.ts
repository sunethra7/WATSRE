import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
// import {Component, ElementRef, EventEmitter} from 'angular2/angular2';

import { Home } from './home';
import { Instruction } from './instruction';
import { Instruction2 } from './instruction2';
import { Registers } from './registers';
import { FindingPatterns } from './findingPatterns';
import { DebuggerMode } from './debuggerMode';
import { Help } from './helpComponent';
import { ChartModule } from 'angular2-highcharts';
/* export function highchartsFactory() {
  return highcharts;
} */
@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot([
    {
      path: 'home',
      component: Home
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'instruction',
      component: Instruction
    },
    {
      path: 'instruction2',
      component: Instruction2
    },
    {
      path: 'registers',
      component: Registers
    },
    {
      path: 'patterns',
      component: FindingPatterns
    },
    {
      path: 'debuggerMode',
      component: DebuggerMode
    },
    {
      path: 'help',
      component: Help
    }
  ]), ChartModule.forRoot(require('highcharts'))],
  providers: [
  ],
  declarations: [AppComponent, Home, Instruction, Instruction2, Registers, FindingPatterns, DebuggerMode, Help],
  bootstrap: [AppComponent]
})
export class AppModule { }
