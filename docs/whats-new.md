---
id: whats-new
title: What's new in v4.x?
sidebar_label: What's new?
---

## New features

### v2 checkbox explicit render

Now you can defer the widget render setting `explicit` to `true` in `config/recaptcha.php`.

Further info: [https://developers.google.com/recaptcha/docs/display#explicit_render](https://developers.google.com/recaptcha/docs/display#explicit_render)

### v2 checkbox customization

Now you can customize the widget using render parameters (or tag attributes). Set `tag_attrobutes` values in `config/recaptcha.php`.

Further info: [https://developers.google.com/recaptcha/docs/display#render_param](https://developers.google.com/recaptcha/docs/display#render_param)

### v2 checkbox language

You can override the default widget language passing the proper configuration attribute to `htmlScriptTagJsApi()`:

```php
{!! htmlScriptTagJsApi([
    'lang' => 'it'
]) !!}
```
See [https://developers.google.com/recaptcha/docs/language](https://developers.google.com/recaptcha/docs/language) for the list of available languages

### v2 invisible default form ID

`default_form_id` value is now set in `config/recaptcha.php`, default value is `'biscolab-recaptcha-invisible-form'`. You can retrieve it using `getFormId()` helper function.
You can also override the default value passing the proper configuration attribute to `htmlScriptTagJsApi()`:

```php
{!! htmlScriptTagJsApi([
    'form_id' => 'my-custom-form-id'
]) !!}
```
> Overriding default form ID `getFormId()` helper will return `'my-custom-form-id'`.

## New functions

### `getFormId()` helper and method

`getFormId()` returns the `form` ID property using **invisible** reCAPTCHA. To set value take a look [here](#v2-invisible-default-form-id).

Use this helper in blade files
```html
<form id="{{getFormId()}}">
    ...
</form>
```

### `recaptchaRuleName()` and `recaptchaFieldName()` helpers

* `recaptchaRuleName()` returns the default validation rule name
* `recaptchaFieldName()` returns the default form field name (server side will be the request input name)

You can use them together:

```php
$valid = Validator::make(request()->all(), [
            recaptchaFieldName() => recaptchaRuleName()
        ]);
```

## Backward incompatible changes

### `$formId` attribute removed from `htmlScriptTagJsApi()`

`htmlScriptTagJsApi` method and helper now accept only one attribute `$config` of type `array`. `$formId` has been removed.

### `htmlScriptTagJsApiV3` helper and method removed

`htmlScriptTagJsApiV3` method and helper have been replaced by `htmlScriptTagJsApi` method and helper. That means there are no longer differences between v2 and v3 in **Blade** embed.

### Environment variables removed

Following environment variables have been removed:
* RECAPTCHA_DEFAULT_VERSION
* RECAPTCHA_CURL_TIMEOUT
* RECAPTCHA_DEFAULT_VALIDATION_ROUTE
* RECAPTCHA_DEFAULT_TOKEN_PARAMETER_NAME
* RECAPTCHA_DEFAULT_LANGUAGE