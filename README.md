# Export schema of PostgreSQL Database

### Find the path where you install the PostgresSQL
```
cd C:\Program Files\PostgreSQL\10\bin
```

### Run the following scritpt to export the schema
```
pg_dump -U postgres -s dababaseNAME > D:\dababaseNAME.sql
```
