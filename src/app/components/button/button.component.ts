import { EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  //annotation Input for adding styles to a tag
  @Input() text: string;
  @Input() color: string;

  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }
  ngOnInit(): void {}
}
