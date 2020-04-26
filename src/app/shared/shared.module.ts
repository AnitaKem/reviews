import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

import * as fromComponents from './components';
import * as fromContainers from './containers';
import * as fromPipes from './pipes';
import * as fromServices from './services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers,
    ...fromPipes.pipes,
  ],
  providers: [
    ...fromServices.services,
  ],
  exports: [
    ...fromComponents.components,
    ...fromContainers.containers,
    ...fromPipes.pipes,
  ]
})
export class SharedModule {}
