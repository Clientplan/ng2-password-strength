# ng2-password-strength

Check the strength of a password, with the option to add custom CSS classes.

![Example](https://raw.githubusercontent.com/tonyhensler/ng2-password-strength/master/example.gif "Example")

## Installation

To install this library, run:

```bash
$ npm install ng2-password-strength --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install ng2-password-strength
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { NgPasswordStrength } from 'ng2-password-strength';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    NgPasswordStrength.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<password-strength></password-strength>
```

## Options

```bash
[class] = Specify a custom class
[id] = Specify a custom ID

<password-strength [class]="primary" [id]="password"></password-strength>
```

## License

MIT © [Tony Hensler](mailto:thenslerse@gmail.com)
