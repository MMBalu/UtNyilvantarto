SQLite format 3   @                                                                   .[4� 
�  ��
�
y                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   �>))�1�4))�tabletempo��tabletriptripCREATE TABLE "trip" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "date" text NOT NULL, "departureAddress" text NOT NULL, "arrivalAddress" text NOT NULL, "distance" integer NOT NULL, "newKmAge" integer NOT NULL, "carId" integer, "driverId" integer, CONSTRAINT "FK_7794de982c19fe8f4cf4460efc6" FOREIGN KEY ("carId") REFERENCES "car" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_2034f2f2e58179b42c4866f6f13" FOREIGN KEY ("driverId") REFERENCES "driver" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)�`�'tablecarcarCREATE TABLE "car" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "type" text NOT NULL, "licenseNumber" text NOT NULL, "fuelType" text NOT NULL, "consumption" integer NOT NULL, "kmAge" integer NOT NULL)  �tabletriptripCREATE TABLE "trip" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "date" text NOT NULL, "departureAddress" text NOT NULL, "arrivalAddress" text NOT NULL, "distance" integer NOT NULL, "newKmAge" integer NOT NULL, "carId" integer, "driverId" integer)P++Ytablesqlite_sequencesqlite_sequenceCREATE TABLE sqlite_sequence(name,seq)�}�UtabledriverdriverCREATE TABLE "driver" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "birthdate" datetime NOT NULL, "address" varchar NOT NULL, "licenseNumber" varchar NOT NULL, "licenseExpireDate" datetime NOT NULL)8 � ��K                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       a #;=;Első Géza1985-06-06 00:00:00.0001535 Kispusta Fő út 2.AB12345692022-12-15 00:00:00.000   %;=;Mézga GéO ;#!;Pisti1992-02-24 23:00:00.0001111 Első AS127845632025-08-09 22:00:00.000b %;=;Mézga Géza1985-06-06 00:00:00.0001535 Kispusta Fő út 2.AB12345672022-12-15 00:00:00.000   � ��                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
drivertrip                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            