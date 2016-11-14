--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.3
-- Dumped by pg_dump version 9.5.3

-- Started on 2016-11-14 10:39:58

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 187 (class 1259 OID 16652)
-- Name: bins; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE bins (
    binid integer NOT NULL,
    binname character varying(255),
    fillagelevel integer,
    gaslevel integer
);


ALTER TABLE bins OWNER TO postgres;

--
-- TOC entry 188 (class 1259 OID 16657)
-- Name: bins_binid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE bins_binid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE bins_binid_seq OWNER TO postgres;

--
-- TOC entry 2214 (class 0 OID 0)
-- Dependencies: 188
-- Name: bins_binid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE bins_binid_seq OWNED BY bins.binid;


--
-- TOC entry 2091 (class 2604 OID 16659)
-- Name: binid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY bins ALTER COLUMN binid SET DEFAULT nextval('bins_binid_seq'::regclass);


--
-- TOC entry 2208 (class 0 OID 16652)
-- Dependencies: 187
-- Data for Name: bins; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO bins (binid, binname, fillagelevel, gaslevel) VALUES (1, 'SanRamon1', 10, 100);
INSERT INTO bins (binid, binname, fillagelevel, gaslevel) VALUES (2, 'SanRamon2', 20, 100);
INSERT INTO bins (binid, binname, fillagelevel, gaslevel) VALUES (3, 'SanRamon3', 30, 100);
INSERT INTO bins (binid, binname, fillagelevel, gaslevel) VALUES (4, 'SanRamon4', 40, 30);
INSERT INTO bins (binid, binname, fillagelevel, gaslevel) VALUES (5, 'SanRamon5', 50, 30);
INSERT INTO bins (binid, binname, fillagelevel, gaslevel) VALUES (6, 'SanRamon6', 60, 50);
INSERT INTO bins (binid, binname, fillagelevel, gaslevel) VALUES (7, 'SanRamon7', 70, 50);
INSERT INTO bins (binid, binname, fillagelevel, gaslevel) VALUES (8, 'SanRamon8', 80, 20);
INSERT INTO bins (binid, binname, fillagelevel, gaslevel) VALUES (9, 'SanRamon9', 90, 20);
INSERT INTO bins (binid, binname, fillagelevel, gaslevel) VALUES (10, 'SanRamon10', 100, 20);


--
-- TOC entry 2215 (class 0 OID 0)
-- Dependencies: 188
-- Name: bins_binid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('bins_binid_seq', 10, true);


--
-- TOC entry 2093 (class 2606 OID 16656)
-- Name: binid_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY bins
    ADD CONSTRAINT binid_pk PRIMARY KEY (binid);


-- Completed on 2016-11-14 10:39:58

--
-- PostgreSQL database dump complete
--

