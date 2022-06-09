import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-msg-dialog',
  templateUrl: './error-msg-dialog.component.html',
  styleUrls: ['./error-msg-dialog.component.scss']
})
export class ErrorMsgDialogComponent implements OnInit {
  static dialog: MatDialog;
  message: string[] = [];

  constructor(
    private dialogRef: MatDialogRef<ErrorMsgDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { messages: string[]},
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(){
    const dialogRef = this.dialog.open(
      ErrorMsgDialogComponent,
      {
        data: {messages: this.message}
      });
  }

  cancel(): void {
    this.dialogRef.close(-1);
  }

  static catchAuthError(msg: string): void {
    const dialogRef = this.dialog.open(
      ErrorMsgDialogComponent,
      {
        data: {messages: msg}
      });
  }
/*
  catchHttpError(e: any): void {
    
    if(e.name == "HttpErrorResponse") {
      this.message.push("A server a következő választ küldte:");
      this.message.push( "Állapot kód: " + e.status);
      this.message.push("Üzenet: " + e.error.message);
      if(e.error.message === "SQLITE_CONSTRAINT: FOREIGN KEY constraint failed"){
        this.message.push("Valószínüleg kötődik az egyik utazáshoz.")
      }
      this.openDialog()
    }
  }*/
}
