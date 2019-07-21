import { ActivatedRoute } from '@angular/router'
import {of} from 'rxjs';
export class RouterStub {
  navigate(commands: any[]) {
  }
}


export class ActivatedRouteMock {
  constructor(private snapshot: Snapshot) {
  }
}

export class Snapshot {
  paramMap: ParamMap;

  constructor() {
    this.paramMap = new ParamMap();
  }
}

export class ParamMap {
  get(name) {
    return '{"agendaVisita": "asd fgh gh" }';
  }
}

export let activatedRouteStub = new ActivatedRouteMock(new Snapshot());

export let globalServiceStub = {
  usuario: {
    roles: 'rol'
  },
  postGenerico(url: string) {
    return { id: '' }
  },
  getGenerico(url: string) {

    let object = [{ id: '' }];
    return of(object);
  }
}




  export  let urlServiceMock={

    getUrl(url){
      return 'UrlPrueba';
    }
  };



