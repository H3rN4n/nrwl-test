import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Cat } from './cats.model';

@Injectable()
export class CatsService extends EntityCollectionServiceBase<Cat> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Cats', serviceElementsFactory);
  }
}
