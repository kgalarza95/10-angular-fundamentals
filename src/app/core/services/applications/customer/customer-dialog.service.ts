import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Customer } from '../../../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerDialogService {

  private customerSource = new BehaviorSubject<Customer | null>(null);
  customer$ = this.customerSource.asObservable();

  private isActiveSource = new BehaviorSubject<boolean>(false);
  isActive$ = this.isActiveSource.asObservable();

  private typeOperation = new BehaviorSubject<string | null>(null);
  typeOperation$ = this.typeOperation.asObservable();

  private refreshTableSubject = new Subject<void>();
  refreshTable$ = this.refreshTableSubject.asObservable();


  sendCustomer(customer: Customer | null) {
    this.customerSource.next(customer);
  }

  sendIsActive(isActive: boolean) {
    this.isActiveSource.next(isActive);
  }

  sndTypeOperation(typeOperation: string) {
    this.typeOperation.next(typeOperation);
  }

  emitRefreshTable() {
    this.refreshTableSubject.next();
  }
}
