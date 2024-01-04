import { Component, Input } from '@angular/core';
import { Testimonial } from 'src/app/core/interfaces/testimonial.interface';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {
  @Input('testimonialData')testimonialData: Testimonial = {
    author: '',
    jobTitle: '',
    testimonial: ''
  };
}
