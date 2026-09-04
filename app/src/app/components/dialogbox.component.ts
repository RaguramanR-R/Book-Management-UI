// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-dialogbox',
  templateUrl: './dialogbox.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class dialogboxComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_PWzLdl0tIk5OAVwL(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_PWzLdl0tIk5OAVwL(bh) {
    try {
      bh = this.sd_LqVZDpWkKYPr1wi4(bh);
      //appendnew_next_sd_PWzLdl0tIk5OAVwL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PWzLdl0tIk5OAVwL');
    }
  }

  close(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.closeDialog(bh);
      //appendnew_next_close
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_G9GVwT2ovHpUeCZO');
    }
  }
  //appendnew_flow_dialogboxComponent_start

  sd_LqVZDpWkKYPr1wi4(bh) {
    try {
      this.page.bookDetails = this.__page_injector__.get(MAT_DIALOG_DATA);

      bh = this.sd_Nw6eACIIhLWYY3qA(bh);
      //appendnew_next_sd_LqVZDpWkKYPr1wi4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LqVZDpWkKYPr1wi4');
    }
  }

  sd_Nw6eACIIhLWYY3qA(bh) {
    try {
      //appendnew_next_sd_Nw6eACIIhLWYY3qA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Nw6eACIIhLWYY3qA');
    }
  }

  closeDialog(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close('true');

      //appendnew_next_closeDialog
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ye24WsXbnyf0TJYU');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_dialogboxComponent_Catch
}
