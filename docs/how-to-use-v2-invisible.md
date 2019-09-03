---
id: how-to-use-invisible
title: How to use V2 - Invisible
sidebar_label: How to use Invisible
---


## Embed in Blade

You can chose among 2 different ways

### ReCAPTCHA v2 Invisible

Insert `htmlScriptTagJsApi($formId)` helper before closing `</head>` tag.

You can also use `ReCaptcha::htmlScriptTagJsApi($formId)`.

```blade
<!DOCTYPE html>
<html>
    <head>
        ...
        {!! htmlScriptTagJsApi($formId) !!}
    </head>
```
`$formId` is required.

After you have to insert `htmlFormButton($buttonInnerHTML)` helper inside the form where you want to use reCAPTCHA. 

This function creates submit button therefore you don't have to insert `<input type="submit">` or similar.

You can also use `ReCaptcha::htmlFormButton($buttonInnerHTML)` .

`$buttonInnerHTML` is what you want to write on the submit button
```html
<form id="{{ formId }}">
    @csrf
    ...
    {!! htmlFormButton(/* $buttonInnerHTML - Optional */) !!}
</form>
```
> **!!!IMPORTANT!!!** Use as `$formId` the same value you previously set in `htmlScriptTagJsApi` function.
> DO NOT forget `@csrf` between `form` tags

## Verify submitted data

Add **recaptcha** to your rules
```php
$v = Validator::make(request()->all(), [
    ...
    'g-recaptcha-response' => 'recaptcha',
]);
```

Print form errors
```php
$errors = $v->errors();
````