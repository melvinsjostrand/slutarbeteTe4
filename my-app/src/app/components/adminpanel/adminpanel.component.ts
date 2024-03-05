import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-adminpanel',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,],
  templateUrl: './adminpanel.component.html',
  styleUrls: ["../../../styles.scss"],
})
export class AdminpanelComponent {

}
