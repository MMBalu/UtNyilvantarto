SQLite format 3   @     _                                                               _ .[4� 
} ���
}�                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ��))�etabletemporary_triptemporary_tripCREATE TABLE "temporary_trip" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "date" text NOT NULL, "departureAddress" text NOT NULL, "arrivalAddress" text NOT NULL, "distance" integer NOT NULL, "newKmAge" integer NOT NULL, "carId" integer, "driverId" integer, "tripType" text NOT NULL, CONSTRAINT "FK_7794de982c19fe8f4cf4460efc6" FOREIGN KEY ("carId") REFERENCES "car" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_2034f2f2e58179b42c4866f6f13" FOREIGN KEY ("driverId") REFERENCES "driver" ("id") ON DELETE N�N))�Qtabletempo�7	�QtabletriptripCREATE TABLE "trip" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "date" text NOT NULL, "departureAddress" text NOT NULL, "arrivalAddress" text NOT NULL, "distance" integer NOT NULL, "newKmAge" integer NOT NULL, "carId" integer, "driverId" integer, "tripType" text NOT NULL, CONSTRAINT "FK_7794de982c19fe8f4cf4460efc6" FOREIGN KEY ("carId") REFERENCES "car" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_2034f2f2e58179b42c4866f6f13" FOREIGN KEY ("driverId") REFERENCES "driver" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)�`�'tablecarcarCREATE TABLE "car" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "type" text NOT NULL, "licenseNumber" text NOT NULL, "fuelType" text NOT NULL, "consumption" integer NOT NULL, "kmAge" integer NOT NULL)  %�
--�G� --�3ta
     �l�3tabledriverdriverCREATE TABLE "driver" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" text NOT NULL, "birthdate" text NOT NULL, "address" text NOT NULL, "licenseNumber" text NOT NULL, "licenseExpireDate" text NOT NULL)P++Ytablesqlite_sequencesqlite_sequenceCREATE TABLE sqlite_sequence(name,seq)   �Ut�I
�utableuseruserCREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "email" text NOT NULL, "password" text NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"))'; indexsqlite_autoindex_user_1user   W ��_*���P��b%��z;��W                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     =
 -/2022-02-20T17:30BükkszentkeresztMiskolc �
céges=
 -/2022-02-20T12:00MiskolcBükkszentkereszt �
céges1
 -	2022-02-11T07:00VarbóMiskolcvmagán1
 -	2022-02-10T14:30MiskolcVarbóXmagán=
 -/2022-01-22T12:50SátoraljaújhelyMiskolcn@
céges=
 -/2022-02-02T11:30SátoraljaújhelyMiskolcn@
céges4
 -2022-02-15T20:00SzerencsMiskolc(�magán4
 -2022-02-15T16:10MiskolcSzerencs(hmagán;
 --2022-02-05T21:10SajószentpéterMiskolcumagán;
 --2022-02-05T15:00MiskolcSajószentpéteramagán7
 -%	2022-01-28T15:00MezőkövesdMiskolc2:
céges7
 -%	2022-01-28T08:45MiskolcMezőkövesd2
céges=
 -/2022-01-22T08:00MiskolcSátoraljaújhelyn �
céges8
 -'2022-01-16T16:30KazincbarcikaMiskolcMcéges8
 -'2022-01-16T08:55MiskolcKazincbarcika1céges1
 -	2022-01-15T19:00MályiMiskolc
�
magán1
 -	2022-01-15T16:00MiskolcMályi
�
magán3
 -2022-01-12T21:00SzerencsMiskolc-dmagán3
 -2022-01-12T15:50MiskolcSzerencs-7magán4
 -	2022-01-11T18:00BudapestMiskolc ��céges4

 -	2022-01-10T08:30MiskolcBudapest �céges� � ����                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    � tempousertripcar
driver
   		userE � ���K                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   e %=?=Mézga Géza1985-06-05T22:00:00.000Z1535 Kispuszta Fő út 2.AB12345672022-12-14T23:00:00.000ZY !;/;Nagy Árpi1988-07-11 22:00:00.0001112 KovácsfalvaCD55669972022-06-04 22:00:00.000   ;Y
 %='=Példa Béla1983-06-21T22:00:00.000Z4532 HarmadikFS12375872026-11-17T23:00:00.000ZX !='!=kiss Pisti1992-02-24T22:00:00.000Z2145 MásodikAS127845632025-08-09T20:00:00.000Z   { ��{]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ratyiAJF-342benzin" �$ Audi A6UGH-598dízel@������0 %'Toyota Rav-4ACC-312benzin/hybrid@ffffff
+ )Toyota CorollaABC-123benzin@333333V   � ��                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     V
 -?;2022-06-05T18:00Budapest Váci út. 106/BMiskolc Szeles utca 10. � �cégesU
 -;?	2022-06-02T08:30Miskolc Szeles utca 10.Bud admin2admin adminadmin
   � ��                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
admin2	admin