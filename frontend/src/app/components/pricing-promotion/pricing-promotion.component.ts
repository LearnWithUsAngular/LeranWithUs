import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Clipboard } from "@angular/cdk/clipboard";
import { CourseServiceService } from 'src/app/services/course-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pricing-promotion',
  templateUrl: './pricing-promotion.component.html',
  styleUrls: ['./pricing-promotion.component.scss']
})
export class PricingPromotionComponent implements OnInit {

  currencys = [
    { value: 'USD' },
    { value: 'AUD' },
    { value: 'MMK' },
    { value: 'SGD' }
  ];

  pricings = [
    { value: 'Free' },
    { value: '$19.99' },
    { value: '$24.99' },
    { value: '$34.99' },
  ];

  @Output() onInitEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    public fb: FormBuilder,
    public clipboard: Clipboard,
    public courseSvc: CourseServiceService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    const data = {
      childName: 'pricingForm',
      form: this.courseSvc.pricingPromotionForm
    }
    this.onInitEvent.emit(data);

    let paramId = this.route.snapshot.paramMap.get("id");
    if (this.router.url.indexOf('/edit-course/') !== -1 && paramId !== undefined) {

      this.courseSvc.findCourse(paramId).subscribe((dist) => {

        this.courseSvc.pricingPromotionForm.controls['currency'].setValue(dist.data.coursePrice.currency)
        this.courseSvc.pricingPromotionForm.controls['price'].setValue(dist.data.coursePrice.price)
        this.courseSvc.pricingPromotionForm.controls['promocode'].setValue(dist.data.coursePrice.promocode)
      })
    }
  }

  get f() {
    return this.courseSvc.pricingPromotionForm.controls;
  }

  onCopy() {
    const promotion = this.courseSvc.pricingPromotionForm.controls['promotion'].value;
    this.clipboard.copy(promotion);
  }

}
