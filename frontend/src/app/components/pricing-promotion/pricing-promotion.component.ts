import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Clipboard } from "@angular/cdk/clipboard";
import { CourseServiceService } from 'src/app/services/course-service.service';

@Component({
  selector: 'app-pricing-promotion',
  templateUrl: './pricing-promotion.component.html',
  styleUrls: ['./pricing-promotion.component.scss']
})
export class PricingPromotionComponent implements OnInit {

  currencys = [
    { value: 'USD' },
    { value: 'Myanmar' }
  ];

  pricingsUSD = [
    { value: '19.99$' },
    { value: '29.99$' },
    { value: '39.99$' },
    { value: '49.99$' },
    { value: '59.99$' },
    { value: '69.99$' },
    { value: '79.99$' },
    { value: '89.99$' },
    { value: '99.99$' },
    { value: '109.99$' },
    { value: '119.99$' },
    { value: '129.99$' },
    { value: '139.99$' },
    { value: '149.99$' },
    { value: '159.99$' },
    { value: '169.99$' },
    { value: '179.99$' },
    { value: '189.99$' },
    { value: '199.99$' },
  ];

  pricingsMyan = [
    { value: '41,979MMK' },
    { value: '62,979MMK' },
    { value: '83,979MMK' },
    { value: '104,979MMK' },
    { value: '125,979MMK' },
    { value: '146,979MMK' },
    { value: '167,979MMK' },
    { value: '188,979MMK' },
    { value: '209,979MMK' },
    { value: '230,979MMK' },
    { value: '251,979MMK' },
    { value: '272,979MMK' },
    { value: '293,979MMK' },
    { value: '314,979MMK' },
    { value: '335,979MMK' },
    { value: '356,979MMK' },
    { value: '377,979MMK' },
    { value: '398,979MMK' },
    { value: '419,979MMK' },
  ];
  @Output() onInitEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    public fb: FormBuilder,
    public clipboard: Clipboard,
    public courseSvc: CourseServiceService
  ) { }

  ngOnInit(): void {
    const data = {
      childName: 'pricingForm',
      form: this.courseSvc.pricingPromotionForm
    }
    this.onInitEvent.emit(data);
  }

  get f() {
    return this.courseSvc.pricingPromotionForm.controls;
  }

  onCopy() {
    const promotion = this.courseSvc.pricingPromotionForm.controls['promotion'].value;
    console.log(promotion)
    this.clipboard.copy(promotion);
  }

}
