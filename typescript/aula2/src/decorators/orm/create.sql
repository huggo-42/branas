drop table if exists branas.book;
drop table if exists branas.car;

create table branas.book (
    id serial,
    title text,
    author text
);

create table branas.car (
    id serial,
    br text,
    md text
);
