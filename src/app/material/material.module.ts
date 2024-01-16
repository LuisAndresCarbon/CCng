import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { AutoCompleteModule } from "primeng/autocomplete";
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from "primeng/toolbar";
import { ContextMenuModule } from "primeng/contextmenu";
import { DialogModule } from "primeng/dialog";
import { FileUploadModule } from "primeng/fileupload";
import { ProgressBarModule } from "primeng/progressbar";
import { RatingModule } from "primeng/rating";
import { AvatarModule } from "primeng/avatar";
import { SplitButtonModule } from "primeng/splitbutton";
import { SidebarModule } from "primeng/sidebar";
import { MenuModule } from "primeng/menu";
import { RippleModule } from "primeng/ripple";
import { TableModule } from "primeng/table";
import { SlideMenuModule } from "primeng/slidemenu";
import { RouterModule } from "@angular/router";
import { StepsModule} from 'primeng/steps';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SplitterModule } from 'primeng/splitter';
import { ListboxModule } from 'primeng/listbox';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    InputTextModule ,
    CalendarModule,
    ChipsModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    InputTextareaModule,
    AutoCompleteModule,
    ToastModule,
    ToolbarModule,
    ContextMenuModule,
    DialogModule,
    FileUploadModule,
    ProgressBarModule,
    RatingModule,
    AvatarModule,
    SplitButtonModule,
    SidebarModule,
    MenuModule,
    RippleModule,
    TableModule,
    SlideMenuModule,
    RouterModule,
    StepsModule,
    ConfirmDialogModule,
    SplitterModule,
    ListboxModule,
    
  ]
})

export class MaterialModule {}