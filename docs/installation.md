---
id: installation
title: Installation
sidebar_label: Installation
---

## System requirements

| Package version | reCaptcha version | PHP version | Laravel version |
|-----------------|--------------------|-------------|-----------------|
| 3.x             | v3, v2 Invisible, v2 Checkbox | 7.1 or greater | 5.5 or greater |
| 2.x             | v2 Invisible, v2 Checkbox | 5.5.9, 7.0 or greater | 5.0 or greater |

Are you still using PHP 5.x or 7.0? Please go to <a href="/docs/2.0.4/installation">v2</a>

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