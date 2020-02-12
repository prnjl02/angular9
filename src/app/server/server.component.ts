import { Component } from '@angular/core';

@Component({
selector:'app-server',
templateUrl:'./server.component.html',
styleUrls:['./server.component.css']
})
export class ServerComponent{
    username :string='';
    showSecret=false;
    log=[];

    onDisplayDetails(){
        this.showSecret=!this.showSecret;
        this.log.push(this.log.length +1);
    }

}