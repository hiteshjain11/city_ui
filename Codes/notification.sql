--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.3
-- Dumped by pg_dump version 9.5.3

-- Started on 2016-11-12 16:25:40

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
-- TOC entry 182 (class 1259 OID 16457)
-- Name: notification; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE notification (
    notificationdate date,
    notificationday character(255),
    notificationassignedto character(255),
    notificationtext character(255),
    notificationstatus character(255),
    notificationtime timestamp with time zone,
    notificationid integer NOT NULL
);


ALTER TABLE notification OWNER TO postgres;

--
-- TOC entry 183 (class 1259 OID 16497)
-- Name: notification_notificationid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE notification_notificationid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE notification_notificationid_seq OWNER TO postgres;

--
-- TOC entry 2106 (class 0 OID 0)
-- Dependencies: 183
-- Name: notification_notificationid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE notification_notificationid_seq OWNED BY notification.notificationid;


--
-- TOC entry 1985 (class 2604 OID 16499)
-- Name: notificationid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY notification ALTER COLUMN notificationid SET DEFAULT nextval('notification_notificationid_seq'::regclass);


--
-- TOC entry 2100 (class 0 OID 16457)
-- Dependencies: 182
-- Data for Name: notification; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO notification (notificationdate, notificationday, notificationassignedto, notificationtext, notificationstatus, notificationtime, notificationid) VALUES ('2016-11-12', 'Saturday                                                                                                                                                                                                                                                       ', 'Naga                                                                                                                                                                                                                                                           ', 'Bin is half full                                                                                                                                                                                                                                               ', 'Unattended                                                                                                                                                                                                                                                     ', '2016-11-12 02:23:54-06', 1);
INSERT INTO notification (notificationdate, notificationday, notificationassignedto, notificationtext, notificationstatus, notificationtime, notificationid) VALUES ('2016-11-12', 'Saturday                                                                                                                                                                                                                                                       ', 'Naga                                                                                                                                                                                                                                                           ', 'Bin is half full                                                                                                                                                                                                                                               ', 'Unattended                                                                                                                                                                                                                                                     ', '2016-11-12 02:23:54-06', 2);
INSERT INTO notification (notificationdate, notificationday, notificationassignedto, notificationtext, notificationstatus, notificationtime, notificationid) VALUES ('2016-11-12', 'Saturday                                                                                                                                                                                                                                                       ', 'Naga                                                                                                                                                                                                                                                           ', 'Bin is half full                                                                                                                                                                                                                                               ', 'Unattended                                                                                                                                                                                                                                                     ', '2016-11-12 02:23:54-06', 3);


--
-- TOC entry 2107 (class 0 OID 0)
-- Dependencies: 183
-- Name: notification_notificationid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('notification_notificationid_seq', 3, true);


-- Completed on 2016-11-12 16:25:41

--
-- PostgreSQL database dump complete
--

