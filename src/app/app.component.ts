import { Component } from '@angular/core';

declare var io;

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
  socket = null;

  ngOnInit() {
    io.socket.get('/chat/connect', function(res) {
      debugger;
    })    
  }
}
