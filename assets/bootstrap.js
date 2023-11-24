import { startStimulusApp } from '@symfony/stimulus-bundle';
import Carousel from 'stimulus-carousel'

const app = startStimulusApp();
// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);
app.debug = true;
app.register('carousel', Carousel)
