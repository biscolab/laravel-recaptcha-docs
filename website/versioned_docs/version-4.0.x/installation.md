---
id: version-4.0.x-installation
title: Installation
sidebar_label: Installation
original_id: installation
---

## System requirements

| Package version | reCaptcha version | PHP version | Laravel version | Docs |
|-----------------|--------------------|-------------|-----------------|-----------------|
| 4.x             | v3, v2 Invisible, v2 Checkbox | 7.1 or greater | 5.5 or greater, 6 | <a href="/docs/installation">Latest</a> |
| 3.x             | v3, v2 Invisible, v2 Checkbox | 7.1 or greater | 5.5 or greater, 6 (*) | <a href="/docs/3.6.1/installation">v3.6.1</a> |
| 2.x             | v2 Invisible, v2 Checkbox | 5.5.9, 7.0 or greater | 5.0 or greater | <a href="/docs/2.0.4/installation">v2.0.4</a> |

> (*) Version 3.6.1 is Laravel 6 ready

> If you are migrating from either v2.x or v3.x to the latest package version, please, take a look about migration to v4.x in [What's new in v4.x](whats-new.md) before any changes

## Composer

You can install the package via composer:
```sh
$ composer require biscolab/laravel-recaptcha
```
Laravel 5.5 (or greater) uses package auto-discovery, so doesn't require you to manually add the Service Provider, but if you don't use auto-discovery `ReCaptchaServiceProvider` must be registered in `config/app.php`:
```php
'providers' => [
    ...
    Biscolab\ReCaptcha\ReCaptchaServiceProvider::class,
];
```
You can use the facade for shorter code. Add `ReCaptcha` to your aliases:
```php
'aliases' => [
    ...
    'ReCaptcha' => Biscolab\ReCaptcha\Facades\ReCaptcha::class,
];
```