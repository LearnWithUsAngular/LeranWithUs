import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { PricingPromotionComponent } from './pricing-promotion.component';

describe('PricingPromotionComponent', () => {
  let component: PricingPromotionComponent;
  let fixture: ComponentFixture<PricingPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule,
        MatSelectModule,
        BrowserAnimationsModule
      ],
      declarations: [ PricingPromotionComponent ]
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
