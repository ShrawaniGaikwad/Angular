import { Component } from '@angular/core';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-bug-info',
  standalone: true,
  imports: [TimepickerModule,BsDatepickerModule],
  templateUrl: './bug-info.component.html',
  styleUrl: './bug-info.component.css'
})
export class BugInfoComponent {

}
