// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { NeutrinosOAuthClientService } from 'neutrinos-oauth-client'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-addbook',
  templateUrl: './addbook.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class addbookComponent {
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
      this.sd_WKjwBlzopeEdXvhi(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    Object.assign(this.page, { tableData: undefined });

    //append_listeners
  }

  sd_WKjwBlzopeEdXvhi(bh) {
    try {
      bh = this.sd_fNN0eg7GQt6iaWKj(bh);
      //appendnew_next_sd_WKjwBlzopeEdXvhi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WKjwBlzopeEdXvhi');
    }
  }

  sd_0FDevCOAiNf1JPi8(isbn: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { isbn };
      bh.local = {};
      bh = this.sd_pTkdzSKihcDqMGHw(bh);
      //appendnew_next_sd_0FDevCOAiNf1JPi8
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0FDevCOAiNf1JPi8');
    }
  }

  sd_nJkjDEbrjvHkcMEB(isbn: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { isbn };
      bh.local = {};
      bh = this.sd_0z7InJbY6yFojOra(bh);
      //appendnew_next_sd_nJkjDEbrjvHkcMEB
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nJkjDEbrjvHkcMEB');
    }
  }

  onChangeisbn(isbn: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { isbn };
      bh.local = {};
      bh = this.sd_tFQhdRb22K5SDi1H(bh);
      //appendnew_next_onChangeisbn
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_p8J08Bv9OyU0ThGA');
    }
  }
  //appendnew_flow_addbookComponent_start

  sd_fNN0eg7GQt6iaWKj(bh) {
    try {
      this.page.noc = this.__page_injector__.get(NeutrinosOAuthClientService);
      bh = this.sd_GW2qVmDqqJ6QlpnI(bh);
      //appendnew_next_sd_fNN0eg7GQt6iaWKj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fNN0eg7GQt6iaWKj');
    }
  }

  async sd_GW2qVmDqqJ6QlpnI(bh) {
    try {
      const page = this.page;
      if (!page.noc.isLoggedIn) {
        await page.noc.login('book_list');
      }
      bh = this.sd_LU8lWiU9xOSfplUl(bh);
      //appendnew_next_sd_GW2qVmDqqJ6QlpnI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GW2qVmDqqJ6QlpnI');
    }
  }

  sd_LU8lWiU9xOSfplUl(bh) {
    try {
      this.page.isbn = undefined;
      //appendnew_next_sd_LU8lWiU9xOSfplUl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LU8lWiU9xOSfplUl');
    }
  }

  sd_pTkdzSKihcDqMGHw(bh) {
    try {
      const page = this.page;
      bh.input.isbn = page.isbn;
      bh.local.url = 'http://localhost:8081/api/book/' + bh.input.isbn;
      bh = this.openbookcall(bh);
      //appendnew_next_sd_pTkdzSKihcDqMGHw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pTkdzSKihcDqMGHw');
    }
  }

  async openbookcall(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
        withCredentials: true,
      };
      bh.local.apiResponse = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_NJLxHgJ4di95pS1D(bh);
      //appendnew_next_openbookcall
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_s4WibxS7wj4qjLoS');
    }
  }

  sd_NJLxHgJ4di95pS1D(bh) {
    try {
      const page = this.page;
      bh.local.result = bh.local.apiResponse;

      console.log('bh.local.result', bh.local.result);

      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_sd_NJLxHgJ4di95pS1D
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NJLxHgJ4di95pS1D');
    }
  }

  sd_E9QbOlnVduPNV5MO_1(bh) {
    try {
      this.page.tableData = bh.local.result;
      this.page.isShow = 'true';
      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ji2sUNeHzcz1TBtC');
    }
  }

  sd_0z7InJbY6yFojOra(bh) {
    try {
      const page = this.page;
      bh.local.req = {
        isbn: page.isbn,
      };
      bh = this.sd_8PtmGVqvzE2y7yl8(bh);
      //appendnew_next_sd_0z7InJbY6yFojOra
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0z7InJbY6yFojOra');
    }
  }

  async sd_8PtmGVqvzE2y7yl8(bh) {
    try {
      let requestOptions = {
        url: 'http://localhost:8081/api/bookadd',
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.local.req,
        withCredentials: true,
      };
      bh.local.bookData = await this.sdService.nHttpRequest(requestOptions);
      bh = this.success(bh);
      //appendnew_next_sd_8PtmGVqvzE2y7yl8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8PtmGVqvzE2y7yl8');
    }
  }

  success(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open(bh.local.bookData.message, 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_w8jXRcZu71lzqDmK(bh);
      //appendnew_next_success
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OjweaPNVGQzk2pmv');
    }
  }

  async sd_w8jXRcZu71lzqDmK(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/book_list');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_w8jXRcZu71lzqDmK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_w8jXRcZu71lzqDmK');
    }
  }

  sd_tFQhdRb22K5SDi1H(bh) {
    try {
      this.page.tableData = [];
      this.page.isShow = 'false';
      bh = this.sd_qdA9Pyb9f0w2dPz4(bh);
      //appendnew_next_sd_tFQhdRb22K5SDi1H
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tFQhdRb22K5SDi1H');
    }
  }

  sd_qdA9Pyb9f0w2dPz4(bh) {
    try {
      const page = this.page;
      console.log('tableData', page.tableData);
      console.log('isbn', page.isbn);
      console.log('isbn1', bh.input.isbn);
      console.log('isHidden', page.isHidden);
      //appendnew_next_sd_qdA9Pyb9f0w2dPz4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qdA9Pyb9f0w2dPz4');
    }
  }

  sd_vKYuOljbZvVbIK9h(bh) {
    try {
      const page = this.page;
      console.log('bh.error', bh.error);
      console.log('bh.error.error', bh.error.error);
      console.log('bh.error.error.error', bh.error.error.error);
      bh = this.sd_sNhGRaJwoMC7xSAE(bh);
      //appendnew_next_sd_vKYuOljbZvVbIK9h
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vKYuOljbZvVbIK9h');
    }
  }

  sd_sNhGRaJwoMC7xSAE(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open(bh.error.error.error, 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      //appendnew_next_sd_sNhGRaJwoMC7xSAE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sNhGRaJwoMC7xSAE');
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
    if (
      false ||
      this.sd_U8ZHadvcpxhm8Tv6(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_U8ZHadvcpxhm8Tv6(bh) {
    const nodes = ['sd_s4WibxS7wj4qjLoS', 'sd_8PtmGVqvzE2y7yl8'];
    if (nodes.includes(bh.errorSource)) {
      bh = this.sd_vKYuOljbZvVbIK9h(bh);
      //appendnew_next_sd_U8ZHadvcpxhm8Tv6
      return true;
    }
    return false;
  }
  //appendnew_flow_addbookComponent_Catch
}
