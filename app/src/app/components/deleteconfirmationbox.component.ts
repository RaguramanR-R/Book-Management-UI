// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { MatDialogRef } from '@angular/material/dialog'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-deleteconfirmationbox',
  templateUrl: './deleteconfirmationbox.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class deleteconfirmationboxComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_EgEItM2DJJXGpPmD(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_EgEItM2DJJXGpPmD(bh) {
    try {
      bh = this.sd_Wp1AGdxQsEwhrJie(bh);
      //appendnew_next_sd_EgEItM2DJJXGpPmD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EgEItM2DJJXGpPmD');
    }
  }

  yes(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_nC6p94ZaN83ZHOGY(bh);
      //appendnew_next_yes
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KIH3te5GisVwM5j9');
    }
  }

  no(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_4dV2dJdLqA2Kvr92(bh);
      //appendnew_next_no
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_65EAvlogW01YEBsN');
    }
  }
  //appendnew_flow_deleteconfirmationboxComponent_start

  sd_Wp1AGdxQsEwhrJie(bh) {
    try {
      //appendnew_next_sd_Wp1AGdxQsEwhrJie
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Wp1AGdxQsEwhrJie');
    }
  }

  sd_nC6p94ZaN83ZHOGY(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close('true');

      //appendnew_next_sd_nC6p94ZaN83ZHOGY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nC6p94ZaN83ZHOGY');
    }
  }

  sd_4dV2dJdLqA2Kvr92(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close('false');

      //appendnew_next_sd_4dV2dJdLqA2Kvr92
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4dV2dJdLqA2Kvr92');
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
  //appendnew_flow_deleteconfirmationboxComponent_Catch
}
