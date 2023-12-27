import { Component } from '@angular/core';
interface community {
  icon: string;
  num: string;
  value: string;
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  title = 'Build The Community Your Fans Will Love';
  context =
    'Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.';
  btnLabel = 'Get Started For Free';
  communityList: community[] = [
    {
      icon: '../../assets/icon-communities.svg',
      num: '1.4k+',
      value: 'Communities Formed',
    },
    {
      icon: '../../assets/icon-messages.svg',
      num: '2.7m+',
      value: 'Messages Sent',
    },
  ];
}
