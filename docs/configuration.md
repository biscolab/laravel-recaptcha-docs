---
id: configuration
title: Configuration
sidebar_label: Configuration
---

## Publish package
Create `config/recaptcha.php` configuration file using the following artisan command:
```sh
$ php artisan vendor:publish --provider="Biscolab\ReCaptcha\ReCaptchaServiceProvider"
```

## Set the environment
### Add your API Keys
Open `.env` file and set `RECAPTCHA_SITE_KEY` and `RECAPTCHA_SECRET_KEY`:
```php
# in your .env file
RECAPTCHA_SITE_KEY=YOUR_API_SITE_KEY
RECAPTCHA_SECRET_KEY=YOUR_API_SECRET_KEY
# RECAPTCHA_VERSION
# RECAPTCHA_CURL_TIMEOUT
# RECAPTCHA_DEFAULT_VALIDATION_ROUTE
# RECAPTCHA_DEFAULT_TOKEN_PARAMETER_NAME
# RECAPTCHA_DEFAULT_LANGUAGE
```
### Complete configuration
Open `config/recaptcha.php` configuration file and set `version`:
```php
return [
    'api_site_key'      => env('RECAPTCHA_SITE_KEY', ''),
    'api_secret_key'    => env('RECAPTCHA_SECRET_KEY', ''),
    'version'           => env('RECAPTCHA_VERSION', 'v2'), // supported: v3|v2|invisible 
    // @since v3.4.3
    'curl_timeout'      => env('RECAPTCHA_CURL_TIMEOUT', 10),
    'skip_ip'           => [], // array of IP addresses - String: dotted quad format e.g.: 127.0.0.1
    // @since v3.2.0
    'default_validation_route' => env('RECAPTCHA_DEFAULT_VALIDATION_ROUTE', 'biscolab-recaptcha/validate'),
    // @since v3.2.0
    'default_token_parameter_name' => env('RECAPTCHA_DEFAULT_TOKEN_PARAMETER_NAME', 'token'),
    // @since v3.6.0
    'default_language'             => env('RECAPTCHA_DEFAULT_LANGUAGE', null)
];
```

* `api_site_key` and `api_secret_key are reCAPTCHA keys you have to create in order to perform Google API authentication. For more information about Site Key and Secret Key please visit [Google reCAPTCHA developer documentation](https://developers.google.com/recaptcha/docs/start)

* `version` indicates the reCAPTCHA version (supported: v3|v2|invisible). Get more info about reCAPTCHA version at <a href="https://developers.google.com/recaptcha/docs/versions" target="_blank">https://developers.google.com/recaptcha/docs/versions</a>.

* `curl_timeout` the maximum number of seconds to allow cURL functions to execute.

* `skip_ip` is a whitelist of IP addresses that, if recognized, disable the reCAPTCHA validation (return always true) and if you embed JS code in blade (view) file **NO validation call will be performed**.

* `default_validation_route` is the route called via javascript built-in validation script (v3 only)

* `default_token_parameter_name` is the name of "token" GET parameter sent to `default_validation_route` to be validated (v3 only)

* `default_language` is the default language code. It has no effect with v3. See [https://developers.google.com/recaptcha/docs/language](https://developers.google.com/recaptcha/docs/language) for further information

### Reload config cache file
> **!!! IMPORTANT !!!** Every time you change some configuration run the following shell command:
```sh
$ php artisan config:cache
```

## Have you updated?
If you are migrating from an older version check your `config/recaptcha.php` configuration file and compare it with <a href="https://github.com/biscolab/laravel-recaptcha/blob/master/config/recaptcha.php" target="_blank">https://github.com/biscolab/laravel-recaptcha/blob/master/config/recaptcha.php</a>.

## Customize error message
Just for v2 and invisible users.

Before starting please add the validation message to `resources/lang/[LANG]/validation.php` file
```php
return [
    ...
    'recaptcha' => 'Hey!!! :attribute is wrong!',
];
```