import { Observable } from 'rxjs/Rx';

export class NavParamsMock {
  public static data: any = {};

  public get(key): any {
    if (NavParamsMock.data[key]) {
      return NavParamsMock.data[key];
    }
    return 'No Params of ' + key + ' was supplied. Use NavParamsMock.setParams(' + key + ',value) to set it.';
  }

  static setParams(key, value) {
    NavParamsMock.data[key] = value;
  }
}

export class LoadingControllerMock {
  create(opts?: any) {
    console.info('Creating a loader....', opts);
    return this;
  }

  dismiss() {
  }

  present() {
    console.info(' Im present loader...');
  }
}

export class GestureControllerMock {
  createGesture() {
  }

  createBlocker(opts?) {
  };

  newID() {
  };

  start(gestureName: string, id: number, priority: number) {
  };

  capture(gestureName: string, id: number, priority: number) {
  };

  release(id: number) {
  };

  disableGesture(gestureName: string, id: number) {
  };

  enableGesture(gestureName: string, id: number) {
  };

  disableScroll(id: number) {
  };

  enableScroll(id: number) {
  };

  canStart(gestureName: string) {
  };

  isCaptured() {
  };

  isScrollDisabled() {
  };

  isDisabled(gestureName: string) {
  };
}

export class ViewControllerMock {
  public readReady = this;
  public writeReady = this;
  public static showBackButton: any = false;

  public _setHeader(): any {
    return {};
  };

  public _setIONContent(value?: any): any {
    return {};
  };

  public _setIONContentRef(): any {
    return {};
  };

  public subscribe() {
  }

  public _setFooter(): any {
    return {};
  }

  public showBackButton(value?) {
    if (ViewControllerMock.showBackButton === 'error') {
      throw ('Back Button');
    } else {
      return true;
    }
  }

  public dismiss(value?) {
    return true;
  }
}

export class AlertControllerMock {
  public create(value?: any) {
    console.log('creating alert...', value);
    return this;
  }

  public present(value?: any) {
    console.log('present alert now...', value);
    return Promise.resolve(value);
  }
}

export class ModalControllerMock {
  public create(value?: any) {
    console.log('creating alert...', value);
    return this;
  }

  public present(value?: any) {
    console.log('present alert now...', value);
    return Promise.resolve(value);
  }
}

export class ConfigMock {

  public get(): any {
    return '';
  }

  public getBoolean(): boolean {
    return true;
  }

  public getNumber(): number {
    return 1;
  }
}

export class FormMock {
  public register(): any {
    return true;
  }
}

export class NavMock {

  public pop(): any {
    return new Promise(function (resolve: Function): void {
      resolve();
    });
  }

  public push(): any {
    return new Promise(function (resolve: Function): void {
      resolve();
    });
  }

  public popToRoot(): any {
    return new Promise(function (resolve: Function): void {
      resolve();
    });
  }

  public getActive(): any {
    return {
      'instance': {
        'model': 'something',
      },
    };
  }

  public setRoot(): any {
    return true;
  }
}

export class PlatformMock {
  pause: any = this;
  resume: any = this;
  public static mockIs: any;

  public static setIs(value) {
    PlatformMock.mockIs = value;
  }

  public set(key, value) {
    this[key] = value;
  }

  public is(val) {
    return PlatformMock.mockIs === val;
  }

  public subscribe(generatorOrNext?: any, error?: any, complete?: any): any {
    generatorOrNext();
    return this;
  }

  public unsubscribe(): void {

  }

  public ready(): Promise<{ String }> {
    return new Promise((resolve) => {
      resolve('READY');
    });
  }

  public registerBackButtonAction(fn: Function, priority?: number): Function {
    return (() => true);
  }

  public hasFocus(ele: HTMLElement): boolean {
    return true;
  }

  public doc(): HTMLDocument {
    return document;
  }

  public registerListener(ele: any, eventName: string, callback: any): Function {
    return (() => true);
  }

  public win(): Window {
    return window;
  }

  public raf(callback: any): number {
    return 1;
  }
}

export class NavControllerMock {

  public static isactive = {};

  public static setActiveMock(key, value) {
    NavControllerMock.isactive[key] = value;
  }

  public push(page: any, params?: any, opts?, done?: Function): Promise<any> {
    return new Promise((resolve: Function) => {
      resolve();
    });
  }

  public pop(): any {
    return new Promise(function (resolve: Function): void {
      resolve();
    });
  }

  public setRoot(page?: any): any {
    return true;
  }

  popToRoot() {
    return new Promise(function (resolve: Function): void {
      resolve();
    });
  }

  remove(startIndex: number, removeCount?: number, opts?: any, done?: Function): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve({});
    });
  }

  public getActive(): any {
    return {
      'instance': {
        'model': 'something',
      },
    };
  }

  public isActive(v) {
    return NavControllerMock.isactive[v];
  }

  public getPrevious() {
    return ViewControllerMock;
  }

  public indexOf(obj) {
    return 1;
  }

}


export class AppMock {
  getRootNav() {
    return {
      rootParams: {
        cpf: 98765432100,
        terminal: 2190000701
      },
      push: (param?) => {
        return Promise.resolve();
      }
    };
  }
}

export class HttpMock {

  constructor(_backend: any, _defaultOptions: any) {
    console.log('http mock to test :D');
  }

  request(url: string, options?: any) {
    return Observable.of({});
  }

  get(url: string, options?: any) {
    return Observable.of({});
  }

  post(url: string, body: any, options?: any) {
    // console.log()
    return Observable.fromPromise(Promise.resolve()); // Observable.of({})
  }

  put(url: string, body: any, options?: any) {
    return Observable.of({});
  }

  delete(url: string, options?: any) {
    return Observable.of({});
  }

  patch(url: string, body: any, options?: any) {
    return Observable.of({});
  }

  head(url: string, options?: any) {
    return Observable.of({});
  }

  options(url: string, options?: any) {
    return Observable.of({});
  }
}
