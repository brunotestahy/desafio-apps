import './polyfills.ts';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  App,
  MenuController,
  GestureController,
  DomController,
  NavController,
  AlertController,
  Platform,
  Config,
  Keyboard,
  Form,
  IonicModule,
  LoadingController,
  Events,
} from 'ionic-angular';
import { getTestBed, TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

import {
  GestureControllerMock,
  AlertControllerMock,
  ConfigMock,
  PlatformMock
} from './mocks';

// Unfortunately there's no typing for the `__karma__` variable. Just declare it as any.
declare var __karma__: any;
declare var require: any;

// Prevent Karma from running prematurely.
__karma__.loaded = function (): void {
  // noop
};

console.log('init test environment');
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule, platformBrowserDynamicTesting(),
);

const context: any = require.context('./', true, /\.spec\.ts$/);
context.keys().map(context);
__karma__.start();

export class TestUtils {

  public static beforeEachCompiler(components: Array<any>, providers: Array<any>): Promise<{ fixture: any, instance: any }> {
    return TestUtils.configureIonicTestingModule(components, providers)
      .compileComponents()
      .then(() => {
        let fixture: any = TestBed.createComponent(components[0]);
        console.log(fixture.debugElement.componentInstance);
        if (fixture === null) {
          throw ('Fixture is undefined!!!');
        }
        return {
          fixture: fixture,
          instance: fixture.debugElement.componentInstance,
        };
      })
      .catch((err) => {
        throw err;
      });
  }

  public static configureIonicTestingModule(components: Array<any>, providers: Array<any>): typeof TestBed {
    return TestBed.configureTestingModule({
      declarations: [
        ...components,
      ],
      providers: [
        Form, Keyboard,
        MenuController,
        DomController,
        LoadingController,
        NavController,
        Events,
        { provide: Platform, useClass: PlatformMock },
        { provide: AlertController, useClass: AlertControllerMock },
        { provide: GestureController, useClass: GestureControllerMock },
        { provide: App, useClass: ConfigMock },
        { provide: Config, useClass: ConfigMock },
        ...providers,
      ],
      imports: [
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
      ],
    });
  }

  public static eventFire(el: any, etype: string): void {
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      let evObj: any = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }
}
