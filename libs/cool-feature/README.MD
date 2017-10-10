# Cool feature

This is an angular feature module. It was build with [ng-library-builder](https://www.npmjs.com/package/ng-library-builder) and used in the [demo](https://www.npmjs.com/package/ng-library-builder) app.


## Eager loading usage

    import {CoolModule} from '@ng-playground/cool-feature/public_api';

    @NgModule({
        imports: [
           BrowserModule,
           CoolModule,
           AppRoutingModule
         ],
        ...
    })
    export class AppModule {
    }


## Lazy loading usage

     const ROUTES = [
         {
             path: 'sample',
             loadChildren:'@ng-playground/cool-feature#CoolModule'
         }
     ];


## Dev mode usage

1. link the library
```
    cd src
    npm link
```

2. go to your angular app
3. use the library
```
    npm link @ng-playground/cool-feature
```

## Exit dev mode

1. go to your angular app
2. remove the app link
```
    npm unlink @ng-playground/cool-feature
```
3. unlink the library
```
    cd src
    npm unlink
```

More about npm link [here](https://docs.npmjs.com/cli/link)
