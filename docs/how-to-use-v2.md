---
id: how-to-use-v2
title: How to use v2
sidebar_label: How to use v2
---


## Embed in Blade

Insert `htmlScriptTagJsApi($formId)` helper before closing `</head>` tag.

You can also use `ReCaptcha::htmlScriptTagJsApi($formId)`.
`$formId` is required only if you are using **ReCAPTCHA INVISIBLE**
```blade
<!DOCTYPE html>
<html>
    <head>
        ...
        {!! htmlScriptTagJsApi(/* $formId - INVISIBLE version only */) !!}
    </head>
```

### ReCAPTCHA v2 Checkbox
After you have to insert `htmlFormSnippet()` helper inside the form where you want to use the field `g-recaptcha-response`.

You can also use `ReCaptcha::htmlFormSnippet()` .
```blade
<form>
    ...
    {!! htmlFormSnippet() !!}
    <input type="submit">
</form>
```

### ReCAPTCHA v2 Invisible
After you have to insert `htmlFormButton($buttonInnerHTML)` helper inside the form where you want to use reCAPTCHA. 

This function creates submit button therefore you don't have to insert `<input type="submit">` or similar.

You can also use `ReCaptcha::htmlFormButton($buttonInnerHTML)` .

`$buttonInnerHTML` is what you want to write on the submit button
```html
<form id="{{ formId }}">
    ...
    {!! htmlFormButton(/* $buttonInnerHTML - Optional */) !!}
</form>
```
**!!!IMPORTANT!!!** Use as `$formId` the same value you previously set in `htmlScriptTagJsApi` function.

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