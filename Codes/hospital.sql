--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.3
-- Dumped by pg_dump version 9.5.3

-- Started on 2016-11-14 11:55:08

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
-- TOC entry 191 (class 1259 OID 16668)
-- Name: hospital; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE hospital (
    hospitalid integer NOT NULL,
    hospitalname character varying(255),
    totalseat integer,
    occupiedseat integer,
    unoccupiedseat integer
);


ALTER TABLE hospital OWNER TO postgres;

--
-- TOC entry 192 (class 1259 OID 16671)
-- Name: hospital_hospitalid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE hospital_hospitalid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE hospital_hospitalid_seq OWNER TO postgres;

--
-- TOC entry 2224 (class 0 OID 0)
-- Dependencies: 192
-- Name: hospital_hospitalid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE hospital_hospitalid_seq OWNED BY hospital.hospitalid;


--
-- TOC entry 2101 (class 2604 OID 16673)
-- Name: hospitalid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY hospital ALTER COLUMN hospitalid SET DEFAULT nextval('hospital_hospitalid_seq'::regclass);


--
-- TOC entry 2218 (class 0 OID 16668)
-- Dependencies: 191
-- Data for Name: hospital; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO hospital (hospitalid, hospitalname, totalseat, occupiedseat, unoccupiedseat) VALUES (1, 'SanRamon1', 100, 10, 90);
INSERT INTO hospital (hospitalid, hospitalname, totalseat, occupiedseat, unoccupiedseat) VALUES (2, 'SanRamon2', 100, 20, 80);
INSERT INTO hospital (hospitalid, hospitalname, totalseat, occupiedseat, unoccupiedseat) VALUES (3, 'SanRamon3', 100, 30, 70);
INSERT INTO hospital (hospitalid, hospitalname, totalseat, occupiedseat, unoccupiedseat) VALUES (4, 'SanRamon4', 100, 40, 60);
INSERT INTO hospital (hospitalid, hospitalname, totalseat, occupiedseat, unoccupiedseat) VALUES (5, 'SanRamon5', 100, 50, 50);
INSERT INTO hospital (hospitalid, hospitalname, totalseat, occupiedseat, unoccupiedseat) VALUES (6, 'SanRamon6', 100, 60, 40);
INSERT INTO hospital (hospitalid, hospitalname, totalseat, occupiedseat, unoccupiedseat) VALUES (7, 'SanRamon7', 100, 70, 30);
INSERT INTO hospital (hospitalid, hospitalname, totalseat, occupiedseat, unoccupiedseat) VALUES (8, 'SanRamon8', 100, 80, 20);
INSERT INTO hospital (hospitalid, hospitalname, totalseat, occupiedseat, unoccupiedseat) VALUES (9, 'SanRamon9', 100, 90, 10);
INSERT INTO hospital (hospitalid, hospitalname, totalseat, occupiedseat, unoccupiedseat) VALUES (10, 'SanRamon10', 100, 100, 0);


--
-- TOC entry 2225 (class 0 OID 0)
-- Dependencies: 192
-- Name: hospital_hospitalid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('hospital_hospitalid_seq', 10, true);


--
-- TOC entry 2103 (class 2606 OID 16675)
-- Name: hospitalid_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY hospital
    ADD CONSTRAINT hospitalid_pk PRIMARY KEY (hospitalid);


-- Completed on 2016-11-14 11:55:08

--
-- PostgreSQL database dump complete
--

