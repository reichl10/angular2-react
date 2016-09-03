import { 
    NgModule 
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routes';
import { HostComponent } from './components/host/host.component';

@NgModule({
    declarations: [ 
        AppComponent,
        HostComponent       
    ],
    imports: [ 
        routing,
        BrowserModule,
        HttpModule,
        FormsModule            
    ],   
    providers: [
        
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {
    
}
