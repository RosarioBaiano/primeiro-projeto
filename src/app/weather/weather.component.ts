import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',  
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {

  constructor(private weatherservice: WeatherService) {
      
  }

  builder = inject(FormBuilder);

  locationsForm = this.builder.group({
    city: ['', Validators.required]
  });

  weatherData: any;
  locations: any;
  selectedLocation: any;

  obterClima(location: any) {
    this.selectedLocation = location;

    this.weatherservice.getWeather(location.lat, location.lon).subscribe(data => {
      this.weatherData = data;
      console.log(data);
    })
  }

  obterRegions() {
    
    let city = String (this.locationsForm.get('city')?.value)
      
    this.weatherservice.getLation(city).subscribe(data => {
      this.locations = data;

      console.log(data);
    });
  } 
}
