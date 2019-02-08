---
id: version-2.0.4-installation
title: Installation
sidebar_label: Installation
original_id: installation
---

## System requirements

PHP 5.5.9 or greater
Laravel 5.0 or grater

## Composer

You can install the package via composer:
```sh
composer require biscolab/laravel-recaptcha:^2.0
```
`ReCaptchaServiceProvider` must be registered in `config/app.php`:
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