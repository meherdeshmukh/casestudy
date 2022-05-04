import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ControlCenterService {
  triggeredChanges = new Subject();
  receivedReq = new BehaviorSubject<{ val: number | null; type: string }>({
    val: 1000,
    type: '',
  });
  notifyExpired = new Subject();
  countsObj = new BehaviorSubject<{ start: number; pause: number }>({
    start: 0,
    pause: 0,
  });
  trackArray = new Subject<string[]>();
  constructor() {}
}
