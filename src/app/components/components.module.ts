import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { ProposalComponent } from './proposal/proposal.component';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectListItemComponent } from './project-list-item/project-list-item.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { CalloutComponent } from './callout/callout.component';
import { AnimatedBgComponent } from './animated-bg/animated-bg.component';
import { AnimatedBgRightComponent } from './animated-bg-right/animated-bg-right.component';


@NgModule({
    declarations: [HeaderComponent, FooterComponent, BannerComponent, ProposalComponent, AboutComponent, SkillComponent, ProjectListItemComponent, TestimonialComponent, CalloutComponent, AnimatedBgComponent, AnimatedBgRightComponent],
    imports: [
        CommonModule,
        RouterModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        MatCardModule,
        MatChipsModule
    ],
    exports: [
        RouterModule, 
        MatToolbarModule, 
        MatButtonModule, 
        MatIconModule, 
        MatChipsModule,
        HeaderComponent, 
        FooterComponent,
        BannerComponent,
        ProposalComponent,
        AboutComponent,
        SkillComponent,
        ProjectListItemComponent,
        TestimonialComponent,
        CalloutComponent,
        AnimatedBgComponent, 
        AnimatedBgRightComponent
    ]
})
export class ComponentsModule { }
