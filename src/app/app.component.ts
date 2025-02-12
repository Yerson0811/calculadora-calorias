import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalorieCalculatorComponent } from "./components/calorie-calculator/calorie-calculator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalorieCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora-calorias';
}
