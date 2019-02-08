---
id: version-3.2.0-installation
title: Installation
sidebar_label: Installation
original_id: installation
---

## System requirements

| Package version | PHP version | Laravel version |
|-----------------|-------------|-----------------|
| 3.x             | 7.1 or greater | 5.5 or greater |

Are you still using PHP 5.x or 7.0? Please go to V2

## Composer

You can install the package via composer:
```sh
$ composer require biscolab/laravel-recaptcha:^3.0
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