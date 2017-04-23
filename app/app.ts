import { settings } from './config/config';
import { InversifyContainer } from './config/inversify-container';

export let api = InversifyContainer({
  name: settings.name
});

api.listen(settings.port)