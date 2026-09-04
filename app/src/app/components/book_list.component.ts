// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { deleteconfirmationboxComponent } from 'app/components/deleteconfirmationbox.component'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { NeutrinosOAuthClientService } from 'neutrinos-oauth-client'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-book_list',
  templateUrl: './book_list.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class book_listComponent {
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
      this.bookList(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {
      books: undefined,
      totalBooks: undefined,
      currentPage: undefined,
      pageSize: undefined,
      totalPages: undefined,
      offset: undefined,
    });

    //append_listeners
  }

  bookListWithPagination(event: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event };
      bh.local = {};
      bh = this.sd_48PgwQDAFz7vXESa(bh);
      //appendnew_next_bookListWithPagination
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mcMmoISQ4hh5bnTS');
    }
  }

  bookDelete(bookID: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { bookID };
      bh.local = {};
      bh = this.sd_6htZtuKspRdfgr2S(bh);
      //appendnew_next_bookDelete
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yaeCMCAAgPZQav0y');
    }
  }
  bookList(bh) {
    try {
      bh = this.sd_5izn3R8IZ4ZvsoTc(bh);
      //appendnew_next_bookList
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_317gR6mb0XLGNxe1');
    }
  }

  edit(id: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { id };
      bh.local = {};
      bh = this.sd_c9hmmkv7ShaQzYRp(bh);
      //appendnew_next_edit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TIkyyjTSDLzqnyaY');
    }
  }

  logout(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_fOQuU78Y20owXCbs(bh);
      //appendnew_next_logout
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cor3vjUxz8sVuMoC');
    }
  }
  //appendnew_flow_book_listComponent_start

  sd_48PgwQDAFz7vXESa(bh) {
    try {
      const page = this.page;
      console.log('Paginator Event', bh.input.event);

      page.currentPage = bh.input?.event?.pageIndex || 0;
      page.pageSize = bh.input?.event?.pageSize || 2;
      page.event = bh.input.event;
      page.offset = page.currentPage * page.pageSize;
      console.log(
        'page.currentPage',
        page.currentPage,
        'page.pageSize',
        page.pageSize
      );
      bh.local.url =
        'http://localhost:8081/api/books?limit=' +
        page.pageSize +
        '&offset=' +
        page.offset;
      bh = this.fetchBooks1(bh);
      //appendnew_next_sd_48PgwQDAFz7vXESa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_48PgwQDAFz7vXESa');
    }
  }

  async fetchBooks1(bh) {
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
      this.page.booksResponse = await this.sdService.nHttpRequest(
        requestOptions
      );
      bh = this.sd_N0azeYZREAC7eQM3(bh);
      //appendnew_next_fetchBooks1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ExqX63ARZCDPOSZc');
    }
  }

  sd_N0azeYZREAC7eQM3(bh) {
    try {
      const page = this.page;
      page.books = page.booksResponse.items || [];
      page.totalBooks = page.booksResponse.total || 0;
      page.totalPages = Math.ceil(page.totalBooks / page.pageSize);
      console.log('1111111111111111', page.books);
      console.log('22222222222222222222', page.totalBooks);
      console.log('333333333333333', page.totalPages);
      bh = this.sd_FrDn7SPOrTMuVTt3(bh);
      //appendnew_next_sd_N0azeYZREAC7eQM3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_N0azeYZREAC7eQM3');
    }
  }

  sd_FrDn7SPOrTMuVTt3(bh) {
    try {
      this.page.books = this.page.booksResponse.items;
      this.page.totalBooks = this.page.booksResponse.total;
      this.page.totalPages = this.page.totalPages;
      this.page.currentPage = this.page.currentPage;
      this.page.tableData = this.page.booksResponse.items;
      //appendnew_next_sd_FrDn7SPOrTMuVTt3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FrDn7SPOrTMuVTt3');
    }
  }

  sd_6htZtuKspRdfgr2S(bh) {
    try {
      const deleteconfirmationboxDialog = this.__page_injector__.get(MatDialog);
      const deleteconfirmationboxDialogRef = deleteconfirmationboxDialog.open(
        deleteconfirmationboxComponent,
        { hasBackdrop: true }
      );
      deleteconfirmationboxDialogRef.afterClosed().subscribe((event) => {
        bh.local.isConfirmed = event;
        this.sd_t03mhnUwgPKATu74(bh);

        //appendnew_next_sd_6htZtuKspRdfgr2S;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6htZtuKspRdfgr2S');
    }
  }

  sd_t03mhnUwgPKATu74(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.local.isConfirmed,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_40VK8QazVz6yPKqp(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.local.isConfirmed,
          'false',
          undefined,
          undefined
        )
      ) {
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_t03mhnUwgPKATu74');
    }
  }

  sd_40VK8QazVz6yPKqp(bh) {
    try {
      const page = this.page;
      console.log('Book ID:', bh.input.bookID);
      bh.local.url = 'http://localhost:8081/api/books/' + bh.input.bookID;

      bh = this.bookdelete(bh);
      //appendnew_next_sd_40VK8QazVz6yPKqp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_40VK8QazVz6yPKqp');
    }
  }

  async bookdelete(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'delete',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
        withCredentials: true,
      };
      this.page.DeleteResult = await this.sdService.nHttpRequest(
        requestOptions
      );
      bh = this.sd_nIIMYQYknOAUCiFx(bh);
      //appendnew_next_bookdelete
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bpgOvigzSo9pX0pw');
    }
  }

  sd_nIIMYQYknOAUCiFx(bh) {
    try {
      let outputVariables = this.bookListWithPagination(this.page.event);

      bh = this.sd_98TXZQjLorsL43ri(bh);
      //appendnew_next_sd_nIIMYQYknOAUCiFx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nIIMYQYknOAUCiFx');
    }
  }

  sd_98TXZQjLorsL43ri(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Book Successfully Deleted', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      this.sd_4jCUfvKoi297WgZU(bh);
      //appendnew_next_sd_98TXZQjLorsL43ri
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_98TXZQjLorsL43ri');
    }
  }

  sd_4jCUfvKoi297WgZU(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh);
      //appendnew_next_sd_4jCUfvKoi297WgZU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4jCUfvKoi297WgZU');
    }
  }

  sd_5izn3R8IZ4ZvsoTc(bh) {
    try {
      this.page.noc = this.__page_injector__.get(NeutrinosOAuthClientService);
      bh = this.sd_WynB2m6Zi6rHgguc(bh);
      //appendnew_next_sd_5izn3R8IZ4ZvsoTc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5izn3R8IZ4ZvsoTc');
    }
  }

  async sd_WynB2m6Zi6rHgguc(bh) {
    try {
      const page = this.page;
      console.log('Use Dependency loaded');

      console.log('isLoggedIn =', page.noc.isLoggedIn);

      console.log('page.noc.userInfo', page.noc.userInfo);
      if (!page.noc.isLoggedIn) {
        await page.noc.login('book_list');
      }
      bh = this.sd_b8nXqA2eZo2piRgy(bh);
      //appendnew_next_sd_WynB2m6Zi6rHgguc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WynB2m6Zi6rHgguc');
    }
  }

  sd_b8nXqA2eZo2piRgy(bh) {
    try {
      const page = this.page;
      page.currentPage = bh.input.pageIndex || 0;
      page.pageSize = bh.input.pageSize || 2;
      page.offset = page.currentPage * page.pageSize;
      bh.local.url =
        'http://localhost:8081/api/books?limit=' +
        page.pageSize +
        '&offset=' +
        page.offset;
      bh = this.fetchBooks(bh);
      //appendnew_next_sd_b8nXqA2eZo2piRgy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_b8nXqA2eZo2piRgy');
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
      this.page.booksResponse = await this.sdService.nHttpRequest(
        requestOptions
      );
      bh = this.sd_IYP7lStZFocX4a3E(bh);
      //appendnew_next_fetchBooks
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ryo6dC6exjfVNMWZ');
    }
  }

  sd_IYP7lStZFocX4a3E(bh) {
    try {
      const page = this.page;
      page.books = page.booksResponse.items || [];
      page.totalBooks = page.booksResponse.total || 0;
      page.totalPages = Math.ceil(page.totalBooks / page.pageSize);
      console.log('1111111111111111', page.books);
      console.log('22222222222222222222', page.totalBooks);
      console.log('333333333333333', page.totalPages);
      bh = this.sd_i3UOyzMyLH0NThWC(bh);
      //appendnew_next_sd_IYP7lStZFocX4a3E
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IYP7lStZFocX4a3E');
    }
  }

  sd_i3UOyzMyLH0NThWC(bh) {
    try {
      this.page.books = this.page.booksResponse.items;
      this.page.totalBooks = this.page.booksResponse.total;
      this.page.totalPages = this.page.totalPages;
      this.page.currentPage = this.page.currentPage;
      this.page.tableData = this.page.booksResponse.items;
      //appendnew_next_sd_i3UOyzMyLH0NThWC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_i3UOyzMyLH0NThWC');
    }
  }

  sd_c9hmmkv7ShaQzYRp(bh) {
    try {
      const page = this.page;
      console.log('pageInput', bh.pageInput);
      console.log('id111111', bh.input.id);

      bh.local.id = bh.input.id;
      bh = this.sd_tfFqwrZSiAFO0GLf(bh);
      //appendnew_next_sd_c9hmmkv7ShaQzYRp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_c9hmmkv7ShaQzYRp');
    }
  }

  async sd_tfFqwrZSiAFO0GLf(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/edit_book/:id');
      bh.input.id = await this.__page_injector__
        .get(Router)
        .navigate([
          this.sdService.formatPathWithParams(path, { id: bh.input.id }),
        ]);
      //appendnew_next_sd_tfFqwrZSiAFO0GLf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tfFqwrZSiAFO0GLf');
    }
  }

  async sd_fOQuU78Y20owXCbs(bh) {
    try {
      const page = this.page;
      console.log('111111111111111');
      await page.noc.logout();
      bh = this.auditlog(bh);
      //appendnew_next_sd_fOQuU78Y20owXCbs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fOQuU78Y20owXCbs');
    }
  }

  async auditlog(bh) {
    try {
      let requestOptions = {
        url: 'http://localhost:8081/api/logout',
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
        withCredentials: true,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_auditlog
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_K6dX1UC0oOOM94WB');
    }
  }

  sd_lr6s2mYpnHtGGQAG(bh) {
    try {
      const page = this.page;
      console.log('bh.error', bh.error);
      console.log('bh.error.error', bh.error.error);
      console.log('bh.error.error.error', bh.error.error.error);
      bh = this.sd_htDC4KaLKfWUFQM0(bh);
      //appendnew_next_sd_lr6s2mYpnHtGGQAG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lr6s2mYpnHtGGQAG');
    }
  }

  sd_htDC4KaLKfWUFQM0(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open(bh.error.error.error, 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      //appendnew_next_sd_htDC4KaLKfWUFQM0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_htDC4KaLKfWUFQM0');
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
      this.sd_XFW5cFn7VCoiWLuk(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_XFW5cFn7VCoiWLuk(bh) {
    const nodes = ['sd_yaeCMCAAgPZQav0y'];
    if (nodes.includes(bh.errorSource)) {
      bh = this.sd_lr6s2mYpnHtGGQAG(bh);
      //appendnew_next_sd_XFW5cFn7VCoiWLuk
      return true;
    }
    return false;
  }
  //appendnew_flow_book_listComponent_Catch
}
