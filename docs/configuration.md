---
id: configuration
title: Configuration
sidebar_label: Configuration
---

## Publish package
Create `config/recaptcha.php` configuration file using:
```su
php artisan vendor:publish --provider="Biscolab\ReCaptcha\ReCaptchaServiceProvider"
```

## Add your API Keys
Open `.env` file and set `RECAPTCHA_SITE_KEY` and `RECAPTCHA_SECRET_KEY`:
```php
# in your .env file
RECAPTCHA_SITE_KEY=YOUR_API_SITE_KEY
RECAPTCHA_SECRET_KEY=YOUR_API_SECRET_KEY
```

Open `config/recaptcha.php` configuration file and set `version`:
```php
return [
    'api_site_key'      => env('RECAPTCHA_SITE_KEY', ''),
    'api_secret_key'    => env('RECAPTCHA_SECRET_KEY', ''),
    'version'           => 'v2' // supported: v2|invisible 
    'skip_ip'           => [] // array of IP addresses - String: dotted quad format e.g.: 127.0.0.1
];
```
For more invermation about Site Key and Secret Key please visit [Google reCAPTCHA developer documentation](https://developers.google.com/recaptcha/docs/start)

Get more info about reCAPTCHA version at https://developers.google.com/recaptcha/docs/versions.

**skip_ip** is a list of IP addresses that, if recognized, disable the reCAPTCHA validation (return always true).

## Have you updated?
If you are migrating from an older version add `skip_ip` array in `recaptcha.php` configuration file.

## Customize error message
Before starting please add the validation message to `resources/lang/[LANG]/validation.php` file
```php
return [
    ...
    'recaptcha' => 'Hey!!! :attribute is wrong!',
];
```