import { Resolver, PartialResolver } from 'ngrx-store-simplr';

import { AppState } from '../models';

// with Resolver, the return value must be along the TimestampState interface correctly.
export type Resolver = Resolver<AppState, 'timestamp'>;

// with PartialResolver, the return value can be along the TimestampState interface partialy.
export type PartialResolver = PartialResolver<AppState, 'timestamp'>;
