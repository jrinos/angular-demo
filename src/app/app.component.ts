import { Component } from '@angular/core';
import { Account } from './account/account.model';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls:['app/app.component.css'],
})

export class AppComponent  {

  private _accounts:Array<Account> = [
    { id: 100, title:"Banco De Oro", description:"Makati Branch", balance:500000 },
    new Account(101,"Philippine National Bank","Paranaque",300000)
  ];

  private _nextId = 102;

  private createAcc(title:any,desc:any,bal:any){
    this._accounts.push( new Account(
                                    this._nextId,
                                    title.value ,
                                    desc.value,
                                    bal.value
                                  )
                        );
    this._nextId++;

    this._selected.push(false)

    title.value = "";
    desc.value = "";
    bal.value = 0;
  }

  private removeAcc(index:number) {
    this._accounts.splice(index,1);
    this._selected.splice(index,1); // delete index of the selected status.
  }

  private _selected:Array<boolean> = [false,false]; // deselect the first two accounts.

  private select(index:number){
    this._selected[index] = !this._selected[index];
  }

}
