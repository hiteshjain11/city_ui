--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.3
-- Dumped by pg_dump version 9.5.3

-- Started on 2016-11-14 12:17:18

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
-- TOC entry 193 (class 1259 OID 16676)
-- Name: transport; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE transport (
    transportid integer NOT NULL,
    transportname character varying(255),
    totalavailable integer,
    occupied integer,
    unoccupied integer
);


ALTER TABLE transport OWNER TO postgres;

--
-- TOC entry 194 (class 1259 OID 16679)
-- Name: transport_transportid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE transport_transportid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE transport_transportid_seq OWNER TO postgres;

--
-- TOC entry 2229 (class 0 OID 0)
-- Dependencies: 194
-- Name: transport_transportid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE transport_transportid_seq OWNED BY transport.transportid;


--
-- TOC entry 2106 (class 2604 OID 16681)
-- Name: transportid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY transport ALTER COLUMN transportid SET DEFAULT nextval('transport_transportid_seq'::regclass);


--
-- TOC entry 2223 (class 0 OID 16676)
-- Dependencies: 193
-- Data for Name: transport; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO transport (transportid, transportname, totalavailable, occupied, unoccupied) VALUES (1, 'Firetrucks', 100, 10, 90);
INSERT INTO transport (transportid, transportname, totalavailable, occupied, unoccupied) VALUES (2, 'Firetrucks', 100, 10, 90);
INSERT INTO transport (transportid, transportname, totalavailable, occupied, unoccupied) VALUES (3, 'Collectiontrucks', 100, 20, 80);
INSERT INTO transport (transportid, transportname, totalavailable, occupied, unoccupied) VALUES (4, 'Ambulance', 100, 30, 70);
INSERT INTO transport (transportid, transportname, totalavailable, occupied, unoccupied) VALUES (5, 'Citybus', 100, 40, 60);


--
-- TOC entry 2230 (class 0 OID 0)
-- Dependencies: 194
-- Name: transport_transportid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('transport_transportid_seq', 5, true);


--
-- TOC entry 2108 (class 2606 OID 16683)
-- Name: transportid_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY transport
    ADD CONSTRAINT transportid_pk PRIMARY KEY (transportid);


-- Completed on 2016-11-14 12:17:18

--
-- PostgreSQL database dump complete
--

