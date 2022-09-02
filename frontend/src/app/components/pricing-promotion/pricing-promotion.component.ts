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
    { value: 'EUR' },
    { value: 'AUD' },
    { value: 'BRL' },
    { value: 'CAD' },
    { value: 'CLP' },
    { value: 'EGP' },
    { value: 'INR' },
  ];

  pricings = [
    { value: 'English(US)' },
    { value: 'Italiano' },
    { value: 'Behasa Indonesia' },
    { value: 'Nederlands' },
    { value: 'Suomi' },
    { value: 'Telugu' },
    { value: 'Khmer' },
  ];
  @Output() onInitEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    public fb: FormBuilder,
    public clipboard: Clipboard,
    public courseSvc: CourseServiceService
  ) { }

  get pricingPromotion(): FormArray {
    return this.courseSvc.pricingPromotionForm.get("pricingPromotion") as FormArray
  }

  newpricingPromotion(): FormGroup {
    return this.fb.group({
      currency: ['USD'],
      pricing: ['',Validators.required],
      promotion: ['']
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    const formArr = this.courseSvc.pricingPromotionForm.get("pricingPromotion") as FormArray;
    const from = event.previousIndex;
    const to = event.currentIndex;
    this.moveItemInFormArray(formArr, from, to)
  }
  moveItemInFormArray(formArray: FormArray, fromIndex: number, toIndex: number): void {
    const from = this.clamp(fromIndex, formArray.length - 1);
    const to = this.clamp(toIndex, formArray.length - 1);

    if (from === to) {
      return;
    }

    const previous = formArray.at(from);
    const current = formArray.at(to);
    formArray.setControl(to, previous);
    formArray.setControl(from, current);
  }

  clamp(value: number, max: number): number {
    return Math.max(0, Math.min(max, value));
  }

  ngOnInit(): void {
    const data = {
      childName: 'pricingForm',
      form: this.courseSvc.pricingPromotionForm
    }
    this.onInitEvent.emit(data);
  }

  add() {
    this.pricingPromotion.push(this.newpricingPromotion());
  }

  remove(i: number) {
    this.pricingPromotion.removeAt(i);
  }

  pricingIndex(index:any){
    let pricing = this.courseSvc.pricingPromotionForm.get('pricingPromotion') as FormArray;
    const formgroup = pricing.controls[index] as FormGroup;
    return formgroup;
  }
  onCopy() {
    const promotion = this.courseSvc.pricingPromotionForm.value.pricingPromotion.map((x:any) => x.promotion);
    this.clipboard.copy(promotion);
  }

}
