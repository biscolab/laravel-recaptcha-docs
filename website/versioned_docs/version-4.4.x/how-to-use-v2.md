---
id: version-4.4.x-how-to-use-v2
title: How to use v2
sidebar_label: How to use v2
original_id: how-to-use-v2
---

## Embed in Blade

Insert `htmlScriptTagJsApi()` helper before closing `</head>` tag.

You can also use `ReCaptcha::htmlScriptTagJsApi()`.

```blade
<!DOCTYPE html>
<html>
    <head>
        ...
        {!! htmlScriptTagJsApi($configuration) !!}
    </head>
```

#### htmlScriptTagJsApi

`htmlScriptTagJsApi` function accepts `$configuration` argument. `$configuration` has different keys depending on which ReCAPTCHA you are using:

- [Checkbox](#recaptcha-v2-checkbox)
- [Invisible](#recaptcha-v2-invisible)

### ReCAPTCHA v2 Checkbox

#### htmlScriptTagJsApi(\$configuration)

`$configuration` argument can have following keys:

- `lang` set reCAPTCHA language. This will override `default_language` in `config/recaptcha.php`. Here you ca find the complete list of availeble languages [https://developers.google.com/recaptcha/docs/language](https://developers.google.com/recaptcha/docs/language)

#### Form set-up

After you have to insert `htmlFormSnippet()` helper inside the form where you want to use the field `g-recaptcha-response`.

You can also use `ReCaptcha::htmlFormSnippet()` .

```blade
<form>
    @csrf

    ...
    {!! htmlFormSnippet() !!}
    <!-- OR -->
    {!! htmlFormSnippet($attributes) !!}
    <input type="submit">
</form>
```

> DO NOT forget `@csrf` blade directive

#### htmlFormSnippet([, array \$attributes = [] ])

`htmlFormSnippet()` function does not require attributes but you can override default config `data-` attributes:

```php
{!! htmlFormSnippet([
    "theme" => "light",
    "size" => "normal",
    "tabindex" => "3",
    "callback" => "callbackFunction",
    "expired-callback" => "expiredCallbackFunction",
    "error-callback" => "errorCallbackFunction",
]) !!}
```

`htmlFormSnippet` methos allows are only folowing attribute names:

- theme
- size
- tabindex
- callback
- expired-callback
- error-callback

> Any different attribute name will be rejected

#### Customization

In `config/recaptcha.php` you can customize reCAPTCHA widget setting `tag_attributes` array values. Take a look to `tag_attributes` section in [Complete configuration](configuration.md#complete-configuration)

### ReCAPTCHA v2 Invisible

#### htmlScriptTagJsApi(\$configuration)

`$configuration` argument can have following keys:

- `form_id` set reCAPTCHA form ID. This will override `default_form_id` in `config/recaptcha.php`. This value will be returned by `getFormId()` function in order to set the form tag `id` property.

#### Form set-up

After you have to insert `htmlFormButton($button_label, $properties)` helper inside the form where you want to use reCAPTCHA.

This function creates submit button therefore you don't have to insert `<input type="submit">` or similar.

You can also use `ReCaptcha::htmlFormButton($button_label, $properties)` .

`$button_label` is what you want to write on the submit button

```html
<form id="{{ getFormId() }}">
  @csrf ... {!! htmlFormButton($button_label, $properties) !!}
</form>
```

> DO NOT forget `@csrf` blade directive

#### getFormId()

`getFormId` function returns the default form ID value. This is the value of either `default_form_id` in `config/recaptcha.php` or `$configuration['form_id']` previously set as arguments of `htmlScriptTagJsApi` helper.

> `$configuration['form_id']` overrides default settings.

#### htmlFormButton()

`htmlFormButton` function accepts 2 arguments:

- `$button_label`: (string: optional) the button lable. For example: `Subscribe!`;
- `$properties`: (array: optional) the HTML button properties. For example:

```php
// $properties =
[
    'class' => 'btn btn-info',
    'data-foo' => 'bar'
]
```

> If `data-sitekey` and `data-callback` properties are set, they will be overwritten

> If `class` property is set the value `g-recaptcha` will be appended

## Verify submitted data

Add `recaptcha` to your rules

```php
$validator = Validator::make(request()->all(), [
    ...
    'g-recaptcha-response' => 'recaptcha',
    // OR since v4.0.0
    recaptchaFieldName() => recaptchaRuleName()
]);

// check if validator fails
if($validator->fails()) {
    ...
    $errors = $validator->errors();
}
```
