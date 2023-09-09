# PostgreSQL

# Linux

# Enter postgres
```bash
sudo su - postgres
```

# Create a postgres database
- after `sudo su - postgres` run
```bash
pwd
```
- copy that path
- you will have to copy you **.sql** file to the path you copied
- run `ls` to verify if you copied it correctly
- then
```bash
psql -d database_name -f create.sql
```
- `-d` -> is for the database name
- `-f` -> is for specifying your **.sql** file

# Enter a postgres database
```bash
psql -d app
```

# For better view -> column view
## helps when there's a lot of columns in a table, and you're running `SELECT * FROM table`;
```psql
db_name=# \x on
Expanded display is on.
```
> will return your results in a **column view**
