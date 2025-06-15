import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ProtoOptions } from '../../services/proto.options';
import { PropertyComponent } from '../util/property/property.component';
import { ProtoViewerService } from '../../services/proto.viewer.service';

@Component({
  selector: 'proto-type',
  imports: [CommonModule, PropertyComponent],
  templateUrl: './proto-type.component.html',
  styleUrl: './proto-type.component.scss',
})
export class ProtoTypeComponent {
  options: ProtoOptions = inject(ProtoOptions);
  protoService: ProtoViewerService = inject(ProtoViewerService);

  @Input()
  public root: any;
}
