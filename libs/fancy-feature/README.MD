# Cool feature

This is an angular feature module. It was build with [ng-library-builder](https://www.npmjs.com/package/ng-library-builder) and used in the [demo](https://www.npmjs.com/package/ng-library-builder) app.


## Eager loading usage

    import {FancyModule} from '@ng-playground/fancy-feature/public_api';

    @NgModule({
        imports: [
           BrowserModule,
           FancyModule,
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
             loadChildren:'@ng-playground/fancy-feature#FancyModule'
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
    npm link @ng-playground/fancy-feature
```

## Exit dev mode

1. go to your angular app
2. remove the app link
```
    npm unlink @ng-playground/fancy-feature
```
3. unlink the library
```
    cd src
    npm unlink
```

More about npm link [here](https://docs.npmjs.com/cli/link)
