create schema bikes;

create table bikes.bikes_sale (
    id serial primary key,
    brand text not null,
    description text not null,
    model text not null,
    color text not null,
    category text not null,
    photo text not null,
    price Numeric not null,
    date timestamp default now()
);
