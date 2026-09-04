// _neu_generated_code__dont_modify_directly_
import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-deleteconfirmationboxComponent
import { deleteconfirmationboxComponent } from '../components/deleteconfirmationbox.component';
//CORE_REFERENCE_IMPORT-dialogboxComponent
import { dialogboxComponent } from '../components/dialogbox.component';
//CORE_REFERENCE_IMPORT-edit_bookComponent
import { edit_bookComponent } from '../components/edit_book.component';
//CORE_REFERENCE_IMPORT-audit_listComponent
import { audit_listComponent } from '../components/audit_list.component';
//CORE_REFERENCE_IMPORT-addbookComponent
import { addbookComponent } from '../components/addbook.component';
//CORE_REFERENCE_IMPORT-book_listComponent
import { book_listComponent } from '../components/book_list.component';
//CORE_REFERENCE_IMPORT-stepperComponent
import { stepperComponent } from '../components/stepper.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-deleteconfirmationboxComponent
  deleteconfirmationboxComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dialogboxComponent
  dialogboxComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-edit_bookComponent
  edit_bookComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-audit_listComponent
  audit_listComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-addbookComponent
  addbookComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-book_listComponent
  book_listComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-stepperComponent
  stepperComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  { path: 'home', component: stepperComponent },
  { path: 'book_list', component: book_listComponent },
  { path: 'addbook', component: addbookComponent },
  { path: 'stepper', component: stepperComponent },
  { path: 'audit_list', component: audit_listComponent },
  { path: 'edit_book/:id', component: edit_bookComponent },
  { path: '', redirectTo: 'book_list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
