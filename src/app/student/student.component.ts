import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
    studentName:String="Senthil";
    age:number=18;
    message:String="This is Event-Binding";
    fontColor:String="blue"
    displayMessage()
    {
        alert(this.message);
    }
}
