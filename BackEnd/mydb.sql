SQLite format 3   @     '                                                             ' .[4� 
} ���
}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ��))�etabletemporary_triptemporary_tripCREATE TABLE "temporary_trip" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "date" text NOT NULL, "departureAddress" text NOT NULL, "arrivalAddress" text NOT NULL, "distance" integer NOT NULL, "newKmAge" integer NOT NULL, "carId" integer, "driverId" integer, "tripType" text NOT NULL, CONSTRAINT "FK_7794de982c19fe8f4cf4460efc6" FOREIGN KEY ("carId") REFERENCES "car" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_2034f2f2e58179b42c4866f6f13" FOREIGN KEY ("driverId") REFERENCES "driver" ("id") ON DELETE N�N))�Qtabletempo�7	�QtabletriptripCREATE TABLE "trip" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "date" text NOT NULL, "departureAddress" text NOT NULL, "arrivalAddress" text NOT NULL, "distance" integer NOT NULL, "newKmAge" integer NOT NULL, "carId" integer, "driverId" integer, "tripType" text NOT NULL, CONSTRAINT "FK_7794de982c19fe8f4cf4460efc6" FOREIGN KEY ("carId") REFERENCES "car" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_2034f2f2e58179b42c4866f6f13" FOREIGN KEY ("driverId") REFERENCES "driver" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)�`�'tablecarcarCREATE TABLE "car" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "type" text NOT NULL, "licenseNumber" text NOT NULL, "fuelType" text NOT NULL, "consumption" integer NOT NULL, "kmAge" integer NOT NULL)  %�
--�G� --�3ta	     �l�3tabledriverdriverCREATE TABLE "driver" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" text NOT NULL, "birthdate" text NOT NULL, "address" text NOT NULL, "licenseNumber" text NOT NULL, "licenseExpireDate" text NOT NULL)P++Ytablesqlite_sequencesqlite_sequenceCREATE TABLE sqlite_sequence(name,seq)   �UtabledriverdriverCREATE TABLE "driver" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "birthdate" datetime NOT NULL, "address" varchar NOT NULL, "licenseNumber" varchar NOT NULL, "licenseExpireDate" datetime NOT NULL)   � �R��                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                M;;Béna2005-05-31 22:00:00.000dfadfadffadfadfda2022-06-04 22:00:00.000Y !;/;Nagy Árp S
 -9?2022-06-02T09:50Miskolc Szeles utca 2.Téglás Hajdu Ipari parkdqcégesU
 -?;	2022-06-05T18:30Budapest Váci út. 106/BMiskolc Szeles utca 10. ��magánU
 -;?	2022-06-02T08:30Miskolc Szeles utca 10.Budapest Váci út. 106/B � �magán� � ����                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    � temporary_triptripcar
driver   		trip   � �E�                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            Y !;/;Nagy Árpi1988-07-11 22:00:00.0001112 KovácsfalvaCD55669972022-06-04 22:00:00.000U ;'!;kis Pisti1992-02-24 23:00:00.0001111 MásodikAS127845632025-08-09 22:00:00.000b %;=;Mézga Géza1985-06-06 00:00:00.0001535 Kispusta Fő út 2.AB12345672022-12-15 00:00:00.000   � ���                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              fdadafADV-449be0 %'Toyota Rav-4ACC-312benzin/hybrid@ffffff
+ )Toyota CorollaABC-123benzin@333333V        �Q                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     V
 -?;2022-06-05T18:00Budapest Váci út. 106/BMiskolc Szeles utca 10. � �cégesU
 -;?	2022-06-02T08:30Miskolc Szeles utca 10.Budapest Váci út. 106/B � �magán