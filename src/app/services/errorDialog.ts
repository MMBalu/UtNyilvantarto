import { MatDialog } from "@angular/material/dialog";
import { ErrorMsgDialogComponent } from "../error-msg-dialog/error-msg-dialog.component";

export class ErrorDialog {

    constructor(
        private dialog: MatDialog
    ) {}

    catchHttpError(e: any): void {
        //console.log("Error elkapva: " + e.name);
        //console.log(e);
        /*
          error.message:
            SQLITE_CONSTRAINT: FOREIGN KEY constraint failed
        */
        let message: string[] = [];
    
        if(e.name == "HttpErrorResponse") {
          message.push("A server a következő választ küldte:");
          message.push( "Állapot kód: " + e.status);
          message.push("Üzenet: " + e.error.message);
          if(e.error.message === "SQLITE_CONSTRAINT: FOREIGN KEY constraint failed"){
            message.push("Valószínüleg kötődik az egyik utazáshoz.")
        }
    
        const dialogRef = this.dialog.open(
          ErrorMsgDialogComponent,
          {
            data: {messages: message}
            }
        );
      }
    }
}