import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

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
    @Inject(MAT_DIALOG_DATA) public data: { messages: string[], header: string},
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close(-1);
  }
}

@Injectable({
  providedIn: 'root'
})
export class OpenErrorDialog{

  constructor(
    private dialog: MatDialog,
    private router: Router,
  ){}

  simpleInfo(head: string, messages: string[]): void {
    this.dialog.open(
      ErrorMsgDialogComponent,
      {
        data: {messages: messages, header: head}
      }
    );
  }

  simpleError(messages: string[]): void {
    this.dialog.open(
      ErrorMsgDialogComponent,
      {
        data: {messages: messages}
      }
    );
  }

  catchHttpError(e: any): void {
   
    if(e.name == "HttpErrorResponse") {
      let message: string[] = [];
      message.push("A server a következő választ küldte:");
      message.push( "Állapot kód: " + e.status);
      message.push("Üzenet: " + e.error.message);
      if(e.error.message === "SQLITE_CONSTRAINT: FOREIGN KEY constraint failed"){
        message.push("Valószínüleg kötődik az egyik utazáshoz.")
      }
      if(e.error.message === "SQLITE_CONSTRAINT: UNIQUE constraint failed: user.email"){
        message.push("Mát létezik ilyen felhasználónév az adatbázisban!")
      }
      if(e.status == 401){
        this.router.navigate(['login']);
        message.push("Nincs bejelentkezve!");
      }
      this.dialog.open(
        ErrorMsgDialogComponent,
        {
          data: {messages: message}
        }
      );
    }
  }
}



