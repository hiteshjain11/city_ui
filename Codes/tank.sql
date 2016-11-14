--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.3
-- Dumped by pg_dump version 9.5.3

-- Started on 2016-11-14 11:34:28

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
-- TOC entry 189 (class 1259 OID 16660)
-- Name: tank; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE tank (
    tankid integer NOT NULL,
    tankname character varying(255),
    ph integer,
    chlorine integer,
    turbidity integer,
    lead integer
);


ALTER TABLE tank OWNER TO postgres;

--
-- TOC entry 190 (class 1259 OID 16663)
-- Name: tank_tankid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE tank_tankid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE tank_tankid_seq OWNER TO postgres;

--
-- TOC entry 2219 (class 0 OID 0)
-- Dependencies: 190
-- Name: tank_tankid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE tank_tankid_seq OWNED BY tank.tankid;


--
-- TOC entry 2096 (class 2604 OID 16665)
-- Name: tankid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY tank ALTER COLUMN tankid SET DEFAULT nextval('tank_tankid_seq'::regclass);


--
-- TOC entry 2213 (class 0 OID 16660)
-- Dependencies: 189
-- Data for Name: tank; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO tank (tankid, tankname, ph, chlorine, turbidity, lead) VALUES (1, 'SanRamon1', 10, 100, 20, 40);
INSERT INTO tank (tankid, tankname, ph, chlorine, turbidity, lead) VALUES (2, 'SanRamon2', 20, 90, 10, 20);
INSERT INTO tank (tankid, tankname, ph, chlorine, turbidity, lead) VALUES (3, 'SanRamon3', 30, 80, 30, 10);
INSERT INTO tank (tankid, tankname, ph, chlorine, turbidity, lead) VALUES (4, 'SanRamon4', 40, 700, 60, 100);
INSERT INTO tank (tankid, tankname, ph, chlorine, turbidity, lead) VALUES (5, 'SanRamon5', 50, 60, 50, 90);
INSERT INTO tank (tankid, tankname, ph, chlorine, turbidity, lead) VALUES (6, 'SanRamon6', 60, 500, 40, 80);
INSERT INTO tank (tankid, tankname, ph, chlorine, turbidity, lead) VALUES (7, 'SanRamon7', 70, 40, 100, 70);
INSERT INTO tank (tankid, tankname, ph, chlorine, turbidity, lead) VALUES (8, 'SanRamon8', 80, 30, 90, 60);
INSERT INTO tank (tankid, tankname, ph, chlorine, turbidity, lead) VALUES (9, 'SanRamon9', 90, 20, 80, 50);
INSERT INTO tank (tankid, tankname, ph, chlorine, turbidity, lead) VALUES (10, 'SanRamon10', 100, 10, 70, 30);


--
-- TOC entry 2220 (class 0 OID 0)
-- Dependencies: 190
-- Name: tank_tankid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('tank_tankid_seq', 11, true);


--
-- TOC entry 2098 (class 2606 OID 16667)
-- Name: tankid_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY tank
    ADD CONSTRAINT tankid_pk PRIMARY KEY (tankid);


-- Completed on 2016-11-14 11:34:28

--
-- PostgreSQL database dump complete
--

