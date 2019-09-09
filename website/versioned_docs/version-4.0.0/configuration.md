---
id: version-4.0.0-configuration
title: Configuration
sidebar_label: Configuration
original_id: configuration
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
```
> **The following environment variables have been removed!!!**
> Now only sensitive informations as API keys are allowed as environment variables, that means you have to set configuration values in `config/recaptcha.php`
* ~~RECAPTCHA_DEFAULT_VERSION~~
* ~~RECAPTCHA_CURL_TIMEOUT~~
* ~~RECAPTCHA_DEFAULT_VALIDATION_ROUTE~~
* ~~RECAPTCHA_DEFAULT_TOKEN_PARAMETER_NAME~~
* ~~RECAPTCHA_DEFAULT_LANGUAGE~~

### Complete configuration
Open `config/recaptcha.php` configuration file and set `version`:
```php
return [
    'api_site_key'                  => env('RECAPTCHA_SITE_KEY', ''),
    'api_secret_key'                => env('RECAPTCHA_SECRET_KEY', ''),
    // changed in v4.0.0
    'version'                       => 'v2', // supported: "v3"|"v2"|"invisible"
    // @since v3.4.3 changed in v4.0.0
    'curl_timeout'                  => 10,
    'skip_ip'                       => [], // array of IP addresses - String: dotted quad format e.g.: "127.0.0.1"
    // @since v3.2.0 changed in v4.0.0
    'default_validation_route'      => 'biscolab-recaptcha/validate',
    // @since v3.2.0 changed in v4.0.0
    'default_token_parameter_name' => 'token',
    // @since v3.6.0 changed in v4.0.0 
    'default_language'             => null,
    // @since v4.0.0
    'default_form_id'              => 'biscolab-recaptcha-invisible-form', // Only for "invisible" reCAPTCHA
    // @since v4.0.0
    'explicit'                     => false, // true|false
    // @since v4.0.0
    'tag_attributes'               => [
        'theme'                    => 'light', // "light"|"dark"
        'size'                     => 'normal', // "normal"|"compact"
        'tabindex'                 => 0,
        'callback'                 => null, // DO NOT SET "biscolabOnloadCallback"
        'expired-callback'         => null, // DO NOT SET "biscolabOnloadCallback"
        'error-callback'           => null, // DO NOT SET "biscolabOnloadCallback"
    ]
];
```
| Key               | Type | Description                                                                                                                                                           | Default |
|-------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| `api_site_key` and `api_secret_key` | `string` | reCAPTCHA keys you have to create in order to perform Google API authentication. For more information about Site Key and Secret Key please visit [Google reCAPTCHA developer documentation](https://developers.google.com/recaptcha/docs/start) | `''` |
| `version` | `string` | indicates the reCAPTCHA version (supported: v3&#124;v2&#124;invisible). Get more info about reCAPTCHA version at <a href="https://developers.google.com/recaptcha/docs/versions" target="_blank">https://developers.google.com/recaptcha/docs/versions</a> | `'v2'` |
| `curl_timeout` | `int` |  the maximum number of seconds to allow cURL functions to execute | `10` |
| `skip_ip` | `array` &#124; `string` | a whitelist of IP addresses (array or CSV) that, if recognized, disable the reCAPTCHA validation (return always true) and if you embed JS code in blade (view) file **NO validation call will be performed** | `[]` |
| `default_validation_route` | `string` | the route called via javascript built-in validation script (v3 only) | `'biscolab-recaptcha/validate'` |
| `default_token_parameter_name` | `string` | the name of "token" GET parameter sent to `default_validation_route` to be validated (v3 only) | `'token'` |
| `default_language` | `string` | the default language code. It has no effect with v3. See [https://developers.google.com/recaptcha/docs/language](https://developers.google.com/recaptcha/docs/language) for further information | `null` |
| `default_form_id` | `string` | the default form ID. Only for "invisible" reCAPTCHA | `'biscolab-recaptcha-invisible-form'` |
| `explicit` | `bool` | deferring the render can be achieved by specifying your onload callback function and adding parameters to the JavaScript resource. It has no effect with v3 and invisible (supported values: true&#124;false) | `false` |

#### (array) tag_attributes

| Key               | Type | Description                                                                                                                                                           | Default |
|-------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| `tag_attributes.theme` | `string` | the color theme of the widget. (supported values: "light"&#124;"dark") | `'light'` |
| `tag_attributes.size` | `string` |  the size of the widget. (supported values: "normal"&#124;"compact") | `'normal'` |
| `tag_attributes.tabindex` | `int` |  the tabindex of the widget and challenge | `0` |
| `tag_attributes.callback` | `string` |  the name of your callback function, executed when the user submits a successful response. The g-recaptcha-response token is passed to your callback | `null` |
| `tag_attributes.expired-callback` | `string` |  the name of your callback function, executed when the reCAPTCHA response expires and the user needs to re-verify  | `null` |
| `tag_attributes.error-callback` | `string` |  the name of your callback function, executed when reCAPTCHA encounters an error (usually network connectivity) and cannot continue until connectivity is restored. If you specify a function here, you are responsible for informing the user that they should retry  | `null` |

Here you can find further details about `tag_attributes.*` [https://developers.google.com/recaptcha/docs/display#render_param](https://developers.google.com/recaptcha/docs/display#render_param)

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