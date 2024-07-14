CREATE DATABASE joyas;

\c joyas;

CREATE TABLE inventario 
(
    id         SERIAL       NOT NULL,
    nombre     VARCHAR(50)  NOT NULL,
    categoria  VARCHAR(50)  NOT NULL,
    metal      VARCHAR(50)  NOT NULL,
    precio     INT          NOT NULL,
    stock      INT          NOT NULL
);
