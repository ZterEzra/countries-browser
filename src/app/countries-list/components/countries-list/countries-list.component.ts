import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CountriesService } from '../../../shared/services/countries.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountriesListComponent {
  constructor(public countriesService: CountriesService) {}
}
