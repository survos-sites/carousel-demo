# Carousel Demo

This simply repo shows the problem when installing the stimulus carousel and bootstrap.

It uses Symfony's new AssetMapper, so there is no build step.

```bash
git clone git@github.com:survos-sites/carousel-demo.git && cd arousel-demo
composer install
bin/console importmap:install
symfony server:start -d
symfony open:local
```

The arrow don't respond to navigating through the slide.

But if you remove the 2 lines that load bootstrap in assets/app.js, it does work.
