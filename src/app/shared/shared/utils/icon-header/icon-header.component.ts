import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-header',
  templateUrl: './icon-header.component.html',
  styleUrls: ['./icon-header.component.scss']
})
export class IconHeaderComponent {
@Input() title: string;
@Input() icon: string;
}
