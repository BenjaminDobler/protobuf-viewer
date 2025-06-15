import { Injectable } from '@angular/core';
import * as t from 'proto-parser';

@Injectable({
  providedIn: 'root',
})
export class ProtoViewerService {
  objectMap: any = {};

  rootObjectName: string = '';

  async openProto() {
    const w: any = window;
    const [fileHandle] = await w.showOpenFilePicker({
      multiple: false,
    });
    const file = await fileHandle.getFile();

    const tx = await file.text();

    const protoDocument = t.parse(tx) as t.ProtoDocument;
    console.log(JSON.stringify(protoDocument, null, 2));

    const getTypes = (obj: any) => {
      console.log(Object.keys(obj));

      for (let key in obj) {
        console.log(key);
        console.log(obj[key].fullName);
        this.objectMap[obj[key].fullName] = obj[key];
        if (obj[key].nested) {
          getTypes(obj[key].nested);
        }
      }
    };

    getTypes(protoDocument.root.nested);
  }
}
