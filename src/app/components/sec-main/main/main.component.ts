import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { ProductComponent } from "../product/product.component";
import { AnswersComponent } from "../answers/answers.component";

@Component({
  selector: 'app-main',
  imports: [HeroComponent, ProductComponent, AnswersComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {


  downloadDemo(message: string) {
    console.log(message);
    this.downloadFile();
  }

  downloadFile(): void {
    const file = new Blob([''], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(file);
    link.download = 'empty-file.txt';
    link.click();
  }
}
