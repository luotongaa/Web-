# SQL

## 基本介绍

![SQL](E:\web learning\SQL\doc\SQL.png)

## 常用命令

### use   数据库名 ：

用于选择数据库

### set names utf8：

用于设置使用的字符集

### SELECT ：

从数据库中查找数据

```sql
SELECT column_name(s)
FROM table_name
WHERE condition
ORDER BY column_name [ASC|DESC]
```

- column_name(s)：需要查询的列
- table_name：需要查询的表
- condition：查询条件（可选）
- ORDER BY：排序方式，ASC升序，DESC降序（可选）

### SELECT     DISTINCT：

distinct关键词用于返回唯一不同的值

### ORDER BY：

- ASC：表示按升序排序。
- DESC：表示按降序排序。

```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC|DESC;
```

多列：按照 country，alexa排列

示例

```sql
SELECT * FROM Websites
ORDER BY country,alexa;
```



### WHERE：

该语句用于设置选取条件

示例

```sql
SELECT * FROM Websites WHERE country='CN';
SELECT * FROM Websites WHERE id=1;
```

常见运算符：

|    =    |            等于            |
| :-----: | :------------------------: |
|   <>    |    不等于，有些可用  !=    |
|   >,<   |         大于，小于         |
|  >=,<=  |     大于等于，小于等于     |
| BETWEEN |        在某个范围内        |
|  LINK   |        搜索某种模式        |
|   IN    | 指定针对某个列的多个可能值 |

### AND & OR：

用于条件的逻辑判断

### INSERT      INTO：

向数据库中插入新的数据

```sql
INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...)
```

- table_name：要插入数据的表
- column1, column2：要插入数据的列
- value1, value2：对应列的值

示例

```sql
INSERT INTO Websites (name, url, alexa, country)
VALUES ('百度','https://www.baidu.com/','4','CN');
```

### UPDATE：

用于更新数据库中的现有数据

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition
```

- table_name：要更新数据的表
- column1 = value1, column2 = value2：要更新的列及新的值
- condition：更新条件

示例

```sql
UPDATE Websites 
SET alexa='5000', country='USA' 
WHERE name='菜鸟教程';
```

> [!WARNING]
>
> 上述语句缺少Where的情况下会将所有的 alexa 改为 5000 所有的 country 改为 USA

### DELETE：

用于从数据库表中删除数据

```sql
DELETE FROM table_name
WHERE condition
```

- table_name：要删除数据的表
- condition：删除的条件

示例

```sql
DELETE FROM Websites
WHERE name='Facebook' AND country='USA';
# -------------------------------------------------------------------------
# 删除所有数据，表的结构、属性、索引保持不变
DELETE FROM table_name;
```

### SELECT    TOP,    LIMIT,    ROWNUM：

- **SELECT TOP** 在 SQL Server 和 MS Access 中使用，而在 MySQL 和 PostgreSQL 中使用 **LIMIT** 关键字。
- Oracle 在 12c 版本之前没有直接等效的关键字，可以通过 **ROWNUM** 实现类似功能，但在 12c 及以上版本中引入了 **FETCH FIRST**。
- 当使用 TOP 或 LIMIT 时，最好结合 ORDER BY 子句，以确保返回的行是特定顺序的前几行。

#### SQL Server / MS Access

```sql
SELECT TOP number|percent column1, column2, ...
FROM table_name;
# number|percent：指定返回的行数或者百分比
# number：具体的行数
# percent：数据集的百分比
# ------------------------------------------------------------------------------------------
# 示例 返回前 3 行数据
SELECT TOP 3 EmployeeName, Salary
FROM Employees;
# 返回前 10% 数据
SELECT TOP 10 PERCENT EmployeeName, Salary
FROM Employees;
```

#### MySQL,    PostgreSQL 

```mysql
SELECT column1, column2, ...
FROM table_name
LIMIT number;
# ---------------------------------------------------------------------------------------------
# 示例 返回前 3 行数据
SELECT EmployeeName, Salary
FROM Employees
LIMIT 3;
```

#### **Oracle** 

```sql
SELECT EmployeeName, Salary
FROM Employees
FETCH FIRST 3 ROWS ONLY;
# ----------------------------------------------------------------------------------------------
# 示例 返回前 3 行数据
SELECT EmployeeName, Salary
FROM Employees
FETCH FIRST 3 ROWS ONLY;
```

### LIKE：

LIKE 操作符是 SQL 中用于在 WHERE 子句中进行模糊查询的关键字

```

```

