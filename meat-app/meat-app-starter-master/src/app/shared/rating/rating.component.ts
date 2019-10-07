import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  @Input() maxValue: number = 5
  @Output() onRate = new EventEmitter<number>()

  rates: number[] = []

  currentValue: number = 0
  previousValue: number = null

  constructor() { }

  ngOnInit() {
    for (let i: number = 1; i <= this.maxValue; i++) {
      this.rates.push(i)
    }

    this.currentValue = 0
    this.previousValue = null
  }

  setValue(value: number) {
    this.currentValue = value
    this.previousValue = null

    this.onRate.emit(this.currentValue)
  }

  setTemporaryValue(value: number) {
    if (this.previousValue == null) {
      this.previousValue = this.currentValue
    }

    this.currentValue = value
  }

  clearTemporaryValue() {
    if (this.previousValue != null) {
      this.currentValue = this.previousValue
    }

    this.previousValue = null
  }
}
