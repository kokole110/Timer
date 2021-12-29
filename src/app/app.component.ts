import { Component, OnInit, OnDestroy } from '@angular/core';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public displayTimer!: string;
  public isRunning: boolean = false;
  public startText: string = 'Start';
  public time!: number;
  subscription!: Subscription;
  firstClick!: number;
  lastClick: number = 0;

  ngOnInit(): void {
    this.time = 0;
  }

  toggleTimer() {
    this.isRunning = !this.isRunning;
    this.stopwatch();
  }

//start/stop the timer; on Stop set timer to 0
  stopwatch() {
    if (this.isRunning) {
      this.startText = 'Stop';
      this.subscription = timer(0, 1000).subscribe(data=> {
        this.time ++
        this.getDisplayTimer(this.time);
      })     
    } else {
      this.subscription.unsubscribe();
      this.time = 0;
      this.getDisplayTimer(this.time);
      this.startText = 'Start';
    }
  }

//pause the timer on custom doubleClick if the interval 
//between two clicks is less than 300ms
  wait(){ 
    if (!this.subscription) {
      return;
    }
    this.firstClick = Date.now();

    if (this.firstClick - this.lastClick < 300) {
      this.subscription.unsubscribe();
      this.startText = 'Start';
      this.isRunning = false;
    } else {
      this.lastClick = this.firstClick;
    }
  }

//reset timer to 0 and start it again
  reset() {
    if (!this.subscription) {
      return;
    }
    if (!this.isRunning) {
      this.isRunning = true;
    }
    this.subscription.unsubscribe();
    this.time = -1;
    this.stopwatch();
  }

  getDisplayTimer(time: number) {
    let hours = '' + Math.floor(time / 3600);
    let minutes = '' + Math.floor(time % 3600 / 60);
    let seconds = '' + Math.floor(time % 3600 % 60);

    if (Number(hours) < 10) {
      hours = '0' + hours;
    } else {
      hours = '' + hours;
    }
    if (Number(minutes) < 10) {
      minutes = '0' + minutes;
    } else {
      minutes = '' + minutes;
    }
    if (Number(seconds) < 10) {
      seconds = '0' + seconds;
    } else {
      seconds = '' + seconds;
    }

    this.displayTimer = hours + ':' + minutes + ':' + seconds;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
