/* Queries */
-- Sum the number of payment for each user
select
  customer_name,
  count(*)
from
  payment
group by
  customer_name
order by
  count desc;

-- Sum the payment amounts for each month
select
  sum(amount),
  extract(
    year
    from
      processed_at
  ) as year,
  extract(
    month
    from
      processed_at
  ) as month
from
  payment
group by
  month,
  year
order by
  sum desc;

-- Sum the payment amounts for each month for each user
select
  customer_name,
  sum(amount),
  extract(
    year
    from
      processed_at
  ) as year,
  extract(
    month
    from
      processed_at
  ) as month
from
  payment
group by
  customer_name,
  month,
  year
order by
  customer_name desc;

select
  max(amount),
  year,
  month
from
  (
    select
      customer_name,
      sum(amount) as amount,
      extract(
        year
        from
          processed_at
      ) as year,
      extract(
        month
        from
          processed_at
      ) as month
    from
      payment
    group by
      customer_name,
      month,
      year
  ) as monthly_sums
group by
  year,
  month;

/* Transactions */
begin transaction;

update
  balance
set
  balance = balance - 100
where
  username = 'cleament';

update
  balance
set
  balance = balance + 100
where
  username = 'antonie';

commit;

/* Indexes */
select
  *
from
  large_table
order by
  random_int desc
limit
  10;

create index large_table_random_int_idx on large_table(random_int);