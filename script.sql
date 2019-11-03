create database if not exists backend;
use backend;
create table users(userId char(100),password char(100));
create table timeLine(userId char(100),vehicleId char(20),userName char(15),vehicleType int,inTime timestamp);
create table block(floor int,numberOfOccupied bigint,floorType char(10));
create table history(userId char(100),vehicleId char(20),vehicleType int,inTime timestamp,outTime timestamp);
