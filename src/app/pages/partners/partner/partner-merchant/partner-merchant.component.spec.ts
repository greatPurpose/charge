import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerMerchantComponent } from './partner-merchant.component';

describe('PartnerMerchantComponent', () => {
  let component: PartnerMerchantComponent;
  let fixture: ComponentFixture<PartnerMerchantComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [PartnerMerchantComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
