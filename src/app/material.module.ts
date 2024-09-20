import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';

@NgModule({
    exports: [
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
    ]
})
export class MaterialModule { }
