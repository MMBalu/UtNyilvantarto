import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-msg-dialog',
  templateUrl: './error-msg-dialog.component.html',
  styleUrls: ['./error-msg-dialog.component.scss']
})
export class ErrorMsgDialogComponent implements OnInit {
  static dialog: MatDialog;

  constructor(
    private dialogRef: MatDialogRef<ErrorMsgDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { messages: string[]},
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close(-1);
  }

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
      });
    }
  }
}
