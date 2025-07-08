import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  Output,
  signal,
  output,
} from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// const rand = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  // @Output() select = new EventEmitter();
  select = output<string>();
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  onSelectUser() {
    this.select.emit(this.id);
  }
  // selectedUser = signal(DUMMY_USERS[rand]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  // onSelectUser() {
  // const rand = Math.floor(Math.random() * DUMMY_USERS.length);
  // this.selectedUser.set(DUMMY_USERS[rand]);
  // }
}
// export class UserComponent {
//   selectedUser = DUMMY_USERS[rand];

// get imagePath() {
//   return 'assets/users/' + this.selectedUser.avatar;
// }

//   onSelectUser() {
//     const rand = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser = DUMMY_USERS[rand];
//   }
// }
