-- sudo -u postgres psql
create database algoexper;

-- \c algoexper;
create table payment(
  customer_name varchar(123),
  processed_at date,
  amount int
);

create table balance (username varchar(128), balance int);

create table large_table (random_int int);

insert into
  payment
values
  ('cleament', '2019-12-15', 10);

insert into
  payment
values
  ('antonie', '2020-01-15', 10);

insert into
  payment
values
  ('cleament', '2020-01-15', 10);

insert into
  payment
values
  ('antonie', '2020-01-15', 10);

insert into
  payment
values
  ('cleament', '2020-01-15', 10);

insert into
  payment
values
  ('simon', '2020-01-15', 10);

insert into
  payment
values
  ('antonie', '2020-01-15', 10);

insert into
  payment
values
  ('cleament', '2020-01-15', 10);

insert into
  payment
values
  ('meghan', '2020-02-15', 10);

insert into
  payment
values
  ('meghan', '2020-02-15', 10);

insert into
  payment
values
  ('alex', '2020-02-15', 10);

insert into
  payment
values
  ('cleament', '2020-02-15', 10);

insert into
  payment
values
  ('marli', '2020-02-15', 10);

insert into
  payment
values
  ('alex', '2020-02-15', 10);

insert into
  payment
values
  ('marli', '2020-12-15', 10);

insert into
  payment
values
  ('marli', '2020-01-15', 10);

insert into
  payment
values
  ('cleament', '2020-02-15', 10);

insert into
  balance
values
  ('antonie', 0);

insert into
  balance
values
  ('cleament', 1000);

insert into
  large_table (random_int)
select
  round(random() * 1000000000)
from
  generate_series(1, 50000000) s(i);