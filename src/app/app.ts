import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GamingSpecialistComponent } from './gaming-specialist/gaming-specialist';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GamingSpecialistComponent, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = signal('angular-app');
}
