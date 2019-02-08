---
id: version-3.2.0-configuration
title: Configuration
sidebar_label: Configuration
original_id: configuration
---

## Publish package
Create `config/recaptcha.php` configuration file using the following artisan command:
```sh
$ php artisan vendor:publish --provider="Biscolab\ReCaptcha\ReCaptchaServiceProvider"
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
    'version'           => 'v2', // supported: v3|v2|invisible 
    'skip_ip'           => [], // array of IP addresses - String: dotted quad format e.g.: 127.0.0.1
    'default_validation_route' => env('RECAPTCHA_DEFAULT_VALIDATION_ROUTE', 'biscolab-recaptcha/validate'),
    'default_token_parameter_name' => env('RECAPTCHA_DEFAULT_TOKEN_PARAMETER_NAME', 'token')
];
```

* `api_site_key` and `api_secret_key are reCAPTCHA keys you have to create in order to perform Google API authentication. For more information about Site Key and Secret Key please visit [Google reCAPTCHA developer documentation](https://developers.google.com/recaptcha/docs/start)

* `version` indicates the reCAPTCHA version (supported: v3|v2|invisible). Get more info about reCAPTCHA version at <a href="https://developers.google.com/recaptcha/docs/versions" target="_blank">https://developers.google.com/recaptcha/docs/versions</a>.

* `skip_ip` is a list of IP addresses that, if recognized, disable the reCAPTCHA validation (return always true).

* `default_validation_route` is the route called via javascript built-in validation script (v3 only)

* `default_token_parameter_name` is the name of "token" GET parameter sent to `default_validation_route` to be validated (v3 only)

**!!! IMPORTANT !!!** Every time you change some configuration run the folloeing shell command:
```sh
$ php artisan config:cache
```

## Have you updated?
If you are migrating from an older version add `skip_ip` array in `recaptcha.php` configuration file.

## Customize error message
Just for v2 and invisible users.

Before starting please add the validation message to `resources/lang/[LANG]/validation.php` file
```php
return [
    ...
    'recaptcha' => 'Hey!!! :attribute is wrong!',
];
```