import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RadioListItemsComponent } from '../../../../dialogs/radio-list-items/radio-list-items.component';
import { CompanyItem } from '../../../../models/companylist'
import { CompanyListService } from  '../../../../services/data/companylist.service'

@Component({
  selector: 'onboarding-partner-merchant',
  templateUrl: './onboarding-partner-merchant.component.html',
  styleUrls: ['./onboarding-partner-merchant.component.scss']
})

export class OnboardingPartnerMerchantComponent implements OnInit {
  dialogName: string;

  merchantFlag = false;
  midsFlag = false;

  listFields: CompanyItem[];
  dataArray = [];

  constructor(
    public dialog: MatDialog,
    private companylistService: CompanyListService
  ) { 

    this.companylistService.list().subscribe(
      (data:CompanyItem[]) => {
        this.listFields = data as CompanyItem[];
        for(let item in this.listFields)            
        {
          this.dataArray.push({name:this.listFields[item]['viewValue']});
        }
      });
    

  }

  ngOnInit() {   }

  
  public openDialog(dialog): void {
    this.dialogName = 'Merchants';
    
    const dialogRef = this.dialog.open(RadioListItemsComponent, {        
      data: {
        dataArray : this.dataArray,
        dialogName: this.dialogName
      },
      autoFocus: false
    });
    
    dialogRef.afterClosed().subscribe(result => { });
  }

 
  acviveMerchantFunction = item => {};

  
  removeMerchantItem = item => {};

  removeItem = item => (item.included = false);
}
