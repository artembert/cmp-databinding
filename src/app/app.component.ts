import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public serverElements: Array<{ type: string, name: string, content: string }> = [
    {
      type: 'server',
      name: 'TestServer',
      content: 'Just a test'
    }
  ];

  public onServerAdded(serverData: { serverName: string, serverContent: string }): void {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  public onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }): void {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  public onChangeFirst(): void {
    this.serverElements[0].name = 'Changed';
  }

  public onDestroyFirst(): void {
    this.serverElements.splice(0, 1);
  }
}
