import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {
  // Contador como observable para data binding
  private clickCount = new BehaviorSubject<number>(0);
  count$ = this.clickCount.asObservable();

  increment() {
    this.clickCount.next(this.clickCount.value + 1);
  }
}
