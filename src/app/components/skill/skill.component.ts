import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/core/interfaces/skill.interface';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  @Input('skillData')skillData: Skill = {
    title: '',
    list: []
  };
}
