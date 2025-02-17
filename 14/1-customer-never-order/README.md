# Customers Who Never Order

## Table: customers

```text
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
+-------------+---------+
```
id is the primary key (column with unique values) for this table.
Each row of this table indicates the ID and name of a customer.

## Table: orders

```text
+-------------+------+
| Column Name | Type |
+-------------+------+
| id          | int  |
| customer_id  | int  |
+-------------+------+
```
id is the primary key (column with unique values) for this table.
customerId is a foreign key (reference column) of the ID from the customers table.
Each row of this table indicates the ID of an order and the ID of the customer who ordered it.

## Problem Statement

Write a solution to find all customers who never order anything.

Return the result table in any order.

## Example

### Input:

#### customers table:
```text
+----+-------+
| id | name  |
+----+-------+
| 1  | Joe   |
| 2  | Henry |
| 3  | Sam   |
| 4  | Max   |
+----+-------+
```

#### orders table:
```text
+----+------------+
| id | customerId |
+----+------------+
| 1  | 3          |
| 2  | 1          |
+----+------------+
```

### Output:
```text
+-----------+
| customers |
+-----------+
| Henry     |
| Max       |
+-----------+
