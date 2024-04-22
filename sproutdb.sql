--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

-- Started on 2024-04-22 16:44:11

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE IF EXISTS sprouttest;
--
-- TOC entry 4872 (class 1262 OID 74184)
-- Name: sprouttest; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE sprouttest WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Swedish_Sweden.1252';


ALTER DATABASE sprouttest OWNER TO postgres;

\connect sprouttest

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 222 (class 1259 OID 74227)
-- Name: climate_zone; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.climate_zone (
    id integer NOT NULL,
    name character(40) NOT NULL
);


ALTER TABLE public.climate_zone OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 74185)
-- Name: light_level; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.light_level (
    name character(20) NOT NULL
);


ALTER TABLE public.light_level OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 74237)
-- Name: light_preferrence; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.light_preferrence (
    plant_id integer NOT NULL,
    light_level_id character(20) NOT NULL,
    modifier real
);


ALTER TABLE public.light_preferrence OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 74304)
-- Name: plant; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.plant (
    id integer NOT NULL,
    name character(64) NOT NULL,
    preferred_watering_amount real NOT NULL,
    preferred_watering_frequency character(20) NOT NULL,
    extra_info character(2000),
    preferred_average_temperature character(20),
    preferred_pot_size character(20)
);


ALTER TABLE public.plant OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 74197)
-- Name: plant_care; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.plant_care (
    name character(30) NOT NULL
);


ALTER TABLE public.plant_care OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 74202)
-- Name: plant_care_preferrence; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.plant_care_preferrence (
    plant_care_id character(30) NOT NULL,
    plant_id integer NOT NULL
);


ALTER TABLE public.plant_care_preferrence OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 74342)
-- Name: plant_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.plant ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.plant_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 218 (class 1259 OID 74207)
-- Name: season; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.season (
    id integer NOT NULL,
    name character(30) NOT NULL
);


ALTER TABLE public.season OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 74293)
-- Name: season_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.season ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.season_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 219 (class 1259 OID 74212)
-- Name: season_preferrence; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.season_preferrence (
    season_id integer NOT NULL,
    plant_id integer NOT NULL,
    modifier real NOT NULL
);


ALTER TABLE public.season_preferrence OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 74217)
-- Name: soil; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.soil (
    id integer NOT NULL,
    name character(30) NOT NULL
);


ALTER TABLE public.soil OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 74294)
-- Name: soil_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.soil ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.soil_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 221 (class 1259 OID 74222)
-- Name: soil_preferrence; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.soil_preferrence (
    plant_id integer NOT NULL,
    soil_id integer NOT NULL,
    modifier real NOT NULL
);


ALTER TABLE public.soil_preferrence OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 74295)
-- Name: zone_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.climate_zone ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.zone_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 223 (class 1259 OID 74232)
-- Name: zone_preferrence; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.zone_preferrence (
    plant_id integer NOT NULL,
    zone_id integer NOT NULL,
    modifier real NOT NULL
);


ALTER TABLE public.zone_preferrence OWNER TO postgres;

--
-- TOC entry 4859 (class 0 OID 74227)
-- Dependencies: 222
-- Data for Name: climate_zone; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.climate_zone OVERRIDING SYSTEM VALUE VALUES (2, 'tropical                                ');
INSERT INTO public.climate_zone OVERRIDING SYSTEM VALUE VALUES (3, 'dry                                     ');
INSERT INTO public.climate_zone OVERRIDING SYSTEM VALUE VALUES (4, 'temperate                               ');
INSERT INTO public.climate_zone OVERRIDING SYSTEM VALUE VALUES (5, 'continental                             ');
INSERT INTO public.climate_zone OVERRIDING SYSTEM VALUE VALUES (6, 'polar                                   ');


--
-- TOC entry 4852 (class 0 OID 74185)
-- Dependencies: 215
-- Data for Name: light_level; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.light_level OVERRIDING SYSTEM VALUE VALUES ('full sun            ');
INSERT INTO public.light_level OVERRIDING SYSTEM VALUE VALUES ('partial sun         ');
INSERT INTO public.light_level OVERRIDING SYSTEM VALUE VALUES ('shade               ');
INSERT INTO public.light_level OVERRIDING SYSTEM VALUE VALUES ('artificial light    ');


--
-- TOC entry 4861 (class 0 OID 74237)
-- Dependencies: 224
-- Data for Name: light_preferrence; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.light_preferrence VALUES (3, 'full sun            ', 1);
INSERT INTO public.light_preferrence VALUES (3, 'partial sun         ', 1);


--
-- TOC entry 4865 (class 0 OID 74304)
-- Dependencies: 228
-- Data for Name: plant; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.plant OVERRIDING SYSTEM VALUE VALUES (3, 'strawberry                                                      ', 2.5, '1-3                 ', NULL, '10-24               ', '20-25               ');


--
-- TOC entry 4853 (class 0 OID 74197)
-- Dependencies: 216
-- Data for Name: plant_care; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.plant_care VALUES ('pruning                       ');
INSERT INTO public.plant_care VALUES ('trimming                      ');
INSERT INTO public.plant_care VALUES ('fertilizer                    ');
INSERT INTO public.plant_care VALUES ('repotting                     ');


--
-- TOC entry 4854 (class 0 OID 74202)
-- Dependencies: 217
-- Data for Name: plant_care_preferrence; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.plant_care_preferrence VALUES ('fertilizer                    ', 3);


--
-- TOC entry 4855 (class 0 OID 74207)
-- Dependencies: 218
-- Data for Name: season; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.season OVERRIDING SYSTEM VALUE VALUES (14, 'early spring                  ');
INSERT INTO public.season OVERRIDING SYSTEM VALUE VALUES (15, 'late spring                   ');
INSERT INTO public.season OVERRIDING SYSTEM VALUE VALUES (16, 'early summer                  ');
INSERT INTO public.season OVERRIDING SYSTEM VALUE VALUES (17, 'late summer                   ');
INSERT INTO public.season OVERRIDING SYSTEM VALUE VALUES (18, 'early autumn                  ');
INSERT INTO public.season OVERRIDING SYSTEM VALUE VALUES (19, 'late autumn                   ');
INSERT INTO public.season OVERRIDING SYSTEM VALUE VALUES (20, 'early winter                  ');
INSERT INTO public.season OVERRIDING SYSTEM VALUE VALUES (21, 'late winter                   ');


--
-- TOC entry 4856 (class 0 OID 74212)
-- Dependencies: 219
-- Data for Name: season_preferrence; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.season_preferrence VALUES (14, 3, 1);
INSERT INTO public.season_preferrence VALUES (18, 3, 1);


--
-- TOC entry 4857 (class 0 OID 74217)
-- Dependencies: 220
-- Data for Name: soil; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.soil OVERRIDING SYSTEM VALUE VALUES (4, 'well-draining                 ');
INSERT INTO public.soil OVERRIDING SYSTEM VALUE VALUES (5, 'loamy soil                    ');
INSERT INTO public.soil OVERRIDING SYSTEM VALUE VALUES (6, 'potting mix                   ');


--
-- TOC entry 4858 (class 0 OID 74222)
-- Dependencies: 221
-- Data for Name: soil_preferrence; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.soil_preferrence VALUES (3, 4, 1);


--
-- TOC entry 4860 (class 0 OID 74232)
-- Dependencies: 223
-- Data for Name: zone_preferrence; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.zone_preferrence VALUES (3, 4, 1);


--
-- TOC entry 4873 (class 0 OID 0)
-- Dependencies: 229
-- Name: plant_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.plant_id_seq', 3, true);


--
-- TOC entry 4874 (class 0 OID 0)
-- Dependencies: 225
-- Name: season_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.season_id_seq', 21, true);


--
-- TOC entry 4875 (class 0 OID 0)
-- Dependencies: 226
-- Name: soil_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.soil_id_seq', 9, true);


--
-- TOC entry 4876 (class 0 OID 0)
-- Dependencies: 227
-- Name: zone_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.zone_id_seq', 6, true);


-- Completed on 2024-04-22 16:44:11

--
-- PostgreSQL database dump complete
--

