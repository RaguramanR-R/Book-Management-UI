// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { ActivatedRoute, Router } from '@angular/router'; //_splitter_
import { dialogboxComponent } from 'app/components/dialogbox.component'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { NeutrinosOAuthClientService } from 'neutrinos-oauth-client'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-edit_book',
  templateUrl: './edit_book.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class edit_bookComponent {
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
      this.sd_d1AWZETE8Q8Z8urM(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    Object.assign(this.page, { id: undefined });

    //append_listeners
  }

  sd_d1AWZETE8Q8Z8urM(bh) {
    try {
      bh = this.sd_bmyIZfoChz3wliAF(bh);
      //appendnew_next_sd_d1AWZETE8Q8Z8urM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_d1AWZETE8Q8Z8urM');
    }
  }

  update(isbn: any = undefined, id: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { isbn, id };
      bh.local = {};
      bh = this.sd_YNWo7sMgeLg5nuh3(bh);
      //appendnew_next_update
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kZbQmVgq77OGpQOD');
    }
  }
  //appendnew_flow_edit_bookComponent_start

  sd_bmyIZfoChz3wliAF(bh) {
    try {
      this.page.noc = this.__page_injector__.get(NeutrinosOAuthClientService);
      bh = this.sd_gC0dNSwa8WexoVvq(bh);
      //appendnew_next_sd_bmyIZfoChz3wliAF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bmyIZfoChz3wliAF');
    }
  }

  async sd_gC0dNSwa8WexoVvq(bh) {
    try {
      const page = this.page;
      if (!page.noc.isLoggedIn) {
        await page.noc.login('book_list');
      }
      bh = this.sd_5xiWVsJQVHyy7A6y(bh);
      //appendnew_next_sd_gC0dNSwa8WexoVvq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gC0dNSwa8WexoVvq');
    }
  }

  sd_5xiWVsJQVHyy7A6y(bh) {
    try {
      const route = this.__page_injector__.get(ActivatedRoute);
      this.page.id = route.snapshot.paramMap.get('id');
      bh = this.sd_yGpEAahBAr46AKBn(bh);
      //appendnew_next_sd_5xiWVsJQVHyy7A6y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5xiWVsJQVHyy7A6y');
    }
  }

  sd_yGpEAahBAr46AKBn(bh) {
    try {
      const page = this.page;
      bh.local.url =
        bh.system.environment.properties.ssdURL + 'books/' + page.id;

      bh = this.fetchBooks(bh);
      //appendnew_next_sd_yGpEAahBAr46AKBn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yGpEAahBAr46AKBn');
    }
  }

  async fetchBooks(bh) {
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
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_Qcsq6t842TcPCHu6(bh);
      //appendnew_next_fetchBooks
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2cBylVYkachA3izv');
    }
  }

  sd_Qcsq6t842TcPCHu6(bh) {
    try {
      this.page.tableData = this.page.result;
      //appendnew_next_sd_Qcsq6t842TcPCHu6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Qcsq6t842TcPCHu6');
    }
  }

  sd_YNWo7sMgeLg5nuh3(bh) {
    try {
      const route = this.__page_injector__.get(ActivatedRoute);
      this.page.id = route.snapshot.paramMap.get('id');
      bh = this.sd_BC9lgMlv1R6fPhUy(bh);
      //appendnew_next_sd_YNWo7sMgeLg5nuh3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YNWo7sMgeLg5nuh3');
    }
  }

  sd_BC9lgMlv1R6fPhUy(bh) {
    try {
      const page = this.page;
      console.log('Page ISBN:', page.isbn);
      console.log('page.local.id:', page.id);

      bh.local.url =
        bh.system.environment.properties.ssdURL + 'books/' + page.id;
      bh.local.req = {
        isbn: page.isbn,
      };
      bh = this.updateApi(bh);
      //appendnew_next_sd_BC9lgMlv1R6fPhUy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BC9lgMlv1R6fPhUy');
    }
  }

  async updateApi(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.local.req,
        withCredentials: true,
      };
      bh.local.apiResponse = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_96mSUcU5RGt0y5d2(bh);
      //appendnew_next_updateApi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Co0eLWfdIwMVVBmW');
    }
  }

  sd_96mSUcU5RGt0y5d2(bh) {
    try {
      const dialogboxDialog = this.__page_injector__.get(MatDialog);
      const dialogboxDialogRef = dialogboxDialog.open(dialogboxComponent, {
        data: bh.local.apiResponse.book,
      });
      dialogboxDialogRef.afterClosed().subscribe((event) => {
        this.page = event;
        this.sd_Bn0Ii0UZKxUfolDP(bh);

        //appendnew_next_sd_96mSUcU5RGt0y5d2;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_96mSUcU5RGt0y5d2');
    }
  }

  async sd_Bn0Ii0UZKxUfolDP(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/book_list');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_Bn0Ii0UZKxUfolDP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Bn0Ii0UZKxUfolDP');
    }
  }

  sd_Oa9itLvksAjDyvjw(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open(bh.error.error.error, 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      //appendnew_next_sd_Oa9itLvksAjDyvjw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Oa9itLvksAjDyvjw');
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
      this.sd_jZ21t3awhPoBYM5u(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_jZ21t3awhPoBYM5u(bh) {
    const nodes = ['sd_Co0eLWfdIwMVVBmW'];
    if (nodes.includes(bh.errorSource)) {
      bh = this.sd_Oa9itLvksAjDyvjw(bh);
      //appendnew_next_sd_jZ21t3awhPoBYM5u
      return true;
    }
    return false;
  }
  //appendnew_flow_edit_bookComponent_Catch
}
