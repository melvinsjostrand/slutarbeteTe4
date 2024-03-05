import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-userpanel',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,],
  templateUrl: './userpanel.component.html',
  styleUrls: ['../../../styles.scss']
})
export class UserpanelComponent {

}
