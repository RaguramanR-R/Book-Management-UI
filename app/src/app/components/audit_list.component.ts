// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { NeutrinosOAuthClientService } from 'neutrinos-oauth-client'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-audit_list',
  templateUrl: './audit_list.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class audit_listComponent {
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
      this.sd_RTkm0wVTlApwloHp(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    Object.assign(this.page, {
      auditData: undefined,
      operation: '',
      startTime: undefined,
      endTime: undefined,
    });

    //append_listeners
  }

  sd_RTkm0wVTlApwloHp(bh) {
    try {
      bh = this.sd_3yoTIKlom74tgZ8y(bh);
      //appendnew_next_sd_RTkm0wVTlApwloHp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RTkm0wVTlApwloHp');
    }
  }

  sd_ehFOpsl8P3oUiw08(
    auditData: any = undefined,
    operation: any = undefined,
    startTime: any = undefined,
    endTime: any = undefined,
    ...others
  ) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { auditData, operation, startTime, endTime };
      bh.local = {};
      bh = this.sd_7SfBt9ZcbBE9fDRF(bh);
      //appendnew_next_sd_ehFOpsl8P3oUiw08
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ehFOpsl8P3oUiw08');
    }
  }

  auditSearch(
    operation: any = undefined,
    startTime: any = undefined,
    endTime: any = undefined,
    auditData: any = undefined,
    ...others
  ) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { operation, startTime, endTime, auditData };
      bh.local = {};
      bh = this.filterScript(bh);
      //appendnew_next_auditSearch
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QeC8GrAReBSK0eAc');
    }
  }

  searchclear(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Q1RNomLyXDIyP5Xy(bh);
      //appendnew_next_searchclear
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1f1OJeOvQkfbIdoK');
    }
  }
  //appendnew_flow_audit_listComponent_start

  sd_3yoTIKlom74tgZ8y(bh) {
    try {
      this.page.scroll = 0;
      bh = this.sd_sHVLuaEoJ8JayclK(bh);
      //appendnew_next_sd_3yoTIKlom74tgZ8y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3yoTIKlom74tgZ8y');
    }
  }

  sd_sHVLuaEoJ8JayclK(bh) {
    try {
      this.page.noc = this.__page_injector__.get(NeutrinosOAuthClientService);
      bh = this.sd_wo9lGbiSdy87JJvB(bh);
      //appendnew_next_sd_sHVLuaEoJ8JayclK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sHVLuaEoJ8JayclK');
    }
  }

  async sd_wo9lGbiSdy87JJvB(bh) {
    try {
      const page = this.page;
      if (!page.noc.isLoggedIn) {
        await page.noc.login('book_list');
      }
      bh = this.sd_Xn9VHGwzhklGGm6y(bh);
      //appendnew_next_sd_wo9lGbiSdy87JJvB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wo9lGbiSdy87JJvB');
    }
  }

  sd_Xn9VHGwzhklGGm6y(bh) {
    try {
      const page = this.page;
      let params = [];

      if (bh.input.startTime) {
        params.push('startTime=' + encodeURIComponent(bh.input.startTime));
      }

      if (bh.input.endTime) {
        params.push('endTime=' + encodeURIComponent(bh.input.endTime));
      }

      if (bh.input.operation) {
        params.push('operation=' + encodeURIComponent(bh.input.operation));
      }

      bh.local.url = 'http://localhost:8081/api/audits';

      if (params.length > 0) {
        bh.local.url += '?' + params.join('&');
      }

      console.log('Audit URL:', bh.local.url);
      bh = this.fetchAuditlist(bh);
      //appendnew_next_sd_Xn9VHGwzhklGGm6y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Xn9VHGwzhklGGm6y');
    }
  }

  async fetchAuditlist(bh) {
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
      bh.local.auditResponse = await this.sdService.nHttpRequest(
        requestOptions
      );
      bh = this.sd_5sVqBXN320yyU1P5(bh);
      //appendnew_next_fetchAuditlist
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_apI5iensKtH0Ha9g');
    }
  }

  sd_5sVqBXN320yyU1P5(bh) {
    try {
      const page = this.page;
      function convertToLocalTime(utcDate) {
        const date = new Date(utcDate);

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
      }

      bh.local.result = bh.local.auditResponse.map((item) => ({
        ...item,
        timestamp: convertToLocalTime(item.timestamp),
      }));
      bh = this.sd_0jFilkDZREyjjNSb(bh);
      //appendnew_next_sd_5sVqBXN320yyU1P5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5sVqBXN320yyU1P5');
    }
  }

  sd_0jFilkDZREyjjNSb(bh) {
    try {
      this.page.auditData = bh.local.result;
      //appendnew_next_sd_0jFilkDZREyjjNSb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0jFilkDZREyjjNSb');
    }
  }

  sd_7SfBt9ZcbBE9fDRF(bh) {
    try {
      const page = this.page;
      let operation = (page.operation || '').trim().toUpperCase();

      function formatDate(date: Date) {
        const d = new Date(date);

        const yyyy = d.getFullYear();
        const MM = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        const HH = String(d.getHours()).padStart(2, '0');
        const mm = String(d.getMinutes()).padStart(2, '0');
        const ss = String(d.getSeconds()).padStart(2, '0');

        return `${yyyy}-${MM}-${dd}T${HH}:${mm}:${ss}`;
      }
      let url = 'http://localhost:8081/api/report/pdf';

      let params = [];

      if (page.startTime) {
        params.push(
          `startTime=${encodeURIComponent(formatDate(page.startTime))}`
        );
      }

      if (page.endTime) {
        params.push(`endTime=${encodeURIComponent(formatDate(page.endTime))}`);
      }

      if (operation) {
        params.push(`operation=${encodeURIComponent(operation)}`);
      }

      if (params.length > 0) {
        url += '?' + params.join('&');
      }

      bh.local.url = url;

      console.log('FILTER URL:', url);
      bh = this.pdfdownload(bh);
      //appendnew_next_sd_7SfBt9ZcbBE9fDRF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7SfBt9ZcbBE9fDRF');
    }
  }

  async pdfdownload(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'blob',
        headers: {},
        params: {},
        body: undefined,
        withCredentials: true,
      };
      this.page.PdfResponse = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_kMZIBmCMLwwxkZXd(bh);
      //appendnew_next_pdfdownload
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1sNwupheRI8XTPyA');
    }
  }

  sd_kMZIBmCMLwwxkZXd(bh) {
    try {
      const page = this.page;
      console.log('Pdfresponse =', page.PdfResponse);
      console.log('page =', page);
      const url = window.URL.createObjectURL(page.PdfResponse);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Audit_Report.pdf';

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      window.URL.revokeObjectURL(url);
      //appendnew_next_sd_kMZIBmCMLwwxkZXd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kMZIBmCMLwwxkZXd');
    }
  }

  filterScript(bh) {
    try {
      const page = this.page;
      let operation = (bh.input.operation || '').trim().toUpperCase();
      console.log('bh.input.startTime', bh.input.startTime);
      console.log('bh.input.endTime', bh.input.endTime);

      console.log('operation', operation);
      function formatDate(date: Date) {
        const d = new Date(date);

        const yyyy = d.getFullYear();
        const MM = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        const HH = String(d.getHours()).padStart(2, '0');
        const mm = String(d.getMinutes()).padStart(2, '0');
        const ss = String(d.getSeconds()).padStart(2, '0');

        return `${yyyy}-${MM}-${dd}T${HH}:${mm}:${ss}`;
      }
      let url = 'http://localhost:8081/api/audits';

      let params = [];

      if (bh.input.startTime) {
        params.push(
          `startTime=${encodeURIComponent(formatDate(bh.input.startTime))}`
        );
      }

      if (bh.input.endTime) {
        params.push(
          `endTime=${encodeURIComponent(formatDate(bh.input.endTime))}`
        );
      }

      if (operation) {
        params.push(`operation=${encodeURIComponent(operation)}`);
      }

      if (params.length > 0) {
        url += '?' + params.join('&');
      }

      bh.local.url = url;

      console.log('FILTER URL:', url);
      bh = this.sd_AWlm7unFQ0mwHVa0(bh);
      //appendnew_next_filterScript
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KKvvktw1j2baj1W9');
    }
  }

  async sd_AWlm7unFQ0mwHVa0(bh) {
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
      bh.local.searchResponse = await this.sdService.nHttpRequest(
        requestOptions
      );
      bh = this.sd_QWghNxVUBQyr4VoP(bh);
      //appendnew_next_sd_AWlm7unFQ0mwHVa0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AWlm7unFQ0mwHVa0');
    }
  }

  sd_QWghNxVUBQyr4VoP(bh) {
    try {
      const page = this.page;
      function convertToLocalTime(utcDate) {
        const date = new Date(utcDate);

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
      }

      bh.local.result = bh.local.searchResponse.map((item) => ({
        ...item,
        timestamp: convertToLocalTime(item.timestamp),
      }));
      bh = this.pageVariableAfterFilter(bh);
      //appendnew_next_sd_QWghNxVUBQyr4VoP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QWghNxVUBQyr4VoP');
    }
  }

  pageVariableAfterFilter(bh) {
    try {
      this.page.auditData = bh.local.result;
      //appendnew_next_pageVariableAfterFilter
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hcW85k4th5hDnupu');
    }
  }

  sd_Q1RNomLyXDIyP5Xy(bh) {
    try {
      const page = this.page;
      page.operation = '';
      page.startTime = null;
      page.endTime = null;
      bh = this.sd_nEk9FXDd0HceLbrV(bh);
      //appendnew_next_sd_Q1RNomLyXDIyP5Xy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Q1RNomLyXDIyP5Xy');
    }
  }

  sd_nEk9FXDd0HceLbrV(bh) {
    try {
      let outputVariables = this.auditSearch(
        undefined,
        undefined,
        undefined,
        undefined
      );

      bh = this.sd_TjujWklxZn74iFS1(bh);
      //appendnew_next_sd_nEk9FXDd0HceLbrV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nEk9FXDd0HceLbrV');
    }
  }

  sd_TjujWklxZn74iFS1(bh) {
    try {
      this.page.auditData = bh.local.searchResponse;
      //appendnew_next_sd_TjujWklxZn74iFS1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TjujWklxZn74iFS1');
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
  //appendnew_flow_audit_listComponent_Catch
}
