create database if not exists backend;
use backend;
create table users(userId char(100),password char(100));
create table timeLine(userId char(100),vehicleId char(20),userName char(15),vehicleType int,inTime timestamp);
create table block(floor int,numberOfOccupied bigint,floorType char(10));
create table history(userId char(100),vehicleId char(20),vehicleType int,inTime timestamp,outTime timestamp);

insert into users values ('100','pass1'),('200','pass2'),('300','pass3'),('400','pass4');


create table vehicleCategory(numberOfWheels char(10));

