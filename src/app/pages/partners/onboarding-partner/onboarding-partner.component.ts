import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ISubscription, Subscription } from 'rxjs/Subscription';
import { IndicatorsService } from '../../../services/indicators.service';
import { CompanyItem } from '../../../models/companylist'
import { RadioListItemsComponent } from '../../../dialogs/radio-list-items/radio-list-items.component';
import { CompanyListService } from   '../../../services/data/companylist.service'
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-onboarding-partner',
  templateUrl: './onboarding-partner.component.html',
  styleUrls: ['./onboarding-partner.component.scss'],
  providers: [IndicatorsService]
})
export class OnboardingPartnerComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  activateButton = true;
  activePage = false;

  listFields: CompanyItem[];
  dataArray = [];
  dialogName: string;

  partnerInnerMenu = [
    {
      path: 'details',
      name: 'Details',
      indicator: ''
    },
    {
      path: 'clients',
      name: 'Clients',
      indicator: ''
    },
    {
      path: 'reports',
      name: 'Reports',
      indicator: ''
    },
    {
      path: 'merchant',
      name: 'Merchant',
      indicator: '',
      event:'OnboardingPartnerMerchantComponent'
    }
  ];
  pageSettings = ['Inactive', 'Option 2', 'Option 3'];

  indicators = {
    detailsIndicator: '',
    clientsIndicator: '',
    reportsIndicator: '',
    merchantIndicator: ''
  };

  constructor(private indicatorsService: IndicatorsService, public dialog: MatDialog, private companylistService: CompanyListService) {
    indicatorsService.indicator$.subscribe(indicator => {
      this.indicators = indicator;
      this.partnerInnerMenu[0].indicator = this.indicators.detailsIndicator;
      this.partnerInnerMenu[1].indicator = this.indicators.clientsIndicator;
      this.partnerInnerMenu[2].indicator = this.indicators.reportsIndicator;
      this.partnerInnerMenu[3].indicator = this.indicators.merchantIndicator;
      this.activateButton = true;
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  addNewMenuItem(val) {
    console.log(val);
    this.partnerInnerMenu.push(  {
      path:'',
      name: val,
      indicator: ''
    });
  }

  openMerchantDialog(cname){

    this.companylistService.list().subscribe(
      (data:CompanyItem[]) => {
        this.listFields = data as CompanyItem[];
        for(let item in this.listFields)            
        {
          this.dataArray.push({name:this.listFields[item]['viewValue']});
        }
      });

    
    if (cname == 'OnboardingPartnerMerchantComponent'){   
     // this.indicatorsService.setClientsIndicator('true');
      this.dialogName = 'Merchants';
      
      const dialogRef = this.dialog.open(RadioListItemsComponent, {        
        data: {
          dataArray : this.dataArray,
          dialogName: this.dialogName
        },
        autoFocus: false
      });
      
      dialogRef.afterClosed().subscribe(result => {
        this.addNewMenuItem(result);
        });
    }
  }

  titleVal = val => console.log(val);

  inactive = val => {
    this.activePage = val;
  };

  selectPageSettings = val => {
    switch (val) {
      case 'Inactive':
        this.activePage = false;
        break;
      default:
        break;
    }
  };
}
