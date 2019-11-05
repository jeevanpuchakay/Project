create database if not exists backend;
use backend;
create table users(userId char(100),password char(100));
create table timeLine(userId char(100),vehicleId char(20),userName char(15),vehicleType int,inTime timestamp default current_timestamp);
create table block(floor int,numberOfOccupied bigint,floorType char(10));
create table history(userId char(100),vehicleId char(20),vehicleType int,inTime timestamp,outTime timestamp default current_timestamp);

insert into users values ('100','pass1'),('200','pass2'),('300','pass3'),('400','pass4');

#drop table vehicleCategory;

create table vehicleCategory(numberOfWheels bigint,fare double);

insert into vehicleCategory value (1,.25);

select * from vehicleCategory;

#drop table history;
