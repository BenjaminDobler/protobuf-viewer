import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProtoTypeComponent } from './proto-viewer/components/proto-type/proto-type.component';
import { ProtoOptions } from './proto-viewer/services/proto.options';
import { ProtoViewerService } from './proto-viewer/services/proto.viewer.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ProtoTypeComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Protobuf Viewer';

  options: ProtoOptions = inject(ProtoOptions);
  protoService: ProtoViewerService = inject(ProtoViewerService);



  constructor() { }



}
