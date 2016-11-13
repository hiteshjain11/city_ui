--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.3
-- Dumped by pg_dump version 9.5.3

-- Started on 2016-11-13 10:36:46

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
-- TOC entry 185 (class 1259 OID 16641)
-- Name: assetts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE assetts (
    lat double precision,
    longitude double precision,
    assetid character varying(255),
    type character varying(255),
    status character varying(255),
    params hstore,
    assetsid integer NOT NULL
);


ALTER TABLE assetts OWNER TO postgres;

--
-- TOC entry 186 (class 1259 OID 16649)
-- Name: assettimeseries_assettimeseriesid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE assettimeseries_assettimeseriesid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE assettimeseries_assettimeseriesid_seq OWNER TO postgres;

--
-- TOC entry 2209 (class 0 OID 0)
-- Dependencies: 186
-- Name: assettimeseries_assettimeseriesid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE assettimeseries_assettimeseriesid_seq OWNED BY assetts.assetsid;


--
-- TOC entry 2086 (class 2604 OID 16651)
-- Name: assetsid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY assetts ALTER COLUMN assetsid SET DEFAULT nextval('assettimeseries_assettimeseriesid_seq'::regclass);


--
-- TOC entry 2210 (class 0 OID 0)
-- Dependencies: 186
-- Name: assettimeseries_assettimeseriesid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('assettimeseries_assettimeseriesid_seq', 4, true);


--
-- TOC entry 2203 (class 0 OID 16641)
-- Dependencies: 185
-- Data for Name: assetts; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO assetts (lat, longitude, assetid, type, status, params, assetsid) VALUES (37.747810000000001, -121.947997, 'BIN_001', 'Garbage', 'GREEN', '"weight"=>"11.2 ounces", "ISBN-13"=>"978-1449370000", "language"=>"English", "paperback"=>"243", "publisher"=>"postgresqltutorial.com"', 1);
INSERT INTO assetts (lat, longitude, assetid, type, status, params, assetsid) VALUES (36.747810000000001, -122.947997, 'BIN_002', 'Garbage', 'BLUE', '"position"=>"5", "airquality"=>"30%"', 2);
INSERT INTO assetts (lat, longitude, assetid, type, status, params, assetsid) VALUES (35.747810000000001, -120.947997, 'BIN_003', 'Garbage', 'RED', '"position"=>"5", "airquality"=>"30%", "somelocation"=>"Chennai"', 3);


--
-- TOC entry 2088 (class 2606 OID 16648)
-- Name: assettimeseriesid_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY assetts
    ADD CONSTRAINT assettimeseriesid_pk PRIMARY KEY (assetsid);


-- Completed on 2016-11-13 10:36:47

--
-- PostgreSQL database dump complete
--

