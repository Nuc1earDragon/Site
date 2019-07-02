import { Component, OnInit, ViewChild, ElementRef, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-tanks',
  templateUrl: './tanks.component.html',
  styleUrls: ['./tanks.component.scss']
})
export class TanksComponent implements OnInit {
  @ViewChild('canvasEl') canvas: ElementRef;
  private context: CanvasRenderingContext2D;

  constructor() { }

  ngAfterViewInit() {
    this.context = (this.canvas.nativeElement as HTMLCanvasElement).getContext('2d');
  }
  ngOnInit() {
  }

}
