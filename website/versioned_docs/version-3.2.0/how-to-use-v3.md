---
id: version-3.2.0-how-to-use-v3
title: How to use v3
sidebar_label: How to use v3
original_id: how-to-use-v3
---


## Embed in Blade

Insert `htmlScriptTagJsApiV3($config)` helper before closing `</head>` tag.

```html
<!DOCTYPE html>
<html>
    <head>
        ...
        {!! htmlScriptTagJsApiV3([
            'action' => 'homepage',
            'callback_then' => 'callbackThen',
            'callback_catch' => 'callbackCatch'
        ]) !!}

        <!-- OR! -->
        
        {!! htmlScriptTagJsApiV3([
            'action' => 'homepage',
            'custom_validation' => 'myCustomValidation'
        ]) !!}
    </head>
```
`$config` is required and is an associative array containing configuration parameters required for the JavaScript validation handling. 

The keys are:

| Key               | Required  | Description                                                                                                                                                           | Default value |
|-------------------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| `action` 	        | no        | is the `action` parameter required by reCAPTCHA v3 API (<a href="https://developers.google.com/recaptcha/docs/v3" target="_blank">further info</a>)  	                | `homepage`    |
| `custom_validation`   | no    	| is the name of your custom callback javascript function who will override the built-in javascript validation system of this package                               | empty string  |
| `callback_then`   | no    	| (overlooked if `custom_validation`is set) is the name of your custom callback javascript function called by the built-in javascript validation system of this package in case of response success   	| empty string  |
| `callback_catch` 	| no 	    | (overlooked if `custom_validation`is set) is the name of your custom callback javascript function called by the built-in javascript validation system in this package in case of response fault 	    | empty string  |


## Built-in javascript validation system

As callback of `grecaptcha.execute` an ajax call to `config('recaptcha.default_validation_route')` will be performed using `fetch` function. In case of successful response a Promise object will be received and passed as parameter to the `callback_then` function you have set. In not set, no actions will be performed.

Same will happen with `callback_catch`. `callback_catch` will be called in event of response errors and errors will pass as parameter et that function. If not set, no actions will be performed.

Please, go to <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" target="_blank">Using Fetch</a> for further information on `fetch` javascript function.

**Warning!!! Check browser compatibility** 
`fetch` function has compatibility issues with some browser like IE. Please create a custom validation function and set `custom_validation` with its name. That function has to accept as argument the `token`received from Google reCAPTCHA API.
 
<a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Browser_compatibility" target="_blank">Fetch browser compatibility</a> 


### Validation Laravel route

Default validation route is `config('recaptcha.default_validation_route', 'biscolab-recaptcha/validate')`.  
Route and relative Controller are built-in in the package. The route if filtered and protected by Laravel `web` Middleware, that's why is important you embed `csrf-token` HTML meta tag and send `X-Requested-Wit` and `X-CSRF-TOKEN` headers.

You can also change the validation end-point changing `default_validation_route` value in `recaptcha.php` config file.

```html
<head>
    ...
    <!-- IMPORTANT!!! remember CSRF token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
```

### Validation response object

The response will be a JSON containing following data:

```json
{
    "action":"homepage",
    "challenge_ts":"2019-01-29T00:42:08Z",
    "hostname":"www.yourdomain.ext",
    "score":0.9,
    "success":true
}
```

In the next paragraph you can learn how handle Validation promise object

### "callback_then" and "callback_catch"

After built-in validation you should do something. How? Using `callback_then` and `callback_catch` functions.

What you have to do is just create functions and set parameters with their names.

* `callback_then` must receive one argument of type `Promise`.

* `callback_catch` must receive one argument of type `string`

The result should be something like that:

```html
<head>
    ...
    <!-- IMPORTANT!!! remember CSRF token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    ...
    <script type="text/javascript">
        function callbackThen(response){
        	// read HTTP status
            console.log(response.status);
            
            // read Promise object
            response.json().then(function(data){
                console.log(data);
            });
        }
        function callbackCatch(error){
            console.error('Error:', error)
        }   
    </script>    
    ...
    {!! htmlScriptTagJsApiV3([
        'action' => 'homepage',
        'callback_then' => 'callbackThen',
        'callback_catch' => 'callbackCatch'
    ]) !!}    
</head>
``` 

### "custom_validation" function

As just said you can handle validation with your own function. To do that you have to write your function and set `custom_validation` parameter with its name.

The result should be something like that:

```html
<head>
    ...
    <!-- IMPORTANT!!! remember CSRF token --> 
    <meta name="csrf-token" content="{{ csrf_token() }}">
    ...
    <script type="text/javascript">
        function myCustomValidation(token) {
            // do something with token 
        }
    </script>    
    ...
    {!! htmlScriptTagJsApiV3([
        'action' => 'homepage',
        'custom_validation' => 'myCustomValidation'
    ]) !!}    
</head>
``` 