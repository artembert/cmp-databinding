import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ElementRef, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') public element: {
    type: string,
    name: string,
    content: string,
  };
  @Input() public name: string;
  @ViewChild('heading') public header: ElementRef;
  @ContentChild('contentParagraph') public paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  public ngOnInit(): void {
    console.log('ngOnInit called');
    console.log(`Text Content: ${this.header.nativeElement.textContent}`);
    console.log(`Paragraph: ${this.paragraph.nativeElement.textContent}`);
  }
}
