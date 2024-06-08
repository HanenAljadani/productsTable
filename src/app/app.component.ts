import { Component } from '@angular/core';
import { Products } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 

  product: Products[] = [
    {
      id: 1,
      name: "iphone",
      price: 4000,
      img:"/assets/images/iphone.png"
    },
    {
      id: 2,
      name: "Samsung",
      price: 2500,
      img:"/assets/images/Samsung.webp"
    },
    {
      id: 3,
      name: "Nokia",
      price: 2900,
      img:"/assets/images/Nokia.png"
    },
  ]
  title: string = " ";
  prodName = "";
  paid = false;

  phone = ["iphone", 'Sam', "Nok"]

  find(p: any[]) {
    return p.filter(item => item.name.toLowerCase().includes(this.prodName.toLowerCase()))
  }

}
