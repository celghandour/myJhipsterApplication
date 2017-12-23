import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { MyJhipsterApplicationSharedModule, UserRouteAccessService } from './shared';
import { MyJhipsterApplicationAppRoutingModule} from './app-routing.module';
import { MyJhipsterApplicationHomeModule } from './home/home.module';
import { MyJhipsterApplicationAdminModule } from './admin/admin.module';
import { MyJhipsterApplicationAccountModule } from './account/account.module';
import { MyJhipsterApplicationEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        MyJhipsterApplicationAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        MyJhipsterApplicationSharedModule,
        MyJhipsterApplicationHomeModule,
        MyJhipsterApplicationAdminModule,
        MyJhipsterApplicationAccountModule,
        MyJhipsterApplicationEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class MyJhipsterApplicationAppModule {}
